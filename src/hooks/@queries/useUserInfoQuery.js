import { useQuery } from 'react-query';

import api from '@utils/api';

export const QUERY_KEY = '/api/user/info';

const useUserInfoQuery = () => {
    const fetcher = () => api.get(QUERY_KEY);
    const options = {
        retry: false,
    };
    const query = useQuery([QUERY_KEY], fetcher, options);

    return query;
};

export default useUserInfoQuery;
