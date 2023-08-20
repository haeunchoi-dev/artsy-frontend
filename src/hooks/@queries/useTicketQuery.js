import { useEffect } from 'react';
import { useQuery } from 'react-query';

import api from '@utils/api';

export const QUERY_KEY = '/api/user/tickets';

const useTicketQuery = (categoryId) => {
    const apiUrl = categoryId !== '0' && categoryId ? `${QUERY_KEY}?categoryId=${categoryId}` : QUERY_KEY;
    const fetcher = () => api.get(apiUrl);
    const options = {
        retry: false,
    };
    const query = useQuery([QUERY_KEY, categoryId], fetcher, options);

    return query;
};

export default useTicketQuery;
