import { useQuery } from 'react-query';
import { categoryKeys } from '@constants/queryKey';
import categoryApi from '@api/category';

const useCategoryQuery = () => {
    const QUERY_KEY = categoryKeys.get();
    const fetcher = categoryApi.getCategories;

    return useQuery(QUERY_KEY, fetcher);
};

export default useCategoryQuery;
