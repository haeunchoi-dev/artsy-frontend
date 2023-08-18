import axiosInstance from './';

const badgeApi = {
    endpoint: {
        ticketCount: '/api/user/ticket-total-count',
    },
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },

    getUserTicketCount: async () => {
        const response = await axiosInstance.get(badgeApi.endpoint.ticketCount, {
            headers: { ...badgeApi.headers },
        });
        return response;
    },
};

export default badgeApi;
