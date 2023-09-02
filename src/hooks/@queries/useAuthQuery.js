import { useQuery } from 'react-query';

import useApi from '@hooks/useApi';
import { QUERY_KEY as userInfoPath } from '@hooks/@queries/useUserInfoQuery';

export const QUERY_KEY_AUTH = 'auth';

const useAuthQuery = () => {
    const options = { retry: false };
    const api = useApi();
    const fetchUser = async () => {
        try {
            await api.get(userInfoPath);
            return true;

        } catch (error) {
            return false;
        }
    };

    return useQuery([QUERY_KEY_AUTH], fetchUser, options);
};

export default useAuthQuery;
