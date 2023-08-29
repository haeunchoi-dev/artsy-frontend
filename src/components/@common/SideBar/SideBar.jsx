import React, { useEffect, useState } from 'react';
import * as S from './SideBar.styles';
import { Link, useNavigate } from 'react-router-dom';
import useLogoutQuery from '@hooks/@queries/useLogoutQuery';
import useToastContext from '@hooks/useToastContext';
import { SUCCESS_MESSAGE } from '@constants/message';
import ToggleButton from '@components/@common/ToggleButton/ToggleButton';
import useAuthContext from '@hooks/useAuthContext';

const SideBar = () => {
    const navigate = useNavigate();
    const toast = useToastContext();
    const [isToggle, setIstoggle] = useState(false);

    const { isLogin } = useAuthContext();

    const { mutate: logout, isSuccess: isLogoutSuccess } = useLogoutQuery();

    useEffect(() => {
        if (isLogoutSuccess) {
            toast.show(SUCCESS_MESSAGE.successLogout);
            navigate('/');
        }
    }, [isLogoutSuccess]);

    const handleClickAuthBtn = () => {
        setIstoggle((cur) => !cur);
        if (isLogin) {
            logout();
        } else {
            navigate('/signin');
        }
    };
    const handleClickToggleBtn = () => setIstoggle((cur) => !cur);
    return (
        <>
            <S.ExtendToggleButton>
                <ToggleButton isActive={isToggle} onClick={handleClickToggleBtn} />
            </S.ExtendToggleButton>
            <S.NavBarContainer $open={isToggle}>
                <S.NavBarContent $open={isToggle}>
                    <S.Navbar>
                        <S.NavbarItem onClick={handleClickToggleBtn}>
                            <Link to="/home">홈</Link>
                        </S.NavbarItem>
                        <S.NavbarItem onClick={handleClickToggleBtn}>
                            <Link to="/ticket/list">기록함</Link>
                        </S.NavbarItem>
                        <S.NavbarItem onClick={handleClickToggleBtn}>
                            <Link to="/mypage">마이페이지</Link>
                        </S.NavbarItem>
                    </S.Navbar>
                    <S.LogoutButton color={'#fff'} size={'large'} onClick={handleClickAuthBtn} $open={isToggle}>
                        {isLogin ? '로그아웃' : '로그인'}
                    </S.LogoutButton>
                </S.NavBarContent>
            </S.NavBarContainer>
            <S.BackModal $open={isToggle}></S.BackModal>
        </>
    );
};

export default SideBar;
