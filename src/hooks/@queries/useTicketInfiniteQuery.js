import { useInfiniteQuery } from 'react-query';

import api from '@utils/api';

export const QUERY_KEY = '/api/user/tickets';

const useTicketInfiniteQuery = (categoryId) => {
    const limit = 10;

    const fetcher = ({ pageParam }) => {
        let apiUrl = `${QUERY_KEY}?limit=${limit}`;

        if (categoryId !== '0' && categoryId) {
            apiUrl += `&categoryId=${categoryId}`;
        }

        if (pageParam) apiUrl += `&lastId=${pageParam}`;

        return api.get(apiUrl);
    };
    const options = {
        getNextPageParam: (lastPage, allPages) => {
            const latPageTickets = lastPage.ticketList;
            const lastPageTicketsCount = latPageTickets?.length;
            // 기록 없을 때
            if (allPages[0].ticketList.length === 0) return undefined;
            return lastPageTicketsCount >= limit ? latPageTickets[lastPageTicketsCount - 1].id : undefined;
        },
    };

    return useInfiniteQuery([QUERY_KEY, categoryId], fetcher, options);
};

export default useTicketInfiniteQuery;
