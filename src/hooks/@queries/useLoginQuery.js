import { useMutation, useQueryClient } from 'react-query';
import { userKeys } from '@constants/queryKey';
import loginApi from '@api/login';

const useLoginQuery = () => {
    const queryClient = useQueryClient();
    const QUERY_KEY = userKeys.post();
    const fetcher = loginApi.signInWithEmail;
    return useMutation((loginInfo) => fetcher(loginInfo), {
        onSuccess: () => queryClient.invalidateQueries(QUERY_KEY),
    });
};

export default useLoginQuery;
