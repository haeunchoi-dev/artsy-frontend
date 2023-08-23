import React, { useRef } from 'react';
import * as S from './RatingSliderBar.styles';

const RatingSliderBar = ({ value, onChange }) => {
    return (
        <S.SliderWrap>
            <div>
                <h5>{`${value} `}</h5>
                <h4> /5점</h4>
            </div>
            <input type="range" id="slider" name="slider" min="0" max="5" value={value} onChange={onChange} step="1" />
        </S.SliderWrap>
    );
};

export default RatingSliderBar;
