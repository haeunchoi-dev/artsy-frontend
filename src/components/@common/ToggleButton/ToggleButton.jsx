import React from 'react';
import * as T from './ToggleButton.styles';
const ToggleButton = ({ isActive, onClick }) => {
    return (
        <T.ToggleButton $active={isActive} onClick={onClick}>
            <T.ButtonBar></T.ButtonBar>
            <T.ButtonBar></T.ButtonBar>
            <T.ButtonBar></T.ButtonBar>
        </T.ToggleButton>
    );
};

export default ToggleButton;
