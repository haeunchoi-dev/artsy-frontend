import React, { useEffect, useRef, useState } from 'react';
import * as R from './RegisterForm.styles';
import Input from '@components/@common/Input/Input';
import { useTheme } from 'styled-components';
import { useNavigate } from 'react-router';
import useToastContext from '@hooks/useToastContext';
import useRegisterQuery from '@hooks/@queries/useRegisterQuery';
import checkValidation from '@utils/checkValidation';
import { ERROR_TYPE } from '@constants/serverErrorType';
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from '@constants/message';
import useValidation from '@hooks/useValidation';

const checkSamePassword = (passwords) => {
    const { passwordCheck, password } = passwords;
    return passwordCheck === password;
};

const RegisterForm = ({ userInfo, initializeUserInfo, handleChange, setIsCheckEmail }) => {
    const [passwordCheck, setPasswordCheck] = useState('');
    const [isdisabledButton, setIsdisabledButton] = useState(true);

    const passwordCheckInputRef = useRef(null);
    const theme = useTheme();
    const navigate = useNavigate();
    const toast = useToastContext();

    const { mutate: signUp, isSuccess, isError, error } = useRegisterQuery();

    const { displayName, email, password } = userInfo;

    const { isValid: isValidName, errorMessage: errorMessageName } = useValidation(
        { displayName },
        checkValidation,
        ERROR_MESSAGE.incorrectDisplayName
    );

    const { isValid: isValidPassword, errorMessage: errorMessagePassword } = useValidation(
        { password },
        checkValidation,
        ERROR_MESSAGE.incorrectPassword
    );
    const { isValid: isSamePassword, errorMessage: errorMessagePasswordCheck } = useValidation(
        { passwordCheck, password },
        checkSamePassword,
        ERROR_MESSAGE.incorrectConfirmPassword
    );

    useEffect(() => {
        if (isError) {
            const errorType = error.response.data?.error.type;
            switch (errorType) {
                case ERROR_TYPE.INVALID_PARAM: {
                    toast.show(ERROR_MESSAGE.incorrectRegister);
                    break;
                }
                default: {
                    toast.show('관리자에게 문의하세요');
                }
            }
        }
        if (isSuccess) {
            toast.show(SUCCESS_MESSAGE.successRegister);
            navigate('/signin');
        }
    }, [isSuccess, isError]);

    useEffect(() => {
        const isCorrectFormat = isValidPassword && isValidName && isSamePassword;

        if (isCorrectFormat) {
            setIsdisabledButton(false);
        } else {
            setIsdisabledButton(true);
        }
    }, [displayName, password, isSamePassword]);

    const handleRegister = async (e) => {
        e.preventDefault();

        signUp(userInfo);
        initializeUserInfo();
    };

    const handlebackToEmail = () => {
        const confirm = window.confirm('이메일 주소를 다시 입력하시겠어요?');
        if (confirm) {
            setIsCheckEmail(false);
            initializeUserInfo();
        }
    };

    const handlePasswordCheck = () => {
        setPasswordCheck(() => passwordCheckInputRef.current.value);
    };
    return (
        <>
            <R.Email>이메일 주소: {email}</R.Email>
            <R.RegisterForm onSubmit={handleRegister}>
                <Input
                    placeholder="이름(닉네임)을 입력하세요."
                    id="displayName"
                    name="displayName"
                    onChange={handleChange}
                    value={displayName}
                    rounded
                    isRequired
                    isValid={errorMessageName === ''}
                    inputWidth="100%"
                    errorMessage={errorMessageName}
                />
                <Input
                    inputType="password"
                    placeholder="비밀번호를 입력하세요."
                    id="password"
                    onChange={handleChange}
                    value={password}
                    rounded
                    isRequired
                    isValid={errorMessagePassword === ''}
                    inputWidth="100%"
                    errorMessage={errorMessagePassword}
                />
                <Input
                    inputType="password"
                    placeholder="비밀번호를 재입력하세요."
                    id="passwordCheck"
                    inputRef={passwordCheckInputRef}
                    onChange={handlePasswordCheck}
                    value={passwordCheck}
                    rounded
                    isRequired
                    isValid={errorMessagePasswordCheck === ''}
                    inputWidth="100%"
                    errorMessage={errorMessagePasswordCheck}
                />

                <R.RegisterButton color={theme.colors.point1} size={'large'} disabled={isdisabledButton}>
                    가입하기
                </R.RegisterButton>
                <R.BackButton onClick={handlebackToEmail}>뒤로가기</R.BackButton>
            </R.RegisterForm>
        </>
    );
};

export default RegisterForm;
