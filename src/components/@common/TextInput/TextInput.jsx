import React from 'react';
import * as T from './TextInput.styles';
/**
 * input 컴포넌트
 * @param {string} labelText label태그 내 텍스트
 * @param {string} errorMessage error일때 텍스트
 * @param {string} inputType input태그 type을 지정
 * @param {string} id
 * @param {string} placeholder
 * @param {event: ChangeEvent<HTMLInputElement>} onChange
 * @param {React.RefObject<HTMLInputElement>} inputRef
 * @param {boolean} isRouned input의 형태가 라운드이면 true 언더라인이면 false
 * @param {string} min input value의 최소 길이
 * @param {string} max input value의 최대 길이
 * @param {boolean} isValid 유효성 검사 결과값
 * @param {boolean} autoFocus
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

const TextInput = ({
    labelText,
    errorMessage,
    inputType = 'text',
    id,
    placeholder,
    value,
    onChange,
    inputRef,
    rounded,
    min,
    max,
    isValid,
    autoFocus,
    isRequired,
    inputWidth = '290px',
}) => {
    return (
        <T.FormGroup>
            {labelText && (
                <T.Label htmlFor={id}>
                    {labelText}
                    {isRequired && <T.Required>&#42;</T.Required>}
                </T.Label>
            )}
            <T.Input
                type={inputType}
                id={id}
                name={id}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                ref={inputRef}
                $rounded={rounded}
                $valid={isValid}
                minLength={isTextAttributes(inputType) ? min : undefined}
                maxLength={isTextAttributes(inputType) ? max : undefined}
                min={isTextAttributes(inputType) ? undefined : min}
                max={isTextAttributes(inputType) ? undefined : max}
                autoFocus={autoFocus}
                required={isRequired}
                $inputWidth={inputWidth}
            />
            {!isValid ? errorMessage && <T.ErrorMessage>{errorMessage}</T.ErrorMessage> : null}
        </T.FormGroup>
    );
};

export default TextInput;
