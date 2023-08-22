import StyledCategoryFilter from './CategoryFilter.styles';

const CategoryFilter = ({ categories, value, onChange }) => {
    return (
        <StyledCategoryFilter onChange={onChange} value={value}>
            <option value="0">전체</option>
            {categories.map(({ id, name }) => (
                <option key={id} value={id}>
                    {name}
                </option>
            ))}
        </StyledCategoryFilter>
    );
};
export default CategoryFilter;
