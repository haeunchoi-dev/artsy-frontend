import React from 'react';
import * as C from './CommonSelect.styles';

const CommonSelect = ({ options, none, defaultValue, setState, width, ...props }) => {
    const onSelect = (e) => {
        setState(e.target.value);
    };
    return (
        <C.CustomSelect onChange={onSelect} {...props}>
            {none && <option value="none">{none}</option>}
            {options.map((option) => (
                <option key={option.value} value={option.value} defaultValue={defaultValue === option.value}>
                    {option.name}
                </option>
            ))}
        </C.CustomSelect>
    );
};

export default CommonSelect;
