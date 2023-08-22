import * as R from './Register.styles';
import Input from '@components/@common/Input/Input';
import GlobalStyle from '@styles/GlobalStyles';
import { useEffect, useRef, useState } from 'react';
import { useTheme } from 'styled-components';
import useCheckEmailQuery from '../../hooks/@queries/useCheckEmailQuery';
import { ERROR_MESSAGE } from '@constants/message';
import useRegisterQuery from '../../hooks/@queries/useRegisterQuery';
import SplitLayout from '@components/SplitLayout/SplitLayout';
import IntroBox from '@components/introBox/IntroBox';
import { useNavigate } from 'react-router-dom';
import checkValidation from '../../utils/checkValidation';

const leftBgColor = 'background: linear-gradient(180deg, rgba(105, 96, 204, 0.8) 0%, #554dab 100%)';

const Register = () => {
    const [userInfo, setUserInfo] = useState({
        displayName: '',
        email: '',
        password: '',
    });

    const [isCheckEmail, setIsCheckEmail] = useState(false);
    const { data, mutate: checkDuplicatedEmail, isSuccess: isSuccessEmailCheck } = useCheckEmailQuery();
    const { mutate: signUp, isSuccess: isSuccessRegister } = useRegisterQuery();
    const navigate = useNavigate();
    const theme = useTheme();
    const nameInputRef = useRef();
    useEffect(() => {
        if (!isCheckEmail && isSuccessEmailCheck) {
            if (data.isExists) {
                alert(ERROR_MESSAGE.duplicatedEmail);
            } else {
                alert('사용가능한 이메일 주소입니다.');
                setIsCheckEmail(true);
            }
        }
        if (isSuccessRegister) {
            alert('성공적으로 가입되었습니다!');
            navigate('/signin');
        }
    }, [isSuccessEmailCheck, isSuccessRegister]);

    const handleChange = (e) => {
        setUserInfo((cur) => ({ ...cur, [e.target.name]: e.target.value }));
    };

    const handleCheckEmail = (e) => {
        e.preventDefault();
        const email = userInfo.email;
        const isCorrectFormat = checkValidation({ email });
        if (!isCorrectFormat) {
            setUserInfo({ displayName: '', email: '', password: '' });
            return;
        }
        checkDuplicatedEmail({ email });
    };

    const handlebackToEmail = () => {
        setIsCheckEmail(false);
    };
    const handleRegister = async (e) => {
        e.preventDefault();
        const { displayName, password } = userInfo;

        const isCorrectFormat = checkValidation({ displayName }) && checkValidation({ password });
        if (!isCorrectFormat) {
            alert('닉네임 또는 비밀번호를 조건에 맞게 입력했는지 확인하세요');
            return;
        }
        signUp(userInfo);
        setUserInfo({ displayName: '', email: '', password: '' });
    };
    return (
        <>
            <GlobalStyle />
            <SplitLayout leftCss={leftBgColor}>
                <R.RegisterContainer>
                    <IntroBox />
                    <R.RegisterContent>
                        <R.Title>회원가입</R.Title>
                        <R.FormsContainer>
                            {!isCheckEmail ? (
                                <R.RegisterForm onSubmit={handleCheckEmail}>
                                    <Input
                                        placeholder="이메일 주소를 입력하세요."
                                        id="email"
                                        name="email"
                                        onChange={handleChange}
                                        value={userInfo.email}
                                        rounded
                                        isRequired
                                        isValid={true}
                                        inputWidth="100%"
                                    />
                                    <R.RegisterButton color={theme.colors.point1} size={'large'}>
                                        이메일 중복 확인하기
                                    </R.RegisterButton>
                                </R.RegisterForm>
                            ) : (
                                <R.RegisterForm onSubmit={handleRegister}>
                                    <Input
                                        placeholder="이름(닉네임)을 입력하세요."
                                        id="displayName"
                                        name="displayName"
                                        inputRef={nameInputRef}
                                        onChange={handleChange}
                                        value={userInfo.displayName}
                                        rounded
                                        isRequired
                                        isValid={true}
                                        inputWidth="100%"
                                        errorMessage={'최소 3자에서 최대15자를 입력해주세요'}
                                    />
                                    <Input
                                        inputType="password"
                                        placeholder="비밀번호를 입력하세요."
                                        id="password"
                                        name="password"
                                        onChange={handleChange}
                                        value={userInfo.password}
                                        rounded
                                        isRequired
                                        isValid={true}
                                        inputWidth="100%"
                                    />

                                    <R.RegisterButton color={theme.colors.point1} size={'large'}>
                                        가입하기
                                    </R.RegisterButton>
                                    <R.BackButton onClick={handlebackToEmail}>뒤로가기</R.BackButton>
                                </R.RegisterForm>
                            )}
                        </R.FormsContainer>
                    </R.RegisterContent>
                </R.RegisterContainer>
            </SplitLayout>
        </>
    );
};
export default Register;
