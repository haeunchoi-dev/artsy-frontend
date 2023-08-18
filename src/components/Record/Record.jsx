import React from 'react';
import * as R from './Record.styles';
import CategoryLink from '@components/CategoryLink/CategoryLink';
import useCategoryQuery from '../../hooks/@queries/useCategoryQuery';
import { useTheme } from 'styled-components';

// const categories = [{ name: '뮤지컬' }, { name: '영화' }, { name: '전시' }, { name: '콘서트' }, { name: '연극' }];

const Record = () => {
    const { data: categories } = useCategoryQuery();
    const theme = useTheme();
    const hasCategories = categories && categories.length > 0;
    return (
        <R.Record>
            <R.RecordHeader $theme={theme}>
                <h2>기록함</h2>
                <p>나만의 공간에 오늘의 소중한 문화 경험을 기록해보세요!</p>
            </R.RecordHeader>
            <R.CategoryContainer $theme={theme}>
                <R.CategoryWrapper $theme={theme}>
                    {hasCategories && categories.map((cat, index) => <CategoryLink name={cat.name} key={index} />)}
                </R.CategoryWrapper>
            </R.CategoryContainer>
        </R.Record>
    );
};

export default Record;
