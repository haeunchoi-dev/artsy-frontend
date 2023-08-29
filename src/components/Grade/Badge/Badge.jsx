import React from 'react';
import { getIconUrl } from '@utils/getImageUrl';
import * as B from './Badge.styles';
import { useTheme } from 'styled-components';
import { calculateNextGrade } from '@utils/calculateGrade';

const Badge = ({ grade, prevGrade }) => {
    const theme = useTheme();
    const { imageName, name, targetValue } = grade;
    const prevTargetValue = prevGrade?.targetValue || 0;
    const { isNext: isMasterGrade } = calculateNextGrade(name);
    const badgeColor = theme.gradeColor[imageName];
    return (
        <B.Container>
            <B.ImageWrap>
                <img src={getIconUrl(`Badge_${imageName}`)} alt={name} />
            </B.ImageWrap>
            <B.Content $color={badgeColor}>
                <p>{name}</p>
                {isMasterGrade ? (
                    <p>{prevTargetValue}개 이상</p>
                ) : (
                    <p>
                        {prevTargetValue !== 0 && `${prevTargetValue}이상 ~ `}
                        {targetValue}미만
                    </p>
                )}
            </B.Content>
        </B.Container>
    );
};

export default Badge;
