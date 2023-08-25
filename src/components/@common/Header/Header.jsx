import { useEffect, useState } from 'react';
import SideBar from '@components/SideBar/SideBar';
import { StyledHeader, StyledHeaderInner } from './Header.styles';
import useHeaderContext from '@hooks/useHeaderContext';
import { useLocation } from 'react-router-dom';

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
                <h2>Artsy</h2>
                <SideBar />
            </StyledHeaderInner>
        </StyledHeader>
    );
};
export default Header;
