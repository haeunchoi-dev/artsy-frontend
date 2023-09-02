import { useMutation, useQueryClient } from 'react-query';
import useApi from '@hooks/useApi';

export const QUERY_KEY = '/api/user/sign-up';

const useRegisterQuery = () => {
    const queryClient = useQueryClient();
    const api = useApi();
    const fetcher = (data) => api.post(QUERY_KEY, data);
    return useMutation({
        mutationFn: (userInfo) => fetcher(userInfo),
        retry: false,
        onSuccess: () => queryClient.invalidateQueries([QUERY_KEY]),
    });
};

export default useRegisterQuery;
