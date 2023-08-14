import React from 'react';
import styled from 'styled-components';

const CommonSelect = ({ options, none, defaultValue, setState, width, ...props }) => {
    const onSelect = (e) => {
        setState(e.target.value);
    };
    return (
        <CustomSelect onChange={onSelect} {...props}>
            {none && <option value="none">{none}</option>}
            {options.map((option) => (
                <option key={option.value} value={option.value} defaultValue={defaultValue === option.value}>
                    {option.name}
                </option>
            ))}
        </CustomSelect>
    );
};

const CustomSelect = styled.select`
    width: ${({ width }) => width};
    display: block;
    margin: 0px;
    padding: 6px;
    border: none;
    border-bottom: 1px solid;
    cursor: pointer;
    font-size: inherit;
    background-color: transparent;

    &:focus {
        outline: none;
    }
`;

export default CommonSelect;
