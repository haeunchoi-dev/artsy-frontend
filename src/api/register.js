import axiosInstance from './';

const registerApi = {
    endpoint: {
        register: '/api/user/sign-up-with-email',
        checkEmail: '/api/user/check-duplicated-email',
    },

    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },

    signUpWithEmail: async (registerInfo) => {
        const response = await axiosInstance.post(registerApi.endpoint.register, registerInfo);
        return response.data;
    },
    checkDuplicatedEmail: async (email) => {
        const response = await axiosInstance.post(registerApi.endpoint.checkEmail, email);
        return response.data.artsyData;
    },
};

export default registerApi;
