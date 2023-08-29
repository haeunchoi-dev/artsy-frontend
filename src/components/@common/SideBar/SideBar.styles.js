import styled, { css } from 'styled-components';
import Button from '@components/@common/Button/Button';
import { Link } from 'react-router-dom';

const NavBarContainer = styled.div`
    position: fixed;
    top: 0;
    right: -100%;
    z-index: ${({ theme }) => theme.layer.layer6};
    box-sizing: border-box;
    width: 60%;
    max-width: 330px;
    height: 0;
    padding-top: 60px;
    transform: translateX(100%);

    transition: transform 0.5s ease-in-out;
    background-color: #fff;
    ${({ $open }) =>
        $open &&
        css`
            right: 0;
            height: 100%;
            transform: translateX(0);
        `}
    ${({ theme }) => theme.media.labtop} {
        width: 100%;
        max-width: 100%;
        align-items: center;
        transform: translateX(0);
        transform: translateY(-100%);

        ${({ $open }) =>
            $open &&
            css`
                height: auto;
                transform: translateY(0);
            `}
    }
`;

const NavBarContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    box-sizing: border-box;
    height: 100%;
    padding: 2rem;

    ${({ theme }) => theme.media.labtop} {
        align-items: center;
    }
`;
const Navbar = styled.ul`
    width: 100%;
    margin-bottom: 1.8rem;
`;
const NavbarItem = styled.li`
    width: 100%;
    text-align: left;
    font-size: 1.6rem;
    margin-bottom: 3rem;
    ${({ theme }) => theme.media.tablet} {
        font-size: 1.8rem;
    }
    ${({ theme }) => theme.media.labtop} {
        text-align: center;
    }
`;

const NavbarItemLink = styled(Link)`
    display: flex;
    &:hover {
        color: ${({ theme }) => theme.colors.point1};
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

const BackModal = styled.div`
    display: ${({ $open }) => ($open ? 'block' : 'none')};
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    left: 0;

    background-color: rgba(0, 0, 0, 0.3);
    z-index: ${({ theme }) => theme.layer.layer6 - 1};
`;
const ExtendToggleButton = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    z-index: ${({ theme }) => theme.layer.layer6 + 1};
    width: 100%;
    max-width: ${({ theme }) => theme.devicesSize.labtop};
    margin: 0 auto;
    position: relative;
    left: 0;
    right: 0;
    top: 0;

    ${({ theme }) => theme.media.labtop} {
        height: 7rem;
    }
`;
export {
    NavBarContainer,
    LogoutButton,
    Navbar,
    NavbarItem,
    NavbarItemLink,
    BackModal,
    NavBarContent,
    ExtendToggleButton,
};
