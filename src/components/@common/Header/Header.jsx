import { useEffect, useState } from 'react';
import SideBar from '@components/SideBar/SideBar';
import { StyledHeader, StyledHeaderInner } from './Header.styles';
import useHeaderContext from '@hooks/useHeaderContext';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const { color, setColor, ticketId } = useHeaderContext();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname !== `/ticket/detail/${ticketId}`) {
            setColor('#fff');
        }
    }, [location.pathname]);

    return (
        <StyledHeader color={color}>
            <StyledHeaderInner>
                <h1>
                    <Link to="/home">Artsy</Link>
                </h1>
                <SideBar />
            </StyledHeaderInner>
        </StyledHeader>
    );
};
export default Header;
