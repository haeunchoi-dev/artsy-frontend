import * as R from './Register.styles';
import GlobalStyle from '@styles/GlobalStyles';
import { useState } from 'react';
import IntroBox from '@components/@common/introBox/IntroBox';

import EmailForm from '@components/Register/EmailForm/EmailForm';
import RegisterForm from '@components/Register/RegisterForm/RegisterForm';

const Register = () => {
    const [userInfo, setUserInfo] = useState({
        displayName: '',
        email: '',
        password: '',
    });

    const [isCheckEmail, setIsCheckEmail] = useState(false);

    const handleChange = (e) => {
        setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const initializeUserInfo = () => setUserInfo(() => ({ displayName: '', email: '', password: '' }));

    return (
        <>
            <GlobalStyle />
            <R.RegisterContainer>
                <IntroBox />
                <R.RegisterContent>
                    <R.Title>회원가입</R.Title>
                    <R.FormsContainer>
                        {!isCheckEmail ? (
                            <EmailForm
                                userInfo={userInfo}
                                initializeUserInfo={initializeUserInfo}
                                handleChange={handleChange}
                                setIsCheckEmail={setIsCheckEmail}
                            />
                        ) : (
                            <RegisterForm
                                userInfo={userInfo}
                                initializeUserInfo={initializeUserInfo}
                                handleChange={handleChange}
                                setIsCheckEmail={setIsCheckEmail}
                            />
                        )}
                    </R.FormsContainer>
                </R.RegisterContent>
            </R.RegisterContainer>
        </>
    );
};
export default Register;
