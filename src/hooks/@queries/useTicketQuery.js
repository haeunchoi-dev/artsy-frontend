import { useQuery, useMutation, useQueryClient } from 'react-query';
import useApi from '@hooks/useApi';

export const QUERY_KEY = '/api/user/ticket';

const useTicketQuery = () => {
    const queryClient = useQueryClient();
    const api = useApi();

    const createTicket = () => {
        const fetcher = (data) => api.multipartPost(QUERY_KEY, data);

        return useMutation({
            mutationFn: (ticketInfo) => fetcher(ticketInfo),
            retry: false,
        });
    };

    const getTicket = (ticketId, updateDate) => {
        const fetcher = () => api.get(`${QUERY_KEY}/${ticketId}`);

        return useQuery({
            queryKey: [QUERY_KEY, ticketId, updateDate],
            queryFn: fetcher,
            retry: false,
        });
    };

    const updateTicket = (ticketId) => {
        const fetcher = (data) => api.multipartPut(`${QUERY_KEY}/${ticketId}`, data);

        return useMutation({
            mutationFn: (ticketInfo) => fetcher(ticketInfo),
            retry: false,
            onSuccess: () => queryClient.invalidateQueries([QUERY_KEY, ticketId, 'update']),
        });
    };

    const deleteTicket = (ticketId) => {
        const fetcher = () => api.delete(`${QUERY_KEY}/${ticketId}`);

        return useMutation({
            mutationFn: () => fetcher(),
            retry: false,
            onSuccess: () => queryClient.invalidateQueries([QUERY_KEY, ticketId, 'delete']),
        });
    };

    return { createTicket, getTicket, updateTicket, deleteTicket };
};

export default useTicketQuery;
