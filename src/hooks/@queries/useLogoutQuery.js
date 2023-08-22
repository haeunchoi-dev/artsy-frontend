import { useMutation, useQueryClient } from 'react-query';
import api from '@utils/api';
export const QUERY_KEY = '/api/user/logout';

const useLogoutQuery = () => {
    const queryClient = useQueryClient();
    const fetcher = () => api.post(QUERY_KEY);
    const mutation = useMutation({
        mutationFn: () => fetcher(),
        retry: false,
        onSuccess: () => queryClient.invalidateQueries([QUERY_KEY]),
    });

    return mutation;
};

export default useLogoutQuery;
