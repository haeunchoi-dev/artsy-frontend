import * as C from './CategoryFilter.styles';

const CategoryFilter = ({ categories, value, onChange }) => {
    return (
        <C.StyledCategoryFilter>
            <select onChange={onChange} value={value}>
                <option value="0">전체</option>
                {categories?.map(({ id, name }) => (
                    <option key={id} value={id}>
                        {name}
                    </option>
                ))}
            </select>
            <C.StyledArrow />
        </C.StyledCategoryFilter>
    );
};
export default CategoryFilter;
