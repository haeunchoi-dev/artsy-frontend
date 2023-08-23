import { useMutation, useQueryClient } from 'react-query';
import api from '@utils/api';

export const QUERY_KEY = '/api/user/login';

const useLoginQuery = () => {
    const queryClient = useQueryClient();
    const fetcher = (data) => api.post(QUERY_KEY, data);
    const mutation = useMutation({
        mutationFn: (loginInfo) => fetcher(loginInfo),
        retry: false,
        onSuccess: () => queryClient.invalidateQueries([QUERY_KEY]),
    });
    return mutation;
};

export default useLoginQuery;
