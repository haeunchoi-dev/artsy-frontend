import { useMutation, useQueryClient } from 'react-query';
import useApi from '@hooks/useApi';

const QUERY_KEY = '/api/user/find-password';

const useFindPasswordQuery = () => {
    const queryClient = useQueryClient();
    const api = useApi();
    const fetcher = (data) => api.post(QUERY_KEY, data);
    return useMutation({
        mutationFn: (email) => fetcher(email),
        retry: false,
        onSuccess: () => queryClient.invalidateQueries([QUERY_KEY]),
    });
};

export default useFindPasswordQuery;
