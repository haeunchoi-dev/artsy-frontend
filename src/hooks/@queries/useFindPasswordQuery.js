import { useMutation, useQueryClient } from 'react-query';
import api from '@utils/api';

const QUERY_KEY = '/api/user/find-password';

const useFindPasswordQuery = () => {
    const queryClient = useQueryClient();
    const fetcher = (data) => api.post(QUERY_KEY, data);
    return useMutation({
        mutationFn: (email) => fetcher(email),
        retry: false,
        onSuccess: () => queryClient.invalidateQueries([QUERY_KEY]),
    });
};

export default useFindPasswordQuery;
