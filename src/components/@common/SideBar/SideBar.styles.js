import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '@components/@common/Button/Button';

const NavBarContainer = styled.div`
    position: fixed;
    top: 0;
    right: -100%;
    z-index: ${({ theme }) => theme.layer.layer6};
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 60%;
    max-width: 330px;
    height: 0;
    padding-top: 2rem;
    transform: translateX(100%);

    transition: transform 0.5s ease-in-out;
    background-color: ${({ theme }) => theme.colors.background3};
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
        padding-top: 2.6rem;

        ${({ $open }) =>
            $open &&
            css`
                height: auto;
                transform: translateY(0);
            `}
    }
`;
const DarkButtonContainer = styled.div`
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    position: relative;
    ${({ theme }) => theme.media.labtop} {
        align-self: flex-start;
    }
`;
const DarkToggleButtonWrap = styled.span`
    display: flex;
    width: 64px;
    margin: 0 4rem 1.6rem 2rem;
    cursor: pointer;
    position: absolute;
    z-index: ${({ theme }) => theme.layer.layer6 + 2};
    img {
        width: 100%;
        height: auto;
    }
    ${({ theme }) => theme.media.labtop} {
        width: 80px;
    }
`;
const NavBarContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    box-sizing: border-box;
    height: 100%;
    padding: 7rem 2rem 2rem;

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
    height: 4rem;
    margin-bottom: 0.8rem;
    font-size: 1.6rem;
    line-height: 4rem;
    ${({ theme }) => theme.media.tablet} {
        font-size: 1.8rem;
    }
`;

const NavbarItemLink = styled(Link)`
    display: flex;
    justify-content: flex-start;
    height: 100%;
    &:hover {
        color: ${({ theme }) => theme.colors.point1};
    }
    ${({ theme }) => theme.media.labtop} {
        text-align: center;
        justify-content: center;
    }
`;
const LogoutButton = styled(Button)`
    box-sizing: border-box;
    width: 100%;
    margin-bottom: 20px;
    align-self: center;
    border: 1px solid ${({ theme }) => theme.colors.font1};
    background-color: ${({ theme }) => theme.colors.background4};
    color: ${({ theme }) => theme.colors.font2};
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
    position: relative;
    z-index: ${({ theme }) => theme.layer.layer6 + 1};
    max-width: ${({ theme }) => theme.devicesSize.labtop};
    margin: 0 auto;
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
    DarkButtonContainer,
    DarkToggleButtonWrap,
    Navbar,
    NavbarItem,
    NavbarItemLink,
    BackModal,
    NavBarContent,
    ExtendToggleButton,
};
