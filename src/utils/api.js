import axiosInstance from '@api';

const api = {
    get: async (path, headers = {}, params = {}) => {
        const options = {
            headers: { ...headers },
            params: { ...params },
        };
        const response = await axiosInstance.get(path, options);
        return response.data.artsyData;
    },

    post: async (path, data, headers = {}) => {
        const options = {
            headers: { ...headers },
        };
        const response = await axiosInstance.post(path, data, options);
        const responseData = response.data.artsyData || response.data;
        return responseData;
    },

    put: async (path, data, headers = {}) => {
        const options = {
            headers: { ...headers },
        };
        const response = await axiosInstance.put(path, data, options);
        return response.data.artsyData;
    },

    patch: async (path, data, headers = {}) => {
        const options = {
            headers: { ...headers },
        };
        const response = await axiosInstance.patch(path, data, options);
        return response.data.artsyData;
    },

    delete: async (path) => {
        const response = await axiosInstance.delete(path);
        return response.data;
    },
};

export default api;
