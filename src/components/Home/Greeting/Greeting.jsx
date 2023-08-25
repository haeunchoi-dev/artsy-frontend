import React from 'react';
import * as G from './Greeting.styles';
import { useNavigate } from 'react-router';
const Greeting = ({ name }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/ticket/list');
    };
    return (
        <G.Greeting>
            <h2>
                안녕하세요,
                <br />
                {name}님
            </h2>
            <p>오늘의 추억이 있으신가요?</p>
            <G.ExtendedButton size={'medium'} onClick={handleClick}>
                내 기록 보러가기
            </G.ExtendedButton>
        </G.Greeting>
    );
};

export default Greeting;
