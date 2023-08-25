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
    const [updatedUser, setUpdatedUser] = useState({
        displayName: '',
        newPassword: '',
        confirmPassword: '',
    });

    const [formErrors, setFormErrors] = useState({
        displayName: '',
        newPassword: '',
        confirmPassword: '',
    });

    const [formValid, setFormValid] = useState({
        displayName: true,
        newPassword: true,
        confirmPassword: true,
    });

    useEffect(() => {
        if (isSuccessGet) setUpdatedUser({ ...updatedUser, displayName: userInfo.displayName });
    }, [isSuccessGet]);

    useEffect(() => {
        if (isSuccessUpdate) toast.show(SUCCESS_MESSAGE.successUpdateUser);
    }, [isSuccessUpdate]);

    useEffect(() => {
        if (isErrorUpdate) toast.show(ERROR_MESSAGE.failUpdateUser);
    }, [isErrorUpdate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedUser({ ...updatedUser, [name]: value });

        switch (name) {
            case 'displayName':
                if (!value.trim()) {
                    setFormErrors({ ...formErrors, [name]: ERROR_MESSAGE.required });
                    setFormValid({ ...formValid, [name]: false });
                } else if (!checkValidation({ displayName: value })) {
                    setFormErrors({ ...formErrors, [name]: ERROR_MESSAGE.incorrectDisplayName });
                    setFormValid({ ...formValid, [name]: false });
                } else {
                    setFormValid({ ...formValid, [name]: true });
                    setFormErrors({ ...formErrors, [name]: '' });
                }
                break;
            case 'newPassword':
                if (!value) {
                    setFormErrors({ ...formErrors, [name]: '', confirmPassword: '' });
                    setFormValid({ ...formValid, [name]: true, confirmPassword: true });
                } else if (!checkValidation({ password: value })) {
                    setFormErrors((prev) => ({ ...prev, [name]: ERROR_MESSAGE.incorrectPassword }));
                    setFormValid({ ...formValid, [name]: false });
                } else {
                    setFormValid({ ...formValid, [name]: true });
                    setFormErrors({ ...formErrors, [name]: '' });
                }
                break;
            case 'confirmPassword':
                if (newPasswordRef.current.value !== confirmPasswordRef.current.value) {
                    setFormErrors({ ...formErrors, [name]: ERROR_MESSAGE.incorrectConfirmPassword });
                    setFormValid({ ...formValid, [name]: false });
                } else {
                    setFormValid({ ...formValid, [name]: true });
                    setFormErrors({ ...formErrors, [name]: '' });
                }
                break;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            formValid.displayName &&
            formValid.newPassword &&
            formValid.confirmPassword &&
            newPasswordRef.current.value === confirmPasswordRef.current.value
        ) {
            updateUser({ displayName: updatedUser.displayName, password: updatedUser.newPassword });
            setUpdatedUser({ ...updatedUser, newPassword: '', confirmPassword: '' });
            return;
        } else {
            if (!formValid.displayName) {
                displayNameRef.current.focus();
                return;
            } else if (!formValid.newPassword) {
                newPasswordRef.current.focus();
                return;
            } else {
                confirmPasswordRef.current.focus();
                setFormErrors({ ...formErrors, confirmPassword: ERROR_MESSAGE.incorrectConfirmPassword });
                setFormValid({ ...formValid, confirmPassword: false });
            }
        }
    };
    if (isLoadingGet) return <Loading />;

    return (
        <Container>
            <U.Wrap>
                <PageTitle>회원 정보 수정</PageTitle>
                <form>
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
                            isValid={formValid.displayName}
                            isRequired
                            inputWidth="100%"
                            value={updatedUser.displayName}
                            errorMessage={formErrors.displayName}
                            onChange={handleChange}
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
                                isValid={formValid.newPassword}
                                errorMessage={formErrors.newPassword}
                                inputWidth="100%"
                                value={updatedUser.newPassword}
                                onChange={handleChange}
                                inputRef={newPasswordRef}
                            />
                        </div>
                        <div>
                            <Input
                                id="confirmPassword"
                                inputType="password"
                                placeholder="새 비밀번호 확인"
                                isValid={formValid.confirmPassword}
                                errorMessage={formErrors.confirmPassword}
                                inputWidth="100%"
                                value={updatedUser.confirmPassword}
                                onChange={handleChange}
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
                </form>
            </U.Wrap>
        </Container>
    );
};
export default UserEdit;
