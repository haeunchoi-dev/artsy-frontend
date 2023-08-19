import axiosInstance from './';

const ticketApi = {
    endpoint: {
        tickets: () => `/api/user/tickets`,
        ticket: () => `api/user/ticket`,
    },

    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },

    //   호출할때 const { data } = useQuery(
    //     ["tickets", categoryId],
    //     ticketApi.getTickets,
    //   );
    getTickets: async ({ queryKey }) => {
        const [_, categoryId] = queryKey;
        const url =
            categoryId !== 0
                ? `${ticketApi.endpoint.tickets()}?categoryId=${categoryId}`
                : `${ticketApi.endpoint.tickets()}`;
        const response = await axiosInstance.get(url, {
            headers: { ...ticketApi.headers },
        });

        return response.data.artsyData;
    },

    getTicket: async ({ ticketId }) => {
        const response = await axiosInstance.get(`${ticketApi.endpoint.ticket}${ticketId}`, {
            headers: { ...ticketApi.headers },
        });
        return response.data.artsyData;
    },
};

export default ticketApi;
