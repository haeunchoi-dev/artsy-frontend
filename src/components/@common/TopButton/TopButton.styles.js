import styled, { css } from 'styled-components';
import topBtnUrl from '@assets/icons/icon-topbtn.png';

const StyledTopButton = styled.button`
    /* 초기화 */
    border: none;
    outline: none;

    /* 스타일 */
    z-index: ${({ theme }) => theme.layer.layer4};
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 4.4rem;
    height: 4.4rem;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.point1} url(${topBtnUrl}) no-repeat center / 2rem;
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.2);
    cursor: pointer;
`;

export default StyledTopButton;
