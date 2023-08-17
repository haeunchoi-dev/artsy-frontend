import axios from 'axios';

// const { VITE_API_URL } = import.meta.env;
const VITE_API_URL = 'http://34.64.49.14';

const config = {
    timeout: 3000,
    baseURL: VITE_API_URL,
    withCredentials: true,
};

const axiosInstance = axios.create(config);

export default axiosInstance;
