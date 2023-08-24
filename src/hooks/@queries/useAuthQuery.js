import { useQuery } from 'react-query';

import { QUERY_KEY as userInfoPath } from '@hooks/@queries/useUserInfoQuery';
import authApi from '@api/auth';
import useAuthContext from '@hooks/useAuthContext';
export const QUERY_KEY_AUTH = 'auth';

const useAuthQuery = () => {
    const { setIsLogin } = useAuthContext();
    const AuthApi = authApi();
    const fetchUser = async () => {
        const response = await AuthApi.get(userInfoPath);
        if (response.data?.success) {
            setIsLogin(true);
        } else {
            setIsLogin(false);
        }
        return response.data.success;
    };
    const query = useQuery({ queryKey: [QUERY_KEY_AUTH], queryFn: fetchUser, retry: false });

    return query;
};

export default useAuthQuery;
