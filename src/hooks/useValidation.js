import React, { useEffect, useState } from 'react';

const useValidation = (value, validationFn, ERROR_MESSAGE) => {
    const [errorMessage, setErrorMessage] = useState('');
    const [isValid, setIsValid] = useState(false);
    const isEmpty = Object.values(value)[0].length === 0;
    useEffect(() => {
        if (!isEmpty) {
            const validationResult = validationFn(value);
            validationResult ? setIsValid(true) : setIsValid(false);
            setErrorMessage(() => (validationResult ? '' : ERROR_MESSAGE));
        } else {
            setErrorMessage('');
        }
    }, [value, isValid]);

    return { errorMessage, isValid };
};

export default useValidation;
