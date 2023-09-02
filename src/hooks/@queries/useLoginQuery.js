import { useMutation, useQueryClient } from 'react-query';
import useApi from '@hooks/useApi';
import useAuthContext from '@hooks/useAuthContext';

export const QUERY_KEY = '/api/user/login';

const useLoginQuery = () => {
    const { setIsLogin } = useAuthContext();

    const queryClient = useQueryClient();
    const api = useApi();
    const fetcher = (data) => api.post(QUERY_KEY, data);
    return useMutation({
        mutationFn: (loginInfo) => fetcher(loginInfo),
        retry: false,
        onSuccess: () => {
            queryClient.invalidateQueries([QUERY_KEY]);
            setIsLogin(true);
        },
    });
};

export default useLoginQuery;
