import styled from 'styled-components';
import { SlArrowDown } from 'react-icons/sl';

const StyledArrow = styled(SlArrowDown)`
    font-size: ${({ theme }) => theme.fontSizes.text};
    color: ${({ theme }) => theme.colors.black};
`;

const StyledCategoryFilter = styled.div`
    position: relative;

    select {
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
        color: ${({ theme }) => theme.colors.font2};

        &:focus {
            border-color: ${({ theme }) => theme.colors.point1};
        }
    }

    ${StyledArrow} {
        z-index: -1;
        position: absolute;
        right: 0;
        top: 0.6rem;
    }
`;

export { StyledCategoryFilter, StyledArrow };
