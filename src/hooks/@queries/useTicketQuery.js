import { useEffect } from 'react';
import { useQuery } from 'react-query';

import api from '@utils/api';
import { ERROR_TYPE } from '@constants/serverErrorType';

export const QUERY_KEY = '/api/user/tickets';

const useTicketQuery = (categoryId) => {
    const fetcher = api.get(`${QUERY_KEY}/${categoryId}`);
    const query = useQuery([QUERY_KEY, categoryId], fetcher);

    useEffect(() => {
        if (query.isError) {
            // error handling
        }
    }, [query.isError]);

    return useQuery(QUERY_KEY, fetcher);
};

export default useTicketQuery;
