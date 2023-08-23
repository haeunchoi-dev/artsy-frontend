import SideBar from '../../SideBar/SideBar';
import { StyledHeader, StyledHeaderInner } from './Header.styles';

const Header = () => {
    return (
        <StyledHeader>
            <StyledHeaderInner>Header</StyledHeaderInner>
            <SideBar />
        </StyledHeader>
    );
};
export default Header;
