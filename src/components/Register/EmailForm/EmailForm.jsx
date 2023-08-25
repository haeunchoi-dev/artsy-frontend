import React, { useEffect, useRef, useState } from 'react';
import * as E from './EmailForm.styles';
import Input from '@components/@common/Input/Input';
import { useTheme } from 'styled-components';
import useToastContext from '@hooks/useToastContext';
import checkValidation from '@utils/checkValidation';
import useCheckEmailQuery from '@hooks/@queries/useCheckEmailQuery';
import { ERROR_MESSAGE } from '@constants/message';

const EmailForm = ({ userInfo, handleChange, setIsCheckEmail }) => {
    const [isValidEmail, setIsValidEmail] = useState(true);
    const emailInputRef = useRef(null);
    const theme = useTheme();
    const toast = useToastContext();
    const { email } = userInfo;
    const { data, mutate: checkDuplicatedEmail, isSuccess } = useCheckEmailQuery();

    useEffect(() => {
        if (email !== '') {
            checkValidation({ email }) ? setIsValidEmail(true) : setIsValidEmail(false);
        } else {
            setIsValidEmail(true);
        }
    }, [email]);
    useEffect(() => {
        if (isSuccess) {
            if (data.isExists) {
                toast.show(ERROR_MESSAGE.duplicatedEmail);
            } else {
                setIsCheckEmail(true);
            }
        }
    }, [isSuccess]);

    const handleCheckEmail = (e) => {
        e.preventDefault();
        const isCorrectFormat = checkValidation({ email });
        if (!isCorrectFormat) {
            return;
        }
        checkDuplicatedEmail({ email });
    };
    return (
        <E.EmailForm onSubmit={handleCheckEmail}>
            <Input
                placeholder="이메일 주소를 입력하세요."
                id="email"
                name="email"
                inputRef={emailInputRef}
                onChange={handleChange}
                value={email}
                rounded
                isRequired
                isValid={isValidEmail}
                inputWidth="100%"
                errorMessage={'이메일 양식에 맞게 입력해주세요'}
            />

            <E.CheckButton color={theme.colors.point1} size={'large'} disabled={email === '' || !isValidEmail}>
                이메일 중복 확인하기
            </E.CheckButton>
        </E.EmailForm>
    );
};

export default EmailForm;
