import styled, { css } from 'styled-components';

const sizes = {
    large: {
        padding: '8px 20px',
        fontSize: '1rem',
    },
    medium: {
        padding: '6px 16px',
        fontSize: '0.875rem',
    },
    small: {
        padding: '4px 10px',
        fontSize: '0.8125rem',
    },
};

const sizeStyles = css`
    ${({ size }) => css`
        padding: ${sizes[size].padding};
        font-size: ${sizes[size].fontSize};
    `}
`;

const fullWidthStyle = css`
    ${({ full }) =>
        full &&
        css`
            width: 100%;
        `}
`;

const colorStyles = css`
    ${({ color }) => css`
        background-color: ${color};

        &:hover {
            filter: brightness(1.1);
        }

        &:active {
            filter: brightness(0.9);
        }
    `}
`;

const StyledButton = styled.button`
    /* 초기화 */
    outline: none;
    border: 0px;
    margin: 0px;
    appearance: none;
    cursor: pointer;
    text-decoration: none;

    /* 공통 스타일 */
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    box-sizing: border-box;
    color: #fff;

    /* 크기 */
    ${sizeStyles}

    /* 색상 */
    ${colorStyles}

    /* 풀너비 */
    ${fullWidthStyle}
`;

export default StyledButton;
