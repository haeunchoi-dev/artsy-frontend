import React, { useEffect, useState } from 'react';
import * as S from './SideBar.styles';
import { useNavigate } from 'react-router-dom';
import useLogoutQuery from '@hooks/@queries/useLogoutQuery';
import useToastContext from '@hooks/useToastContext';
import { SUCCESS_MESSAGE } from '@constants/message';
import ToggleButton from '@components/@common/ToggleButton/ToggleButton';
import useAuthContext from '@hooks/useAuthContext';
import useDarkMode from '@hooks/useDarkMode';
import lightToggleUrl from '@assets/icons/icon-lightToggle.png';
import darkToggleUrl from '@assets/icons/icon-darkToggle.png';

const SideBar = () => {
    const navigate = useNavigate();
    const toast = useToastContext();
    const { darkMode, toggleDarkMode } = useDarkMode();
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
                <S.DarkButtonContainer>
                    <S.DarkToggleButtonWrap onClick={toggleDarkMode}>
                        {darkMode ? (
                            <img src={darkToggleUrl} alt={'dark toggle'} />
                        ) : (
                            <img src={lightToggleUrl} alt={'light toggle'} />
                        )}
                    </S.DarkToggleButtonWrap>
                </S.DarkButtonContainer>
                <S.NavBarContent $open={isToggle}>
                    <S.Navbar onClick={handleClickToggleBtn}>
                        <S.NavbarItem>
                            <S.NavbarItemLink to="/home">홈</S.NavbarItemLink>
                        </S.NavbarItem>
                        <S.NavbarItem>
                            <S.NavbarItemLink to="/ticket/list">기록함</S.NavbarItemLink>
                        </S.NavbarItem>
                        <S.NavbarItem>
                            <S.NavbarItemLink to="/mypage">마이페이지</S.NavbarItemLink>
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
