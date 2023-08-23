import React, { useEffect, useState } from 'react';
import * as S from './SideBar.styles';
import { Link, useNavigate } from 'react-router-dom';
import useLogoutQuery from '@hooks/@queries/useLogoutQuery';
import useToastContext from '@hooks/useToastContext';
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from '@constants/message';
import ToggleButton from '@components/@common/ToggleButton/ToggleButton';

const SideBar = () => {
    const [isToggle, setIstoggle] = useState(false);
    const navigate = useNavigate();
    const toast = useToastContext();
    const { mutate, isSuccess, isError } = useLogoutQuery();

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
    const handleToggleBtn = () => setIstoggle((cur) => !cur);
    return (
        <>
            <S.ExtendToggleButton>
                <ToggleButton isActive={isToggle} onClick={handleToggleBtn} />
            </S.ExtendToggleButton>
            <S.NavBarContainer $open={isToggle}>
                <S.NavBarContent $open={isToggle}>
                    <S.Navbar>
                        <S.NavbarItem onClick={handleToggleBtn}>
                            <Link to="/">홈</Link>
                        </S.NavbarItem>
                        <S.NavbarItem onClick={handleToggleBtn}>
                            <Link to="/ticket/list">기록함</Link>
                        </S.NavbarItem>
                        <S.NavbarItem onClick={handleToggleBtn}>
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
