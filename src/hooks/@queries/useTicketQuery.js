import { useQuery, useMutation, useQueryClient } from 'react-query';
import api from '@utils/api';

export const QUERY_KEY = '/api/user/ticket';

const useTicketCreateQuery = () => {
    const headers = { 'Content-Type': 'multipart/form-data' };
    const fetcher = (data) => api.post(QUERY_KEY, data, headers);

    return useMutation({
        mutationFn: (ticketInfo) => fetcher(ticketInfo),
        retry: false,
    });
};

const useTicketGetQuery = (ticketId, updateDate) => {
    const queryClient = useQueryClient();

    const fetcher = () => api.get(`${QUERY_KEY}/${ticketId}`);

    return useQuery({
        queryKey: [QUERY_KEY, ticketId, updateDate],
        queryFn: fetcher,
        onSuccess: () => queryClient.invalidateQueries([QUERY_KEY, ticketId, updateDate]),
    });
};

const useTicketUpdateQuery = (ticketId) => {
    const queryClient = useQueryClient();

    const headers = { 'Content-Type': 'multipart/form-data' };
    const fetcher = (data) => api.put(`${QUERY_KEY}/${ticketId}`, data, headers);

    return useMutation({
        mutationFn: (ticketInfo) => fetcher(ticketInfo),
        retry: false,
        onSuccess: () => queryClient.invalidateQueries([QUERY_KEY, ticketId, 'update']),
    });
};

const useTicketDeleteQuery = (ticketId) => {
    const queryClient = useQueryClient();
    const fetcher = () => api.delete(`${QUERY_KEY}/${ticketId}`);

    return useMutation({
        mutationFn: () => fetcher(),
        retry: false,
        onSuccess: () => queryClient.invalidateQueries([QUERY_KEY, ticketId, 'delete']),
    });
};

export { useTicketCreateQuery, useTicketUpdateQuery, useTicketGetQuery, useTicketDeleteQuery };
