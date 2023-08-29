import React from 'react';
import * as R from './Record.styles';
import CategoryLink from '@components/Home/CategoryLink/CategoryLink';
import useCategoryQuery from '@hooks/@queries/useCategoryQuery';
import useHorizontalScroll from '@hooks/useHorizontalScroll';

const Record = () => {
    const { data: categories } = useCategoryQuery();
    const containerRef = useHorizontalScroll();
    const hasCategories = categories && categories.length > 0;
    return (
        <R.Record>
            <R.RecordHeader>
                <h2>기록함</h2>
                <p>나만의 공간에 오늘의 소중한 문화 경험을 기록해보세요!</p>
            </R.RecordHeader>
            <R.CategoryContainer ref={containerRef}>
                <R.CategoryWrapper>
                    {hasCategories &&
                        categories.map((category, index) => {
                            const { name, id } = category;
                            return <CategoryLink name={name} key={index} categoryId={id} />;
                        })}
                </R.CategoryWrapper>
            </R.CategoryContainer>
        </R.Record>
    );
};

export default Record;
