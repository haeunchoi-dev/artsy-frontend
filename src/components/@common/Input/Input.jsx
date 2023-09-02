import React, { forwardRef } from 'react';
import { StyledForm, StyledInput, StyledLabel, StyledRequired, StyledErrorMessage, StyledInputContainer } from './Input.styles';
/**
 * input 컴포넌트
 * @param {string} labelText label태그 내 텍스트
 * @param {string} errorMessage error일때 텍스트
 * @param {string} inputType input태그 type을 지정
 * @param {string} id label의 htmlfor, input의 id, name값
 * @param {event: ChangeEvent<HTMLInputElement>} onChange
 * @param {React.RefObject<HTMLInputElement>} ref
 * @param {boolean} rounded input의 형태가 라운드이면 true 언더라인이면 false
 * @param {string} min input value의 최소 길이
 * @param {string} max input value의 최대 길이
 * @param {boolean} isValid 유효성 검사 결과값
 * @param {string} inputWidth input의 width. 기본값은 290px
 * @param {React.ReactNode} inputRightComponent input의 오른쪽에 위치하는 리액트 노드
 * @returns
 */

const isTextAttributes = (InputType) => {
    if (InputType === 'text' || InputType === 'password') {
        return true;
    } else {
        return false;
    }
};

const Input = forwardRef(
    (
        {
            labelText,
            errorMessage,
            inputType = 'text',
            onChange,
            rounded,
            id,
            min,
            max,
            readOnly = false,
            isValid,
            isRequired,
            inputWidth = '290px',
            inputRightComponent,
            ...props
        },
        ref
    ) => {
        return (
            <StyledForm>
                {labelText && (
                    <StyledLabel htmlFor={id}>
                        {labelText}
                        {isRequired && <StyledRequired>&#42;</StyledRequired>}
                    </StyledLabel>
                )}
                <StyledInputContainer>
                    <StyledInput
                        type={inputType}
                        id={id}
                        name={id}
                        onChange={onChange}
                        ref={ref}
                        $rounded={rounded}
                        readOnly={readOnly}
                        $valid={isValid}
                        minLength={isTextAttributes(inputType) ? min : undefined}
                        maxLength={isTextAttributes(inputType) ? max : undefined}
                        min={isTextAttributes(inputType) ? undefined : min}
                        max={isTextAttributes(inputType) ? undefined : max}
                        required={isRequired}
                        $inputWidth={inputWidth}
                        {...props}
                    />
                    { inputRightComponent }
                </StyledInputContainer>

                {!isValid ? errorMessage && <StyledErrorMessage>{errorMessage}</StyledErrorMessage> : null}
            </StyledForm>
        );
    }
);
export default Input;
