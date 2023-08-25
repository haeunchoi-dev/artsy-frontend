import { useCallback, useState } from 'react';

const useInput = (initialValue) => {
    const [input, setInput] = useState(initialValue);

    const onChange = useCallback((e) => {
        const { id, value } = e.target;
        setInput((input) => ({ ...input, [id]: value }));
    }, []);

    const onNumberChange = useCallback((e) => {
        const { id, value } = e.target;

        // 숫자 길이 제한
        if (value.length > 9) {
            value = value.slice(0, 9);
        }

        setInput((input) => ({ ...input, [id]: value.replace(/\D/g, '') }));
    }, []);

    const reset = useCallback(() => setInput(initialValue), [initialValue]);

    return [input, onChange, onNumberChange, reset];
};

export default useInput;
