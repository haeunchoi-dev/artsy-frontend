import styled, { css } from 'styled-components';

const ToggleButton = styled.div`
    margin-right: -1rem;
    padding: 1.6rem 1rem;
    cursor: pointer;

    ${({ $active }) =>
        $active &&
        css`
            > span {
                transition:
                    0.25s margin,
                    0.25s transform 0.25s;
                &:nth-child(1) {
                    margin-bottom: -2px;
                    margin-top: 8px;
                    transform: rotate(45deg);
                }
                &:nth-child(2) {
                    transform: rotate(45deg);
                }
                &:nth-child(3) {
                    margin-top: -2px;
                    transform: rotate(135deg);
                }
            }
        `}
`;
const ButtonBar = styled.span`
    display: block;
    background-color: ${({ theme }) => theme.colors.font1};
    width: 30px;
    height: 2px;
    border-radius: 3px;
    transition:
        0.25s margin 0.25s,
        0.25s transform;

    &:nth-child(1) {
        margin-bottom: 6px;
    }
    &:nth-child(3) {
        margin-top: 6px;
    }
    ${({ theme }) => theme.media.labtop} {
        width: 36px;
    }
`;

export { ToggleButton, ButtonBar };
