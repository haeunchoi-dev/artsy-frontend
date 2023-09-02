import { useMutation, useQueryClient } from 'react-query';
import useApi from '@hooks/useApi';
import useAuthContext from '@hooks/useAuthContext';

export const QUERY_KEY = '/api/user/logout';

const useLogoutQuery = () => {
    const { setIsLogin } = useAuthContext();

    const queryClient = useQueryClient();
    const api = useApi();
    const fetcher = () => api.post(QUERY_KEY);
    return useMutation({
        mutationFn: () => fetcher(),
        retry: false,
        onSuccess: () => {
            queryClient.invalidateQueries([QUERY_KEY]);
            setIsLogin(false);
        },
    });
};

export default useLogoutQuery;
