import { useMutation, useQueryClient } from 'react-query';

import api from '@utils/api';

export const QUERY_KEY = '/api/user/check-password';

const checkPassword = () => {
    const fetcher = (data) => api.post(QUERY_KEY, data);
    const queryClient = useQueryClient();
    const options = {
        retry: false,
        onSuccess: () => queryClient.invalidateQueries(QUERY_KEY),
    };

    return useMutation(fetcher, options);
};

export { checkPassword };
