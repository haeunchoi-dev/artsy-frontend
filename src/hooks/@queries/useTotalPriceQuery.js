import { useQuery } from 'react-query';

import api from '@utils/api';

export const QUERY_KEY = '/api/user/ticket-total-price';

const useTotalPriceQuery = () => {
    const fetcher = () => api.get(QUERY_KEY);
    const options = {
        retry: false,
    };
    const query = useQuery([QUERY_KEY], fetcher, options);

    return query;
};

export default useTotalPriceQuery;
