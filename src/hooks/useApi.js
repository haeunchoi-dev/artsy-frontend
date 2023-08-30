import { useCallback, useMemo } from 'react';
import axios from 'axios';

import useToastContext from '@hooks/useToastContext';
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

const HTTP = {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    DELETE: 'delete',
};

const useApi = () => {
    const toast = useToastContext();

    const api = useMemo(() => {
        return {
            get: async (path) => {
                return await callApi(HTTP.GET, path);
            },
            post: async (path, data) => {
                return await callApi(HTTP.POST, path, data);
            },
            put: async (path, data) => {
                return await callApi(HTTP.PUT, path, data);
            },
            delete: async (path) => {
                return await callApi(HTTP.DELETE, path);
            },
            multipartPost: async (path, formData) => {
                return await callApi(HTTP.POST, path, formData, true);
            },
            multipartPut: async (path, formData) => {
                return await callApi(HTTP.PUT, path, formData, true);
            },
        };
    }, []);

    const callApi = useCallback(async (method, path, data, isFormData = false) => {
        const axiosParams = getAxiosParams(method, path, data, isFormData);

        try {
            const response = await axiosInstance(axiosParams);
            return response.data.artsyData;
        } catch (error) {
            const errorType = error?.response?.data?.error?.type;

            if (!errorType || errorType === ERROR_TYPE.INTERNAL_SERVER_ERROR) {
                toast.show(ERROR_MESSAGE.unexpected);
            }

            throw error;
        }
    }, []);

    const getAxiosParams = useCallback((method, path, data, isFormData) => {
        const axiosParams = {
            method: method,
            url: path,
        };

        if (data !== undefined) axiosParams.data = data;
        if (isFormData === true) axiosParams.headers = { 'Content-Type': 'multipart/form-data' };

        return axiosParams;
    }, []);

    return api;
};

export default useApi;
