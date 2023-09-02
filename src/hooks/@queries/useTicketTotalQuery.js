import { useQuery, useQueryClient } from 'react-query';
import useApi from '@hooks/useApi';

export const QUERY_KEY = '/api/user/ticket-total';

const useTicketTotalQuery = () => {
    const api = useApi();

    const getTotalCount = () => {
        const fetcher = () => api.get(`${QUERY_KEY}-count`);

        return useQuery({
            queryKey: [`${QUERY_KEY}-count`],
            queryFn: fetcher,
            retry: false,
        });
    };

    const getTotalPrice = () => {
        const fetcher = () => api.get(`${QUERY_KEY}-price`);

        return useQuery({
            queryKey: [`${QUERY_KEY}-price`],
            queryFn: fetcher,
            retry: false,
        });
    };

    return { getTotalCount, getTotalPrice };
};

export default useTicketTotalQuery;
