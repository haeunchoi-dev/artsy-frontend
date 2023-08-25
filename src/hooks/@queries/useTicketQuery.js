import { useQuery, useMutation, useQueryClient } from 'react-query';
import api from '@utils/api';

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

const useTicketGetQuery = (ticketId, updateDate) => {
    const queryClient = useQueryClient();

    const fetcher = () => api.get(`${QUERY_KEY}/${ticketId}`);
    const query = useQuery({
        queryKey: [QUERY_KEY, ticketId, updateDate],
        queryFn: fetcher,
        onSuccess: () => queryClient.invalidateQueries([QUERY_KEY, ticketId, updateDate]),
    });

    return query;
};

const useTicketUpdateQuery = (ticketId) => {
    const queryClient = useQueryClient();

    const headers = { 'Content-Type': 'multipart/form-data' };
    const fetcher = (data) => api.put(`${QUERY_KEY}/${ticketId}`, data, headers);

    const mutation = useMutation({
        mutationFn: (ticketInfo) => fetcher(ticketInfo),
        retry: false,
        onSuccess: () => queryClient.invalidateQueries([QUERY_KEY, ticketId, 'update']),
    });

    return mutation;
};

const useTicketDeleteQuery = (ticketId) => {
    const queryClient = useQueryClient();
    const fetcher = () => api.delete(`${QUERY_KEY}/${ticketId}`);

    const mutation = useMutation({
        mutationFn: () => fetcher(),
        retry: false,
        onSuccess: () => queryClient.invalidateQueries([QUERY_KEY, ticketId, 'delete']),
    });

    return mutation;
};

export { useTicketCreateQuery, useTicketUpdateQuery, useTicketGetQuery, useTicketDeleteQuery };
