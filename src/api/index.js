import axios from 'axios';

const { VITE_API_URL } = import.meta.env;

const config = {
    timeout: 3000,
    baseURL: VITE_API_URL,
    withCredentials: true,
};

const axiosInstance = axios.create(config);

export default axiosInstance;
