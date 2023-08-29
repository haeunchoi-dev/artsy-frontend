import axios from 'axios';
import { ERROR_TYPE } from '@constants/serverErrorType';
import { ERROR_MESSAGE } from '@constants/message';

const { VITE_API_URL } = import.meta.env;

const config = {
    timeout: 3000,
    baseURL: VITE_API_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
};

const axiosInstance = axios.create(config);

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        const errorType = error?.response?.data?.error?.type;

        if (!errorType) {
            alert(ERROR_MESSAGE.unexpected);
        } else if (errorType === ERROR_TYPE.INTERNAL_SERVER_ERROR) {
            alert(ERROR_MESSAGE.unexpected);
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;
