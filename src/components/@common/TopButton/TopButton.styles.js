import styled, { css } from 'styled-components';

const StyledTopButton = styled.button`
    /* 초기화 */
    border: none;
    outline: none;

    /* 스타일 */
    z-index: 900;
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.point1};
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.2);
`;

export default StyledTopButton;
