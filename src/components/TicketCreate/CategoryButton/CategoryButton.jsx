import React from 'react';
import * as C from './CategoryButton.styles';

const CategoryButton = ({ datas, checkedvalue, onChange }) => {
    return (
        <C.Container>
            {datas?.map(({ id, color, name }) => (
                <label key={id} htmlFor={name}>
                    <C.RadioButton
                        id={name}
                        color={color}
                        type="radio"
                        value={id}
                        checked={parseInt(checkedvalue) === id}
                        onChange={onChange}
                    />
                    <C.RadioText>{name}</C.RadioText>
                </label>
            ))}
        </C.Container>
    );
};

export default CategoryButton;
