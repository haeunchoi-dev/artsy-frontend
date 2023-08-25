import axios from 'axios';
import { ERROR_TYPE } from '@constants/serverErrorType';
import { ERROR_MESSAGE } from '@constants/message';

import useToastContext from '@hooks/useToastContext';

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
        const type = error?.response?.data?.error?.type;
        const toast = useToastContext();

        if (!type) {
            toast.show(ERROR_MESSAGE.unexpected);
        } else {
            switch (type) {
                case ERROR_TYPE.INTERNAL_SERVER_ERROR:
                    toast.show(ERROR_MESSAGE.unexpected);
                    break;
                case ERROR_TYPE.UNAUTHORIZED:
                    toast.show(ERROR_MESSAGE.auth);
                    window.location.href = '/signin';
                    break;
            }
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;
