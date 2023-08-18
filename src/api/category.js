import axiosInstance from './';

const categoryApi = {
    endpoint: {
        category: () => `/api/categories`,
    },

    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },

    //   호출할때 const { data } = useQuery(
    //     'category',
    //     categoryApi.getCategories,
    //   );
    getCategories: async ({ queryKey }) => {
        try {
            const response = await axiosInstance.get(categoryApi.endpoint.category(), {
                headers: { ...categoryApi.headers },
            });
            return response.data.artsyData;
        } catch (err) {
            // err 핸들링
        }
    },
};

export default categoryApi;
