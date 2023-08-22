import React from 'react';
import * as G from './Greeting.styles';
import { useTheme } from 'styled-components';
const Greeting = ({ name }) => {
    const theme = useTheme();
    return (
        <G.Greeting $theme={theme}>
            <h2>
                안녕하세요,
                <br />
                {name}님
            </h2>
            <p>오늘의 추억이 있으신가요?</p>
        </G.Greeting>
    );
};

export default Greeting;
