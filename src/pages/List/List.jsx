import { useState, useCallback } from 'react';
import { useTheme } from 'styled-components';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';

import useCategoryQuery from '@hooks/@queries/useCategoryQuery';
import useTicketQuery from '@hooks/@queries/useTicketQuery';
import Ticket from '@components/Ticket/Ticket';
import Container from '@components/@common/Container/Container.jsx';
import Button from '@components/@common/Button/Button.jsx';
import Loading from '@components/@common/Loading/Loading.jsx';
import formatDate from '@utils/formatDate';
import * as L from './List.styles';

const List = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const [categoryId, setCategoryId] = useState(searchParams.get('categoryId'));

    const setSortParams = useCallback((categoryId) => {
        categoryId === 0 ? searchParams.delete('categoryId') : searchParams.set('categoryId', categoryId);
        setSearchParams(searchParams);
    }, []);

    const categoryQuery = useCategoryQuery();
    const ticketQuery = useTicketQuery(categoryId);

    const handleFilter = (e) => {
        const selectedIdx = e.target.selectedIndex;
        setSortParams(selectedIdx);
        setCategoryId(selectedIdx);
    };

    if (ticketQuery.isLoading) return <Loading></Loading>;

    return (
        <>
            <Container>
                <L.TitleWrap>
                    <h4>총 {ticketQuery?.data?.length} 개</h4>
                </L.TitleWrap>
            </Container>
            <L.FilterWrap>
                <L.FilterInner>
                    <L.Filter onChange={handleFilter} value={categoryId ?? '전체'}>
                        <option value="0">전체</option>
                        {categoryQuery?.data?.map(({ id, name }) => (
                            <option key={id} value={id}>
                                {name}
                            </option>
                        ))}
                    </L.Filter>
                    <Button size="small" color={theme.colors.point1} onClick={() => navigate('/ticket/create')}>
                        티켓추가
                    </Button>
                </L.FilterInner>
            </L.FilterWrap>
            <Container>
                {ticketQuery?.data?.length === 0 && <L.NoTicket>아직 추가하신 기록이 없습니다</L.NoTicket>}
                <L.TicketList>
                    {ticketQuery?.data?.map(({ id, categoryColor, title, showDate, rating, fileImageUrl }) => (
                        <Link to={`/ticket/detail/${id}`} key={id}>
                            <Ticket
                                categoryColor={categoryColor}
                                title={title}
                                showDate={formatDate(showDate)}
                                rating={rating}
                                imUrl={fileImageUrl}
                            />
                        </Link>
                    ))}
                </L.TicketList>
            </Container>
        </>
    );
};
export default List;
