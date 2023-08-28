import { useEffect, useState } from 'react';
import SideBar from '@components/SideBar/SideBar';
import { StyledHeader, StyledHeaderInner } from './Header.styles';
import useHeaderContext from '@hooks/useHeaderContext';
import { Link } from 'react-router-dom';

const Header = () => {
    const { color } = useHeaderContext();

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
