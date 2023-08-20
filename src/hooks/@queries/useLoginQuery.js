import { useMutation, useQueryClient } from 'react-query';
import api from '@utils/api';
import { useEffect } from 'react';
import { ERROR_TYPE } from '@constants/serverErrorType';
import { ERROR_MESSAGE } from '@constants/message';
export const QUERY_KEY = '/api/user/login';

const useLoginQuery = () => {
    const queryClient = useQueryClient();
    const fetcher = (data) => api.post(QUERY_KEY, data);
    const query = useMutation({
        mutationFn: (loginInfo) => fetcher(loginInfo),
        retry: false,
        onSuccess: () => queryClient.invalidateQueries([QUERY_KEY]),
    });

    useEffect(() => {
        if (query.isError) {
            const errorType = query.error.response.data.error.type;
            if (errorType === ERROR_TYPE.INCORRECT_PASSWORD) {
                return alert(ERROR_MESSAGE.incorrectPassword);
            } else if (errorType === ERROR_TYPE.NOT_FOUND_EMAIL) {
                return alert(ERROR_MESSAGE.notFoundEmail);
            } else {
                return alert('관리자에게 문의하세요');
            }
        }
    }, [query.isError]);

    return query;
};

export default useLoginQuery;
