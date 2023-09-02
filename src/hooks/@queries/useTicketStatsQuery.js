import { useQuery } from 'react-query';
import useApi from '@hooks/useApi';

export const QUERY_KEY = '/api/user/statistic';

const useTicketStatsQuery = (year, month) => {
    const api = useApi();
    const fetcher = () => api.get(`${QUERY_KEY}?year=${year}&month=${month}`);

    return useQuery({
        queryKey: [`${QUERY_KEY}`, year, month],
        queryFn: fetcher,
        retry: false,
    });
};

export default useTicketStatsQuery;
