import { useTheme } from 'styled-components';
import * as S from './Signin.styles';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import useLoginQuery from '@hooks/@queries/useLoginQuery';
import useWindowWidth from '@hooks/useWindowWidth';
import useToastContext from '@hooks/useToastContext';
import Input from '@components/@common/Input/Input';
import IntroBox from '@components/@common/introBox/IntroBox';
import { ERROR_TYPE } from '@constants/serverErrorType';
import { ERROR_MESSAGE } from '@constants/message';
import checkValidation from '@utils/checkValidation';

const Signin = () => {
    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: '',
    });
    const navigate = useNavigate();
    const { mutate, isSuccess, isError, error } = useLoginQuery();
    const windowWidth = useWindowWidth();
    const emailInputRef = useRef();
    const theme = useTheme();
    const labtopSize = theme.devicesSize.labtop.replace('px', '');
    const toast = useToastContext();
    useEffect(() => {
        if (isSuccess) navigate('/home');
    }, [isSuccess]);
    useEffect(() => {
        if (isError) {
            const errorType = error.response?.data?.error.type;
            switch (errorType) {
                case ERROR_TYPE.INCORRECT_PASSWORD: {
                    toast.show(ERROR_MESSAGE.incorrectEmailOrPassword);
                    break;
                }
                case ERROR_TYPE.NOT_FOUND_EMAIL: {
                    toast.show(ERROR_MESSAGE.incorrectEmailOrPassword);
                    break;
                }
                default: {
                    toast.show(ERROR_MESSAGE.defaultError);
                }
            }
        }
    }, [isError]);

    const handleChange = (e) => {
        setLoginInfo((cur) => ({ ...cur, [e.target.name]: e.target.value }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = loginInfo.email;
        const isCorrectFormat = checkValidation({ email });
        if (!isCorrectFormat) {
            setLoginInfo({ email: '', password: '' });
            emailInputRef.current.focus();

            return;
        }
        mutate(loginInfo);
        setLoginInfo({ email: '', password: '' });
        emailInputRef.current.focus();
    };

    const handleRegister = () => {
        navigate('/register');
    };

    return (
        <S.SignInContainer>
            <IntroBox />
            <S.SignInContent>
                <S.loginTitle>{windowWidth > labtopSize ? 'Welcome!' : 'Artsy'}</S.loginTitle>
                <S.loginForm onSubmit={handleSubmit}>
                    <Input
                        placeholder="이메일 주소를 입력하세요."
                        id="email"
                        name="email"
                        inputRef={emailInputRef}
                        onChange={handleChange}
                        value={loginInfo.email}
                        rounded
                        isRequired
                        isValid={true}
                        inputWidth="100%"
                    />
                    <Input
                        inputType="password"
                        placeholder="비밀번호를 입력하세요."
                        id="password"
                        name="password"
                        onChange={handleChange}
                        value={loginInfo.password}
                        rounded
                        isRequired
                        isValid={true}
                        inputWidth="100%"
                    />
                    <S.SignInButton color={theme.colors.point1} size={'large'}>
                        로그인
                    </S.SignInButton>
                </S.loginForm>
                <S.RegisterButton size={'large'} onClick={handleRegister}>
                    회원가입
                </S.RegisterButton>
            </S.SignInContent>
        </S.SignInContainer>
    );
};
export default Signin;
