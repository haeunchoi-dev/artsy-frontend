import SideBar from '@components/@common/SideBar/SideBar';
import { StyledHeader, StyledHeaderInner } from './Header.styles';
import useHeaderContext from '@hooks/useHeaderContext';
import useAuthContext from '@hooks/useAuthContext';

import { Link } from 'react-router-dom';

const Header = () => {
    const { color } = useHeaderContext();
    const { isLogin } = useAuthContext();
    return (
        <StyledHeader color={color}>
            <StyledHeaderInner>
                <h1>
                    <Link to={isLogin ? '/home' : '/'}>Artsy</Link>
                </h1>
                <SideBar />
            </StyledHeaderInner>
        </StyledHeader>
    );
};
export default Header;
