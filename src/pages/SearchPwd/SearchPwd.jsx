import * as S from './SearchPwd.styles';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Container from '@components/@common/Container/Container';
import Input from '@components/@common/Input/Input';
import Button from '@components/@common/Button/Button';
import PageTitle from '@components/UserEdit/PageTitle/PageTitle';

import useToastContext from '@hooks/useToastContext';
import useFindPasswordQuery from '@hooks/@queries/useFindPasswordQuery';
import useTempLoginQuery from '@hooks/@queries/useTempLoginQuery';
import { formatTime } from '@utils/formatDate';

import { ERROR_MESSAGE, SUCCESS_MESSAGE } from '@constants/message';

const SearchPwd = () => {
    const toast = useToastContext();
    const navigate = useNavigate();
    const [isDisabledSend, setIsDisabledSend] = useState(false);
    const [isDisabledLogin, setIsDisabledLogin] = useState(true);
    const [isRunning, setIsRunning] = useState(false);
    const [emailInfo, setEmailInfo] = useState({
        email: '',
        errorMessage: '',
    });
    const [passwordInfo, setPasswordInfo] = useState({
        password: '',
        errorMessage: '',
    });
    const EXPRIRED_TIME = 600;
    const RETRY_TIME = 30000;
    const [count, setCount] = useState(EXPRIRED_TIME);
    const intervalId = useRef(null);
    const timeoutId = useRef(null);

    const { mutate: sendPassword, isSuccess: isSuccessFind, isError: isErrorFind } = useFindPasswordQuery();
    const { mutate: login, isSuccess: isSuccessLogin, isError: isErrorLogin } = useTempLoginQuery();

    useEffect(() => {
        if (isRunning) {
            intervalId.current = setInterval(() => {
                setCount((prev) => prev - 1);
            }, 1000);
            return;
        }

        return () => clearInterval(intervalId.current);
    }, [isRunning]);

    useEffect(() => {
        if (count === 0) {
            setIsRunning(false);
            setCount(EXPRIRED_TIME);
            clearInterval(intervalId.current);
            clearTimeout(timeoutId.current);
            setIsDisabledLogin(true);
            setIsDisabledSend(false);
        }
    }, [count]);

    useEffect(() => {
        if (isSuccessFind) {
            setIsRunning(true);
            setIsDisabledSend(true);
            setIsDisabledLogin(false);
            timeoutId.current = setTimeout(() => {
                setIsDisabledSend(false);
            }, RETRY_TIME);
        }
        if (isErrorFind) {
            toast.show(ERROR_MESSAGE.invalideEmail);
        }

        return () => clearTimeout(timeoutId.current);
    }, [isSuccessFind, isErrorFind]);

    useEffect(() => {
        if (isSuccessLogin) {
            toast.show(SUCCESS_MESSAGE.successSignin);
            navigate('/user/edit');
        }
        if (isErrorLogin) {
            toast.show(ERROR_MESSAGE.incorrectEmailOrPassword);
        }
    }, [isSuccessLogin, isErrorLogin]);

    const handleChange = (e) => {
        const { value, name } = e.target;
        if (name === 'email') {
            setEmailInfo({ email: value, errorMessage: '', isValid: true });
            return;
        }
        setPasswordInfo({ password: value, errorMessage: '', isValid: true });
    };

    const handleClickSend = () => {
        if (!emailInfo.email) {
            setEmailInfo({ ...emailInfo, errorMessage: ERROR_MESSAGE.required, isValid: false });
            return;
        }
        sendPassword({ email: emailInfo.email });
    };

    const handleClickLogin = () => {
        if (!passwordInfo.password) {
            setPasswordInfo({ ...passwordInfo, errorMessage: ERROR_MESSAGE.required, isValid: false });
            return;
        }
        login({ email: emailInfo.email, password: passwordInfo.password });
    };

    return (
        <Container>
            <S.Wrap>
                <PageTitle>비밀번호 찾기</PageTitle>
                <S.SubTitleWrap>가입하신 이메일을 입력하시면 해당 이메일로 임시비밀번호가 발송됩니다.</S.SubTitleWrap>
                <S.Form>
                    <S.InputBox>
                        <Input
                            id="email"
                            labelText="이메일"
                            inputType="email"
                            name="email"
                            placeholder="이메일주소 입력"
                            isRequired
                            inputWidth="100%"
                            isValid={emailInfo.errorMessage.length === 0}
                            errorMessage={emailInfo.errorMessage}
                            value={emailInfo.email}
                            onChange={handleChange}
                        />
                        <Button
                            type="button"
                            size="small"
                            full="full"
                            style="line"
                            disabled={isDisabledSend}
                            onClick={handleClickSend}
                        >
                            임시 비밀번호 발송
                        </Button>
                    </S.InputBox>
                    <S.InputBox>
                        {isRunning && <S.Timer>{formatTime(count)}</S.Timer>}
                        <Input
                            id="password"
                            name="password"
                            inputType="password"
                            labelText="임시비밀번호"
                            placeholder="임시비밀번호 입력"
                            isRequired
                            inputWidth="100%"
                            isValid={passwordInfo.errorMessage.length === 0}
                            errorMessage={passwordInfo.errorMessage}
                            value={passwordInfo.password}
                            onChange={handleChange}
                        />
                    </S.InputBox>
                    <Button
                        type="button"
                        size="large"
                        full="full"
                        disabled={isDisabledLogin}
                        onClick={handleClickLogin}
                    >
                        임시 비밀번호로 로그인
                    </Button>
                </S.Form>
            </S.Wrap>
        </Container>
    );
};
export default SearchPwd;
