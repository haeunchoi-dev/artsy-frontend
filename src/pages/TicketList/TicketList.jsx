import { useState, useCallback, useRef, useEffect } from 'react';
import { useTheme } from 'styled-components';
import { useSearchParams, useNavigate } from 'react-router-dom';

import useCategoryQuery from '@hooks/@queries/useCategoryQuery';
import useTicketInfiniteQuery from '@hooks/@queries/useTicketInfiniteQuery';
import Container from '@components/@common/Container/Container.jsx';
import Button from '@components/@common/Button/Button.jsx';
import TopButton from '@components/@common/TopButton/TopButton.jsx';
import TicketLoading from '@components/TicketListPage/TicketLoading/TicketLoading.jsx';
import Ticket from '@components/TicketListPage/Ticket/Ticket';
import TitleWrap from '@components/TicketListPage/TitleWrap/TitleWrap.jsx';
import CategoryFilter from '@components/TicketListPage/CategoryFilter/CategoryFilter.jsx';
import InfiniteLoading from '@components/TicketListPage/InfiniteLoading/InfiniteLoading.jsx';
import NoTicket from '@components/TicketListPage/NoTicket/NoTicket.jsx';

import * as L from './TicketList.styles';
import { formatDate } from '@utils/formatDate';

const List = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const observerEl = useRef(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const [categoryId, setCategoryId] = useState(searchParams.get('categoryId'));

    const changeSearchParams = useCallback((categoryId) => {
        categoryId === 0 ? searchParams.delete('categoryId') : searchParams.set('categoryId', categoryId);
        setSearchParams(searchParams);
    }, []);

    const categoryQuery = useCategoryQuery();
    const ticketQuery = useTicketInfiniteQuery(categoryId);

    const handleFilter = (e) => {
        const selectedIdx = e.target.selectedIndex;
        changeSearchParams(selectedIdx);
        setCategoryId(selectedIdx);
    };

    const handleObserver = useCallback(
        (entries) => {
            const [targetInfo] = entries;
            if (targetInfo.isIntersecting && ticketQuery.hasNextPage) {
                ticketQuery.fetchNextPage();
            }
        },
        [ticketQuery.fetchNextPage, ticketQuery.hasNextPage]
    );

    useEffect(() => {
        if (!observerEl.current) return;
        const element = observerEl.current;
        const options = {
            threshold: 0,
        };
        const observer = new IntersectionObserver(handleObserver, options);
        observer.observe(element);

        return () => observer.unobserve(element);
    }, [ticketQuery.fetchNextPage, ticketQuery.hasNextPage, handleObserver]);

    return (
        <>
            <TopButton />
            <Container>
                <TitleWrap totalCount={ticketQuery?.data?.pages[0]?.totalCount} />
            </Container>
            <L.FilterWrap>
                <L.FilterInner>
                    <CategoryFilter
                        onChange={(e) => handleFilter(e)}
                        value={categoryId ?? '전체'}
                        categories={categoryQuery?.data}
                    />
                    <Button size="small" color={theme.colors.point1} onClick={() => navigate('/ticket/create')}>
                        티켓추가
                    </Button>
                </L.FilterInner>
            </L.FilterWrap>
            <Container>
                {ticketQuery?.isLoading && <TicketLoading />}
                {ticketQuery?.data?.pages[0].ticketList.length === 0 && <NoTicket />}
                <L.TicketList>
                    {ticketQuery?.data?.pages.map((page) =>
                        page?.ticketList.map(({ id, categoryColor, title, showDate, rating, fileImageUrl }) => {
                            return (
                                <Ticket
                                    key={id}
                                    categoryColor={categoryColor}
                                    title={title}
                                    showDate={formatDate(showDate)}
                                    rating={rating}
                                    imUrl={fileImageUrl}
                                    to={`/ticket/detail/${id}`}
                                />
                            );
                        })
                    )}
                </L.TicketList>
                <InfiniteLoading ref={observerEl} isNext={ticketQuery.isFetchingNextPage && ticketQuery.hasNextPage} />
            </Container>
        </>
    );
};
export default List;
