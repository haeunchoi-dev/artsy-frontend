import { useState, useCallback } from 'react';
import { useTheme } from 'styled-components';
import { Link } from 'react-router-dom';
import { useQuery, useQueryClient } from 'react-query';
import { useSearchParams } from 'react-router-dom';

import useCategoryQuery from '@hooks/@queries/useCategoryQuery';
import useTicketQuery from '@hooks/@queries/useTicketQuery';

import Ticket from '@components/Ticket/Ticket';
import Container from '@components/@common/Container/Container.jsx';
import Button from '@components/@common/Button/Button.jsx';
import * as L from './List.styles';

const List = () => {
    const theme = useTheme();
    const queryClient = useQueryClient();
    const [searchParams, setSearchParams] = useSearchParams();
    const sortKey = searchParams.get('categoryId');
    const [categoryId, setCategoryId] = useState(sortKey);

    const setSortParams = useCallback((categoryId) => {
        categoryId === 0 ? searchParams.delete('categoryId') : searchParams.set('categoryId', categoryId);
        setSearchParams(searchParams);
    }, []);

    const categoryQuery = useCategoryQuery();
    const ticketQuery = useTicketQuery(categoryId);

    const handleFilter = (e) => {
        setSortParams(e.target.selectedIndex);
        setCategoryId(e.target.selectedIndex);
    };
    console.log(categoryId);
    return (
        <>
            <Container>
                <L.TitleWrap>
                    <h4>총 {ticketQuery.data?.length} 개</h4>
                </L.TitleWrap>
            </Container>
            <L.FilterWrap>
                <L.FilterInner>
                    <L.Filter onChange={handleFilter} value={categoryId ?? '전체'}>
                        <option value="0">전체</option>
                        {categoryQuery?.data?.map((category, idx) => (
                            <option key={`${category.name}-${idx}`} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </L.Filter>
                    <Button size="small" color={theme.colors.point1}>
                        티켓추가
                    </Button>
                </L.FilterInner>
            </L.FilterWrap>
            <Container>
                {ticketQuery.data?.length === 0 && <L.NoTicket>아직 추가하신 기록이 없습니다</L.NoTicket>}
                <L.TicketList>
                    {ticketQuery.data?.map((ticket, idx) => (
                        <Link to={`/detail/${ticket.id}`} key={idx}>
                            <Ticket
                                category={ticket.categoryName}
                                title={ticket.title}
                                showDate={ticket.showDate}
                                rating={ticket.rating}
                                image={ticket.files}
                            />
                        </Link>
                    ))}
                </L.TicketList>
            </Container>
        </>
    );
};
export default List;
