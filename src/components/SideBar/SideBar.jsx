import React, { useEffect, useState } from 'react';
import * as S from './SideBar.styles';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useLogoutQuery from '@hooks/@queries/useLogoutQuery';
import useToastContext from '@hooks/useToastContext';
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from '@constants/message';

const SideBar = () => {
    const [isToggle, setIstoggle] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const toast = useToastContext();
    const { mutate, isSuccess, isError } = useLogoutQuery();
    useEffect(() => {
        setIstoggle((cur) => !cur);
    }, [location.pathname]);
    useEffect(() => {
        if (isSuccess) {
            toast.show(SUCCESS_MESSAGE.successLogout);
            navigate('/signin');
        }
        if (isError) {
            toast.show(ERROR_MESSAGE.failLogout);
        }
    }, [isSuccess, isError]);
    const handleLogout = () => {
        mutate();
    };

    return (
        <>
            <S.ToggleButton $active={isToggle} onClick={() => setIstoggle((cur) => !cur)}>
                <S.ButtonBar></S.ButtonBar>
                <S.ButtonBar></S.ButtonBar>
                <S.ButtonBar></S.ButtonBar>
            </S.ToggleButton>
            <S.NavBarContainer $open={isToggle}>
                <S.NavBarContent $open={isToggle}>
                    <S.Navbar>
                        <S.NavbarItem>
                            <Link to="/">홈</Link>
                        </S.NavbarItem>
                        <S.NavbarItem>
                            <Link to="/ticket/list">기록함</Link>
                        </S.NavbarItem>
                        <S.NavbarItem>
                            <Link to="/mypage">마이페이지</Link>
                        </S.NavbarItem>
                    </S.Navbar>
                    <S.LogoutButton color={'#fff'} size={'large'} onClick={handleLogout}>
                        로그아웃
                    </S.LogoutButton>
                </S.NavBarContent>
            </S.NavBarContainer>
            <S.BackModal $open={isToggle}></S.BackModal>
        </>
    );
};

export default SideBar;
