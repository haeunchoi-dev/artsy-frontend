import { useQuery, useMutation, useQueryClient } from 'react-query';

import api from '@utils/api';

export const QUERY_KEY = '/api/user/info';

const useUserGetQuery = () => {
    const fetcher = () => api.get(QUERY_KEY);
    const options = {
        retry: false,
    };
    return useQuery([QUERY_KEY], fetcher, options);
};

const useUserEditQuery = () => {
    const fetcher = (data) => api.put(QUERY_KEY, data);
    const queryClient = useQueryClient();
    const options = {
        retry: false,
        onSuccess: () => queryClient.invalidateQueries(QUERY_KEY),
    };

    return useMutation(fetcher, options);
};

export { useUserGetQuery, useUserEditQuery };
