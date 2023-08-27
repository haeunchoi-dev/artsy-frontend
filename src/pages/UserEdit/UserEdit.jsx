import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { useUserGetQuery, useUserEditQuery } from '@hooks/@queries/useUserInfoQuery';
import useToastContext from '@hooks/useToastContext';

import Container from '@components/@common/Container/Container';
import Loading from '@components/@common/Loading/Loading';
import Input from '@components/@common/Input/Input';
import Button from '@components/@common/Button/Button';
import ButtonWrap from '@components/@common/ButtonWrap/ButtonWrap';
import PageTitle from '@components/UserEdit/PageTitle/PageTitle';

import { ERROR_MESSAGE, SUCCESS_MESSAGE } from '@constants/message';

import checkValidation from '@utils/checkValidation';

import * as U from './UserEdit.styles';

const UserEdit = () => {
    const navigate = useNavigate();
    const { data: userInfo, isSuccess: isSuccessGet, isLoading: isLoadingGet } = useUserGetQuery();
    const { mutate: updateUser, isSuccess: isSuccessUpdate, isError: isErrorUpdate } = useUserEditQuery();
    const toast = useToastContext();
    const displayNameRef = useRef();
    const newPasswordRef = useRef();
    const confirmPasswordRef = useRef();

    const [displayNameInfo, setDisplayNameInfo] = useState({
        displayName: '',
        errorMessage: '',
        isValid: false,
    });
    const [newPasswordInfo, setNewPasswordInfo] = useState({
        newPassword: '',
        errorMessage: '',
        isValid: false,
    });
    const [confirmPasswordInfo, setConfirmPasswordInfo] = useState({
        confirmPassword: '',
        errorMessage: '',
        isValid: false,
    });

    useEffect(() => {
        if (isSuccessGet) {
            setDisplayNameInfo({ ...displayNameInfo, displayName: userInfo.displayName, isValid: true });
            setNewPasswordInfo({ ...newPasswordInfo, isValid: true });
            setConfirmPasswordInfo({ ...confirmPasswordInfo, isValid: true });
        }
    }, [isSuccessGet]);

    useEffect(() => {
        if (isSuccessUpdate) toast.show(SUCCESS_MESSAGE.successUpdateUser);
    }, [isSuccessUpdate]);

    useEffect(() => {
        if (isErrorUpdate) toast.show(ERROR_MESSAGE.failUpdateUser);
    }, [isErrorUpdate]);

    const handleChangeDisplayName = (e) => {
        const { value } = e.target;
        setDisplayNameInfo({ ...displayNameInfo, displayName: value });

        if (!value.trim()) {
            setDisplayNameInfo({ displayName: value, errorMessage: ERROR_MESSAGE.required, isValid: false });
            return;
        }
        if (!checkValidation({ displayName: value })) {
            setDisplayNameInfo({
                displayName: value,
                errorMessage: ERROR_MESSAGE.incorrectDisplayName,
                isValid: false,
            });
            return;
        }
        setDisplayNameInfo({ displayName: value, errorMessage: '', isValid: true });
    };

    const handleChangeNewPassword = (e) => {
        const { value } = e.target;

        setNewPasswordInfo({ ...newPasswordInfo, newPassword: value });

        if (!value) {
            setConfirmPasswordInfo({ confirmPassword: '', errorMessage: '', isValid: true });
            setNewPasswordInfo({ newPassword: '', errorMessage: '', isValid: true });
            return;
        }
        if (!checkValidation({ password: value })) {
            setNewPasswordInfo({ newPassword: value, errorMessage: ERROR_MESSAGE.incorrectPassword, isValid: false });
            return;
        }
        setNewPasswordInfo({ newPassword: value, errorMessage: '', isValid: true });
    };

    const handleChangeConfirmPassword = (e) => {
        const { value } = e.target;
        setConfirmPasswordInfo({ ...confirmPasswordInfo, confirmPassword: value });

        if (newPasswordRef.current.value !== confirmPasswordRef.current.value) {
            setConfirmPasswordInfo({
                confirmPassword: value,
                errorMessage: ERROR_MESSAGE.incorrectConfirmPassword,
                isValid: false,
            });
            return;
        }
        setConfirmPasswordInfo({ confirmPassword: value, errorMessage: '', isValid: true });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            displayNameInfo.isValid &&
            newPasswordInfo.isValid &&
            confirmPasswordInfo.isValid &&
            newPasswordRef.current.value === confirmPasswordRef.current.value
        ) {
            if (newPasswordRef.current.value) {
                updateUser({ displayName: displayNameRef.current.value, password: newPasswordRef.current.value });
            } else {
                updateUser({ displayName: displayNameRef.current.value });
            }

            setNewPasswordInfo({ newPassword: '', errorMessage: '', isValid: true });
            setConfirmPasswordInfo({ confirmPassword: '', errorMessage: '', isValid: true });

            return;
        }

        if (!displayNameInfo.isValid) {
            displayNameRef.current.focus();
            return;
        } else if (!newPasswordInfo.isValid) {
            newPasswordRef.current.focus();
            return;
        } else {
            confirmPasswordRef.current.focus();
            setConfirmPasswordInfo({
                ...confirmPasswordInfo,
                errorMessage: ERROR_MESSAGE.incorrectConfirmPassword,
                isValid: false,
            });
        }
    };
    if (isLoadingGet) return <Loading />;

    return (
        <Container>
            <U.Wrap>
                <PageTitle>회원 정보 수정</PageTitle>
                <U.Form>
                    <U.InputBox>
                        <Input
                            id="inputEmail"
                            inputType="text"
                            labelText="이메일"
                            readOnly="readonly"
                            isValid={true}
                            inputWidth="100%"
                            value={userInfo?.email || ''}
                        />
                    </U.InputBox>
                    <U.InputBox>
                        <Input
                            id="displayName"
                            inputType="text"
                            labelText="이름(닉네임)"
                            isValid={displayNameInfo.errorMessage.length === 0}
                            isRequired
                            inputWidth="100%"
                            value={displayNameInfo.displayName}
                            errorMessage={displayNameInfo.errorMessage}
                            onChange={handleChangeDisplayName}
                            inputRef={displayNameRef}
                        />
                    </U.InputBox>
                    <U.InputBox>
                        <div>
                            <Input
                                id="newPassword"
                                inputType="password"
                                labelText="비밀번호"
                                placeholder="새 비밀번호"
                                isValid={newPasswordInfo.errorMessage.length === 0}
                                errorMessage={newPasswordInfo.errorMessage}
                                inputWidth="100%"
                                value={newPasswordInfo.newPassword}
                                onChange={handleChangeNewPassword}
                                inputRef={newPasswordRef}
                            />
                        </div>
                        <div>
                            <Input
                                id="confirmPassword"
                                inputType="password"
                                placeholder="새 비밀번호 확인"
                                isValid={confirmPasswordInfo.errorMessage.length === 0}
                                errorMessage={confirmPasswordInfo.errorMessage}
                                inputWidth="100%"
                                value={confirmPasswordInfo.confirmPassword}
                                onChange={handleChangeConfirmPassword}
                                inputRef={confirmPasswordRef}
                            />
                        </div>
                    </U.InputBox>
                    <ButtonWrap>
                        <Button type="button" size="large" full="full" style="line" onClick={() => navigate('/mypage')}>
                            취소
                        </Button>
                        <Button type="button" size="large" full="full" onClick={handleSubmit}>
                            수정
                        </Button>
                    </ButtonWrap>
                </U.Form>
            </U.Wrap>
        </Container>
    );
};
export default UserEdit;
