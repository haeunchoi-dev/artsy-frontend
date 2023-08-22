import styled from 'styled-components';

const StyledCategoryFilter = styled.select`
    /* 초기화 */
    outline: none;
    border: none;
    background-color: transparent;

    /* 스타일 */
    padding: 0.4rem 1rem;
    font-size: ${({ theme }) => theme.fontSizes.text};
    border-bottom: 1px solid ${({ theme }) => theme.colors.black};
`;

export default StyledCategoryFilter;
