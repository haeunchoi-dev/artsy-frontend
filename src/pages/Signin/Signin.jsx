import { useTheme } from 'styled-components';
import * as S from './Signin.styles';
import Input from '@components/@common/Input/Input';
import { useEffect, useMemo, useState } from 'react';
import useLoginQuery from '@hooks/@queries/useLoginQuery';
import { useNavigate } from 'react-router-dom';
import SplitLayout from '@components/SplitLayout/SplitLayout';
import { ERROR_MESSAGE } from '@constants/message';
import { VALIDATE } from '@constants/regexp';
import GlobalStyle from '@styles/GlobalStyles';
import useWindowWidth from '../../hooks/useWindowWidth';
import IntroBox from '../../components/introBox/IntroBox';

function checkValidEmail(email) {
    var pattern = VALIDATE.email;
    if (email.match(pattern) === null) {
        alert(ERROR_MESSAGE.incorrectEmailFormat);
        return false;
    }
    return true;
}

const Signin = () => {
    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: '',
    });
    const navigate = useNavigate();
    const { mutate, isSuccess } = useLoginQuery();
    const windowWidth = useWindowWidth();
    const theme = useTheme();

    useEffect(() => {
        if (isSuccess) navigate('../');
    }, [isSuccess]);

    const handleChange = (e) => {
        setLoginInfo((cur) => ({ ...cur, [e.target.name]: e.target.value }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const isCorrectFormat = checkValidEmail(loginInfo.email);
        if (!isCorrectFormat) {
            setLoginInfo({ email: '', password: '' });
            return;
        }
        mutate(loginInfo);
        setLoginInfo({ email: '', password: '' });
    };

    const handleRegister = () => {
        navigate('../register');
    };

    const leftBgColor = useMemo(
        () => 'background: linear-gradient(180deg, rgba(105, 96, 204, 0.8) 0%, #554dab 100%)',
        []
    );
    return (
        <>
            <GlobalStyle />
            <SplitLayout leftCss={leftBgColor}>
                <S.SignInContainer>
                    <IntroBox />
                    <S.SignInContent $theme={theme}>
                        <S.loginTitle $theme={theme}>{windowWidth > 1280 ? 'Welcome!' : 'Artsy'}</S.loginTitle>
                        <S.loginForm onSubmit={handleSubmit} $theme={theme}>
                            <Input
                                placeholder="이메일 주소를 입력하세요."
                                id="email"
                                name="email"
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
                        <S.RegisterButton $theme={theme} size={'large'} onClick={handleRegister}>
                            회원가입
                        </S.RegisterButton>
                    </S.SignInContent>
                </S.SignInContainer>
            </SplitLayout>
        </>
    );
};
export default Signin;
