import { useQuery } from 'react-query';
import useApi from '@hooks/useApi';

export const QUERY_KEY = '/api/categories';

const useCategoryQuery = () => {
    const api = useApi();
    const fetcher = () => api.get(QUERY_KEY);
    const options = {
        retry: false,
    };
    return useQuery([QUERY_KEY], fetcher, options);
};

export default useCategoryQuery;
