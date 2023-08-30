import styled, { css } from 'styled-components';

const sizeStyles = css`
    ${({ $size }) =>
        $size === 'large' &&
        css`
            height: 5rem;
            padding: 0 2rem;
            font-size: ${({ theme }) => theme.fontSizes.body};
            border-radius: ${({ theme }) => theme.borderRadius.large};
        `}

    ${({ $size }) =>
        $size === 'medium' &&
        css`
            height: 4.6rem;
            padding: 0 1.6rem;
            font-size: ${({ theme }) => theme.fontSizes.text};
            border-radius: ${({ theme }) => theme.borderRadius.medium};
        `}
    ${({ $size }) =>
        $size === 'small' &&
        css`
            height: 3.2rem;
            padding: 0 1rem;
            font-size: ${({ theme }) => theme.fontSizes.subText};
            border-radius: ${({ theme }) => theme.borderRadius.small};
        `}
`;

const fullWidthStyle = css`
    ${({ $full }) =>
        $full &&
        css`
            width: 100%;
        `}
`;

const colorStyles = css`
    ${({ $color }) => css`
        background-color: ${$color};

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
    box-sizing: border-box;
    color: #fff;
    font-weight: 500;

    /* 크기 */
    ${sizeStyles}

    /* 색상 */
    ${colorStyles}

    /* 풀너비 */
    ${fullWidthStyle}

    /* 라인스타일 */
    ${({ $style }) =>
        $style &&
        css`
            background-color: transparent;
            border: 2px solid ${({ $color }) => $color};
            color: ${({ $color }) => $color};

            &:disabled {
                background-color: ${({ theme }) => theme.colors.background8};
                color: #fff;
            }
        `}

    &:disabled {
        background-color: ${({ theme }) => theme.colors.border2};

        &:hover {
            filter: brightness(1);
            cursor: default;
        }
    }
`;

export default StyledButton;
