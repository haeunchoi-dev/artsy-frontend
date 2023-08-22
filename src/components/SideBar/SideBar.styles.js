import styled, { css } from 'styled-components';
import Button from '@components/@common/Button/Button';
const NavBarContainer = styled.div`
    position: fixed;
    top: 0;
    right: -100%;
    z-index: 2000;
    box-sizing: border-box;
    width: 0;
    max-width: 330px;
    height: 0;
    padding-top: 60px;
    transition: width 0.5s ease-in-out;
    background-color: #fff;
    ${({ $open }) =>
        $open &&
        css`
            right: 0;
            width: 60%;
            height: 100vh;
        `}
    ${({ theme }) => theme.media.labtop} {
        width: 100%;
        max-width: 100%;
        align-items: center;
        ${({ $open }) =>
            $open &&
            css`
                height: 50vh;
            `}
    }
`;

const NavBarContent = styled.div`
    display: none;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    box-sizing: border-box;
    height: 100%;
    padding: 20px;

    ${({ $open }) =>
        $open &&
        css`
            display: flex;
        `}

    ${({ theme }) => theme.media.labtop} {
        align-items: center;
    }
`;
const Navbar = styled.ul``;
const NavbarItem = styled.li`
    text-align: left;
    font-size: 1.6rem;
    ${({ theme }) => theme.media.tablet} {
        font-size: 1.8rem;
    }
    ${({ theme }) => theme.media.labtop} {
        text-align: center;
    }
`;
const LogoutButton = styled(Button)`
    box-sizing: border-box;
    width: 100%;
    margin-bottom: 20px;
    align-self: center;
    border: 1px solid ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.media.tablet} {
        font-size: 1.8rem;
    }
    ${({ theme }) => theme.media.labtop} {
        width: 200px;
        font-size: 1.8rem;
    }
`;
const ToggleButton = styled.div`
    position: fixed;
    right: 20px;
    top: 20px;
    z-index: 2002;
    cursor: pointer;
    margin-left: 12px;
    font-size: 24px;

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
                ${({ theme }) => theme.media.labtop} {
                    width: 36px;
                }
            }
        `}
`;
const ButtonBar = styled.span`
    display: block;
    background-color: black;
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
`;
const BackModal = styled.div`
    display: ${({ $open }) => ($open ? 'block' : 'none')};
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 1999;
`;

export { NavBarContainer, LogoutButton, Navbar, NavbarItem, ToggleButton, ButtonBar, BackModal, NavBarContent };
