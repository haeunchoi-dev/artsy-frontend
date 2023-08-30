import { useInfiniteQuery } from 'react-query';

import useApi from '@hooks/useApi';

export const QUERY_KEY = '/api/user/tickets';

const useTicketInfiniteQuery = (categoryId) => {
    const api = useApi();
    const limit = 10;

    const fetcher = ({ pageParam }) => {
        let apiUrl = `${QUERY_KEY}?limit=${limit}`;

        if (categoryId !== '0' && categoryId) {
            apiUrl += `&categoryId=${categoryId}`;
        }

        if (pageParam) apiUrl += `&page=${pageParam}`;

        return api.get(apiUrl);
    };
    const options = {
        getNextPageParam: (lastPage, allPages) => {
            const total = lastPage.totalCount;
            const prevPage = lastPage.page;
            // 기록 없을 때
            if (allPages[0].ticketList.length === 0) return undefined;
            return total >= prevPage * limit ? prevPage + 1 : undefined;
        },
        retry: false,
    };

    return useInfiniteQuery([QUERY_KEY, categoryId], fetcher, options);
};

export default useTicketInfiniteQuery;
