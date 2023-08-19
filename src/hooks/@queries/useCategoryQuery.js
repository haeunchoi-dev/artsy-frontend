import { useEffect } from 'react';
import { useQuery } from 'react-query';
import api from '@utils/api';

export const QUERY_KEY = '/api/categories';

const useCategoryQuery = () => {
    const fetcher = () => api.get(QUERY_KEY);
    const query = useQuery([QUERY_KEY], fetcher);

    useEffect(() => {
        if (query.isError) {
            // error handling
        }
    }, [query.isError]);

    return useQuery(QUERY_KEY, fetcher);
};

export default useCategoryQuery;
