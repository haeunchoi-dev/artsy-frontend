import { useEffect } from 'react';
import useLockScroll from '@hooks/useLockScroll';

import {
    StyledOverlay,
    StyledContentBox,
    StyledTitle,
    StyledDescription,
    StyledButtonContainer,
    StyledButton
} from './Confirm.styles';

const Confirm = ({
    isOpen,
    onClose,
    title,
    description,
    cancelButtonText = '취소',
    submitButtonText = '확인',
    onSubmit,
}) => {
    const { lockScroll, unLockScroll } = useLockScroll();

    useEffect(() => {
        return () => {
            unLockScroll();
        }
    }, []);

    useEffect(() => {
        if (isOpen === true) {
            lockScroll();
        } else {
            unLockScroll();
        }
    }, [isOpen]);

    return (
        <>
            { isOpen === true &&
                <StyledOverlay onClick={onClose}>
                    <StyledContentBox onClick={(e) => { e.stopPropagation() }}>
                        <StyledTitle>{ title }</StyledTitle>
                        <StyledDescription>{ description }</StyledDescription>
                        <StyledButtonContainer>
                            <StyledButton
                                onClick={onClose}
                                size={'medium'}
                                style={'line'}
                                color={'#999'}
                            >
                                { cancelButtonText }
                            </StyledButton>
                            <StyledButton
                                onClick={onSubmit}
                                size={'medium'}
                            >
                                { submitButtonText }
                            </StyledButton>
                        </StyledButtonContainer>
                    </StyledContentBox>
                </StyledOverlay>
            }
        </>
    );
}

export default Confirm;