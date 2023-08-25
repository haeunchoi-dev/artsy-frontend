import { useQuery } from 'react-query';

import { QUERY_KEY as userInfoPath } from '@hooks/@queries/useUserInfoQuery';
import authApi from '@api/auth';
import useAuthContext from '@hooks/useAuthContext';
export const QUERY_KEY_AUTH = 'auth';

const useAuthQuery = () => {
    const { setIsLogin } = useAuthContext();
    const AuthApi = authApi();
    const options = { retry: false };
    const fetchUser = async () => {
        const response = await AuthApi.get(userInfoPath);
        if (response.data?.success) {
            setIsLogin(true);
        } else {
            setIsLogin(false);
        }
        return response.data.success;
    };
    return useQuery([QUERY_KEY_AUTH], fetchUser, options);
};

export default useAuthQuery;
