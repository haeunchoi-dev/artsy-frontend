import React from 'react';
import { useTheme } from 'styled-components';
import * as I from './IntroBox.styles';
const IntroBox = () => {
    return (
        <I.Introduction>
            <I.IntroContent>
                <h2>Artsy</h2>
                <p>나만의 티켓북을 만들고 관리하는 서비스를 경험해보세요!</p>
            </I.IntroContent>
        </I.Introduction>
    );
};

export default IntroBox;
