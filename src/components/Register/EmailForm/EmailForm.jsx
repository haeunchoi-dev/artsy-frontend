import React, { useEffect } from 'react';
import * as E from './EmailForm.styles';
import Input from '@components/@common/Input/Input';
import { useTheme } from 'styled-components';
import useToastContext from '@hooks/useToastContext';
import checkValidation from '@utils/checkValidation';
import useCheckEmailQuery from '@hooks/@queries/useCheckEmailQuery';
import { ERROR_MESSAGE } from '@constants/message';
import useValidation from '@hooks/useValidation';

const EmailForm = ({ userInfo, handleChange, setIsCheckEmail }) => {
    const theme = useTheme();
    const toast = useToastContext();
    const { email } = userInfo;
    const { data, mutate: checkDuplicatedEmail, isSuccess } = useCheckEmailQuery();
    const { isValid, errorMessage } = useValidation({ email }, checkValidation, ERROR_MESSAGE.incorrectEmailFormat);

    useEffect(() => {
        if (!isSuccess) {
            return;
        }
        if (data.isExists) {
            toast.show(ERROR_MESSAGE.duplicatedEmail);
        } else {
            setIsCheckEmail(true);
        }
    }, [isSuccess]);

    const handleCheckEmail = (e) => {
        e.preventDefault();
        checkDuplicatedEmail({ email });
    };
    return (
        <E.EmailForm onSubmit={handleCheckEmail}>
            <Input
                inputType="email"
                placeholder="이메일 주소를 입력하세요."
                id="email"
                name="email"
                onChange={handleChange}
                value={email}
                rounded
                isRequired
                isValid={errorMessage === ''}
                inputWidth="100%"
                errorMessage={errorMessage}
            />

            <E.CheckButton color={theme.colors.point1} size={'large'} disabled={email === '' || !isValid}>
                이메일 중복 확인하기
            </E.CheckButton>
        </E.EmailForm>
    );
};

export default EmailForm;
