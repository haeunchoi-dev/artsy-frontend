import React from 'react';
import * as B from './Badge.styles';
import { useTheme } from 'styled-components';
import calculateGrade from '@utils/calculateGrade';
import { getIconUrl } from '@utils/getImageUrl';
const Badge = ({ totalTicket }) => {
    const theme = useTheme();
    const { name: userGrade, targetValue, imageName } = calculateGrade(totalTicket);
    const isMasterGrade = (grade) => {
        if (grade === '아티 마스터') return true;
        return false;
    };
    return (
        <B.Badge $theme={theme}>
            <B.ImageWrapper>
                <img src={getIconUrl(`Badge_${imageName}`)} alt={userGrade} />
            </B.ImageWrapper>
            {isMasterGrade(userGrade) ? (
                <B.Comment>
                    당신은
                    <br />
                    문화를 사랑하는 아티 마스터!
                </B.Comment>
            ) : (
                <B.Comment>
                    다음 뱃지까지 <br /> {targetValue - totalTicket}개의 기록이 남았습니다!
                </B.Comment>
            )}
            <B.ExtendGradeBar total={totalTicket} height={0.6} fontColor={'#fff'} fontSize={'1.6rem'} />
        </B.Badge>
    );
};

export default Badge;
