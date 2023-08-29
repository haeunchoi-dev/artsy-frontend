import React from 'react';
import StyledTimer from './Timer.styles';
import { useState, useEffect } from 'react';

import formatTime from '@utils/formatTime';

const Timer = ({ start, isRunning }) => {
    const [count, setCount] = useState(start);

    useEffect(() => {
        let timerId;
        if (isRunning) {
            timerId = setInterval(() => {
                setCount((prev) => prev - 1);
            }, 1000);
        } else {
            clearInterval(timerId);
        }

        return () => clearInterval(timerId);
    }, [isRunning]);
    return <StyledTimer>{formatTime(count)}</StyledTimer>;
};

export default Timer;
