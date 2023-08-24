import { useMutation, useQueryClient } from 'react-query';
import api from '@utils/api';
import useAuthContext from '@hooks/useAuthContext';

export const QUERY_KEY = '/api/user/login';

const useLoginQuery = () => {
    const { setIsLogin } = useAuthContext();
    const queryClient = useQueryClient();
    const fetcher = (data) => api.post(QUERY_KEY, data);
    const mutation = useMutation({
        mutationFn: (loginInfo) => fetcher(loginInfo),
        retry: false,
        onSuccess: () => {
            queryClient.invalidateQueries([QUERY_KEY]);
            setIsLogin(true);
        },
    });
    return mutation;
};

export default useLoginQuery;
