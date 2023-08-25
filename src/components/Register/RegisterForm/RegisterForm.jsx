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

const RegisterForm = ({ userInfo, initializeUserInfo, handleChange, setIsCheckEmail }) => {
    const [passwordCheck, setPasswordCheck] = useState('');
    const [isSamePassword, setIsSamePassword] = useState(true);
    const [isValidName, setIsValidName] = useState(true);
    const [isValidPassword, setIsValidPassword] = useState(true);
    const [isdisabledButton, setIsdisabledButton] = useState(true);

    const nameInputRef = useRef(null);
    const passwordInputRef = useRef(null);
    const passwordCheckInputRef = useRef(null);
    const theme = useTheme();
    const navigate = useNavigate();
    const toast = useToastContext();

    const { mutate: signUp, isSuccess, isError, error } = useRegisterQuery();

    const { displayName, email, password } = userInfo;

    useEffect(() => {
        if (passwordCheck !== '') {
            password === passwordCheck ? setIsSamePassword(true) : setIsSamePassword(false);
        } else {
            setIsSamePassword(true);
        }
    }, [password, passwordCheck]);

    useEffect(() => {
        if (password !== '') {
            checkValidation({ password }) ? setIsValidPassword(true) : setIsValidPassword(false);
        } else {
            setIsValidPassword(true);
        }
    }, [password]);

    useEffect(() => {
        if (displayName !== '') {
            checkValidation({ displayName }) ? setIsValidName(true) : setIsValidName(false);
        } else {
            setIsValidName(true);
        }
    }, [displayName]);

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
        const isCorrectFormat = checkValidation({ displayName }) && checkValidation({ password });
        if (isCorrectFormat && isSamePassword) {
            setIsdisabledButton(false);
        } else {
            setIsdisabledButton(true);
        }
    }, [displayName, password, isSamePassword]);
    const handleRegister = async (e) => {
        e.preventDefault();

        const isCorrectFormat = checkValidation({ displayName }) && checkValidation({ password });
        if (!isCorrectFormat || !isSamePassword) {
            toast.show(ERROR_MESSAGE.incorrectRegister);
            return;
        }
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
                    inputRef={nameInputRef}
                    onChange={handleChange}
                    value={displayName}
                    rounded
                    isRequired
                    isValid={isValidName}
                    inputWidth="100%"
                    errorMessage={'이름(닉네임)은 3~15자리를 입력해주세요'}
                />
                <Input
                    inputType="password"
                    placeholder="비밀번호를 입력하세요."
                    id="password"
                    inputRef={passwordInputRef}
                    onChange={handleChange}
                    value={password}
                    rounded
                    isRequired
                    isValid={isValidPassword}
                    inputWidth="100%"
                    errorMessage={'비밀번호는 8~32자리(영문자/숫자/특수문자)로 입력해주세요.'}
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
                    isValid={isSamePassword}
                    inputWidth="100%"
                    errorMessage={'입력한 비밀번호와 재입력한 비밀번호가 일치하지 않습니다.'}
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
