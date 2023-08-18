import axiosInstance from './';

const loginApi = {
    endpoint: {
        login: '/api/user/login-with-email',
    },

    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },

    signInWithEmail: async (loginInfo) => {
        try {
            const response = await axiosInstance.post(loginApi.endpoint.login, loginInfo);
            return response.data.artsyData;
        } catch {
            throw new Error('fail-login');
        }
    },
};

export default loginApi;
