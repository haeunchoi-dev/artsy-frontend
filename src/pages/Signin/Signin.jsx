import { useEffect, useRef } from 'react';
import * as S from './Signin.styles';
import Input from '@components/@common/Input/Input';
import IntroBox from '@components/@common/introBox/IntroBox';
import useLoginQuery from '@hooks/@queries/useLoginQuery';
import { useTheme } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import useToastContext from '@hooks/useToastContext';
import useInput from '@hooks/useInput';
import checkValidation from '@utils/checkValidation';
import { ERROR_TYPE } from '@constants/serverErrorType';
import { ERROR_MESSAGE } from '@constants/message';

const Signin = () => {
    const {
        input: loginInfo,
        onChange: handleChange,
        reset,
    } = useInput({
        email: '',
        password: '',
    });

    const navigate = useNavigate();
    const { mutate, isSuccess, isError, error } = useLoginQuery();
    const emailInputRef = useRef();
    const theme = useTheme();
    const toast = useToastContext();
    useEffect(() => {
        if (isSuccess) navigate('/home');
    }, [isSuccess]);
    useEffect(() => {
        if (!isError) {
            return;
        }

        const errorType = error.response?.data?.error.type;
        if (errorType === ERROR_TYPE.INCORRECT_PASSWORD || ERROR_TYPE.NOT_FOUND_EMAIL || ERROR_TYPE.INVALID_PARAM) {
            toast.show(ERROR_MESSAGE.incorrectEmailOrPassword);
        }
    }, [isError]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = loginInfo.email;
        const isCorrectFormat = checkValidation({ email });
        if (!isCorrectFormat) {
            toast.show(ERROR_MESSAGE.incorrectEmailFormat);
            emailInputRef.current.focus();
            return;
        }
        mutate(loginInfo);
        reset();
        emailInputRef.current.focus();
    };

    const handleRegister = () => {
        navigate('/register');
    };
    const handleClickTitle = () => {
        navigate('/');
    };

    return (
        <S.SignInContainer>
            <IntroBox />
            <S.SignInContent>
                <S.LoginTitle onClick={handleClickTitle}>Artsy</S.LoginTitle>
                <S.FormContainer>
                    <S.LoginForm onSubmit={handleSubmit}>
                        <Input
                            inputType="email"
                            placeholder="이메일 주소를 입력하세요."
                            id="email"
                            name="email"
                            ref={emailInputRef}
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
                    </S.LoginForm>
                    <S.RegisterButton size={'large'} onClick={handleRegister} style="line">
                        회원가입
                    </S.RegisterButton>
                    <S.SearchPasswordButton to="/user/search">비밀번호 찾기</S.SearchPasswordButton>
                </S.FormContainer>
            </S.SignInContent>
        </S.SignInContainer>
    );
};
export default Signin;
