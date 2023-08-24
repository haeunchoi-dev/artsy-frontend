import { useMutation, useQueryClient } from 'react-query';
import api from '@utils/api';
import useAuthContext from '@hooks/useAuthContext';

export const QUERY_KEY = '/api/user/logout';

const useLogoutQuery = () => {
    const { setIsLogin } = useAuthContext();

    const queryClient = useQueryClient();
    const fetcher = () => api.post(QUERY_KEY);
    const mutation = useMutation({
        mutationFn: () => fetcher(),
        retry: false,
        onSuccess: () => {
            queryClient.invalidateQueries([QUERY_KEY]);
            setIsLogin(false);
        },
    });

    return mutation;
};

export default useLogoutQuery;
