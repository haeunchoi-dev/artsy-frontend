import React from 'react';
import { StyledForm, StyledInput, StyledLabel, StyledRequired, StyledErrorMessage } from './Input.styles';
/**
 * input 컴포넌트
 * @param {string} labelText label태그 내 텍스트
 * @param {string} errorMessage error일때 텍스트
 * @param {string} inputType input태그 type을 지정
 * @param {string} id label의 htmlfor, input의 id, name값
 * @param {event: ChangeEvent<HTMLInputElement>} onChange
 * @param {React.RefObject<HTMLInputElement>} inputRef
 * @param {boolean} rounded input의 형태가 라운드이면 true 언더라인이면 false
 * @param {string} min input value의 최소 길이
 * @param {string} max input value의 최대 길이
 * @param {boolean} isValid 유효성 검사 결과값
 * @param {string} inputWidth input의 width. 기본값은 290px
 * @returns
 */

const isTextAttributes = (InputType) => {
    if (InputType === 'text' || InputType === 'password') {
        return true;
    } else {
        return false;
    }
};

const Input = ({
    labelText,
    errorMessage,
    inputType = 'text',
    onChange,
    inputRef,
    rounded,
    id,
    min,
    max,
    isValid,
    isRequired,
    inputWidth = '290px',
    ...props
}) => {
    return (
        <StyledForm>
            {labelText && (
                <StyledLabel htmlFor={id}>
                    {labelText}
                    {isRequired && <StyledRequired>&#42;</StyledRequired>}
                </StyledLabel>
            )}
            <StyledInput
                type={inputType}
                id={id}
                name={id}
                onChange={onChange}
                ref={inputRef}
                $rounded={rounded}
                $valid={isValid}
                minLength={isTextAttributes(inputType) ? min : undefined}
                maxLength={isTextAttributes(inputType) ? max : undefined}
                min={isTextAttributes(inputType) ? undefined : min}
                max={isTextAttributes(inputType) ? undefined : max}
                required={isRequired}
                $inputWidth={inputWidth}
                {...props}
            />
            {!isValid ? errorMessage && <StyledErrorMessage>{errorMessage}</StyledErrorMessage> : null}
        </StyledForm>
    );
};

export default Input;
