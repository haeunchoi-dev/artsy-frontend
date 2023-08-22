import { useEffect } from 'react';
import { useQuery, useMutation } from 'react-query';
import api from '@utils/api';
import { ERROR_TYPE } from '@constants/serverErrorType';
import { ERROR_MESSAGE } from '@constants/message';

export const QUERY_KEY = '/api/user/ticket';

const useTicketCreateQuery = () => {
    const headers = { 'Content-Type': 'multipart/form-data' };
    const fetcher = (data) => api.post(QUERY_KEY, data, headers);

    const query = useMutation({
        mutationFn: (ticketInfo) => fetcher(ticketInfo),
        retry: false,
    });

    return query;
};

const useTicketGetQuery = (ticketId) => {
    const fetcher = () => api.get(`${QUERY_KEY}/${ticketId}`);
    const query = useQuery([QUERY_KEY, ticketId], fetcher);

    useEffect(() => {
        if (query.isError) {
            const errorType = query.error.response.data.error.type;
            switch (errorType) {
                case ERROR_TYPE.DATA_NOT_FOUND: {
                    alert(ERROR_MESSAGE.dataNotFoundTicket);
                    break;
                }
                default: {
                    alert('관리자에게 문의하세요');
                }
            }
        }
    }, [query.isError]);

    return query;
};

export { useTicketCreateQuery, useTicketGetQuery };
