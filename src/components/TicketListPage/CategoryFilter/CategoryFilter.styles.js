import styled from 'styled-components';
import arrowUrl from '@assets/icons/icon-arrow-down.png';

const StyledCategoryFilter = styled.select`
    /* 초기화 */
    opacity: 1;
    outline: none;
    border: none;
    background-color: transparent;
    appearance: none;
    cursor: pointer;

    /* 스타일 */
    min-width: 10rem;
    padding: 0.4rem 2rem 0.4rem 0;
    font-size: ${({ theme }) => theme.fontSizes.text};
    border-bottom: 1px solid ${({ theme }) => theme.colors.black};
    background: url(${arrowUrl}) no-repeat right center / 2rem;
    color: ${({ theme }) => theme.colors.black};

    &:focus {
        border-color: ${({ theme }) => theme.colors.point1};
    }
`;

export default StyledCategoryFilter;
