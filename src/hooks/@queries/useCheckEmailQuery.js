import { useMutation, useQueryClient } from 'react-query';
import api from '@utils/api';

const QUERY_KEY = '/api/user/check-duplicated-email';

const useCheckEmailQuery = () => {
    const queryClient = useQueryClient();
    const fetcher = (data) => api.post(QUERY_KEY, data);
    return useMutation({
        mutationFn: (email) => fetcher(email),
        retry: false,
        onSuccess: () => queryClient.invalidateQueries([QUERY_KEY]),
    });
};

export default useCheckEmailQuery;
