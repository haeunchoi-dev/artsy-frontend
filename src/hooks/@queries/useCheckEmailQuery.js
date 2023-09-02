import { useMutation, useQueryClient } from 'react-query';
import useApi from '@hooks/useApi';

const QUERY_KEY = '/api/user/check-duplicated-email';

const useCheckEmailQuery = () => {
    const queryClient = useQueryClient();
    const api = useApi();
    const fetcher = (data) => api.post(QUERY_KEY, data);
    return useMutation({
        mutationFn: (email) => fetcher(email),
        retry: false,
        onSuccess: () => queryClient.invalidateQueries([QUERY_KEY]),
    });
};

export default useCheckEmailQuery;
