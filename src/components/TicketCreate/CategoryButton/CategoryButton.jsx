import React from 'react';
import * as C from './CategoryButton.styles';

const CategoryButton = ({ datas, checkedvalue, onChange }) => {
    return (
        <C.Container>
            {datas?.map((data) => (
                <label key={data.id} style={{ marginRight: '1%' }} htmlFor={data.name}>
                    <C.RadioButton
                        id={data.name}
                        color={data.color}
                        type="radio"
                        value={data.id}
                        checked={parseInt(checkedvalue) === data.id}
                        onChange={onChange}
                    />
                    <C.RadioText>{data.name}</C.RadioText>
                </label>
            ))}
        </C.Container>
    );
};

export default CategoryButton;
