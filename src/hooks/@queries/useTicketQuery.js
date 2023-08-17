import { useQuery } from 'react-query';
import { ticketKeys } from '@constants/queryKey';
import ticketApi from '@api/ticket';

const useTicketQuery = (categoryId) => {
    const QUERY_KEY = ticketKeys.get(Number(categoryId));
    const fetcher = ticketApi.getTickets;

    return useQuery(QUERY_KEY, fetcher);
};

export default useTicketQuery;
