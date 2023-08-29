import { useQuery } from 'react-query';

import { QUERY_KEY as userInfoPath } from '@hooks/@queries/useUserInfoQuery';
import api from '@utils/api';

export const QUERY_KEY_AUTH = 'auth';

const useAuthQuery = () => {
    const options = { retry: false };
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
