import * as R from './Register.styles';
import { useState } from 'react';

import IntroBox from '@components/@common/introBox/IntroBox';
import EmailForm from '@components/Register/EmailForm/EmailForm';
import RegisterForm from '@components/Register/RegisterForm/RegisterForm';
import useInput from '@hooks/useInput';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const {
        input: userInfo,
        onChange: handleChange,
        reset: initializeUserInfo,
    } = useInput({
        displayName: '',
        email: '',
        password: '',
    });

    const [isCheckEmail, setIsCheckEmail] = useState(false);

    const handleClickTitle = () => {
        navigate('/');
    };

    return (
        <R.RegisterContainer>
            <IntroBox />
            <R.RegisterContent>
                <R.Title onClick={handleClickTitle}>Artsy</R.Title>
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
    );
};
export default Register;
