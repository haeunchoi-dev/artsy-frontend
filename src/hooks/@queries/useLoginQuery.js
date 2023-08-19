import { useMutation, useQueryClient } from 'react-query';
import api from '@utils/api';
import { useEffect } from 'react';

export const QUERY_KEY = '/api/user/login-with-email';

const useLoginQuery = () => {
    const queryClient = useQueryClient();
    const fetcher = (data) => api.post(QUERY_KEY, data);
    const query = useMutation((loginInfo) => fetcher(loginInfo), {
        onSuccess: () => queryClient.invalidateQueries([QUERY_KEY]),
    });
    useEffect(() => {
        if (query.isError) {
            // error handling
        }
    }, [query.isError]);
    return query;
};

export default useLoginQuery;
