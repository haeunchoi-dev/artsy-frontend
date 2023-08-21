import { useInfiniteQuery } from 'react-query';

import api from '@utils/api';

export const QUERY_KEY = '/api/user/tickets';

const useTicketInfiniteQuery = (categoryId) => {
    const limit = 10;

    const fetcher = ({ pageParam }) => {
        let apiUrl;
        if (categoryId !== '0' && categoryId) {
            // 필터선택되어 있을 때
            if (!pageParam) {
                apiUrl = `${QUERY_KEY}?limit=${limit}&categoryId=${categoryId}`;
            } else {
                apiUrl = `${QUERY_KEY}?limit=${limit}&categoryId=${categoryId}&lastId=${pageParam}`;
            }
        } else {
            // 필터선택 안했을 때
            if (!pageParam) {
                apiUrl = `${QUERY_KEY}?limit=${limit}`;
            } else {
                apiUrl = `${QUERY_KEY}?limit=${limit}&lastId=${pageParam}`;
            }
        }

        return api.get(apiUrl);
    };
    const options = {
        getNextPageParam: (lastPage, allPages) => {
            const latPageTickets = lastPage.ticketList;
            const lastPageTicketsCount = latPageTickets?.length;
            if (allPages[0].ticketList.length === 0) return undefined; // 기록 없을 때
            return lastPageTicketsCount >= limit ? latPageTickets[lastPageTicketsCount - 1].id : undefined;
        },
    };
    const query = useInfiniteQuery([QUERY_KEY, categoryId], fetcher, options);
    return query;
};

export default useTicketInfiniteQuery;
