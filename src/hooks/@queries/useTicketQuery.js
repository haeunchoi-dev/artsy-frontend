import { useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import api from '@utils/api';
import { ERROR_TYPE } from '@constants/serverErrorType';
import { ERROR_MESSAGE } from '@constants/message';

export const QUERY_KEY = '/api/user/ticket';

const useTicketCreateQuery = () => {
    const headers = { 'Content-Type': 'multipart/form-data' };
    const fetcher = (data) => api.post(QUERY_KEY, data, headers);

    const mutation = useMutation({
        mutationFn: (ticketInfo) => fetcher(ticketInfo),
        retry: false,
    });

    return mutation;
};

const useTicketGetQuery = (ticketId) => {
    const fetcher = () => api.get(`${QUERY_KEY}/${ticketId}`);
    const query = useQuery([QUERY_KEY, ticketId], fetcher);

    return query;
};

const useTicketUpdateQuery = () => {
    const queryClient = useQueryClient();

    const headers = { 'Content-Type': 'multipart/form-data' };
    const fetcher = (data) => api.put(`${QUERY_KEY}/${ticketId}`, data, headers);

    const mutation = useMutation({
        mutationFn: (ticketInfo) => fetcher(ticketInfo),
        retry: false,
        onSuccess: () => queryClient.invalidateQueries([`${QUERY_KEY}/${ticketId}`]),
    });

    return mutation;
};

const useTicketDeleteQuery = (ticketId) => {
    const queryClient = useQueryClient();
    const fetcher = () => api.delete(`${QUERY_KEY}/${ticketId}`);

    const mutation = useMutation({
        mutationFn: () => fetcher(),
        retry: false,
        onSuccess: () => queryClient.invalidateQueries([`${QUERY_KEY}/${ticketId}`]),
    });

    return mutation;
};

export { useTicketCreateQuery, useTicketUpdateQuery, useTicketGetQuery, useTicketDeleteQuery };
