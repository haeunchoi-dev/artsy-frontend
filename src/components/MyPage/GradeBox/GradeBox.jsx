import { useMemo } from 'react';

import * as G from './GradeBox.styles';

import GradeBar from '@components/@common/GradeBar/GradeBar.jsx';

import { getIconUrl } from '@utils/getImageUrl';

const GradeBox = ({ userInfo, gradeInfo, gradeNextInfo }) => {
    return (
        <G.StyledGradeBox>
            <G.StyledGradeInfo to="">
                <span>
                    <img src={getIconUrl(`Badge_${gradeInfo?.imageName}`)} alt={gradeInfo?.name} />
                </span>
                <h4>{gradeInfo?.name}</h4>
                {gradeNextInfo?.isNext === false ? (
                    <p>
                        {gradeNextInfo?.nextGrade?.name}까지 {gradeInfo?.targetValue - userInfo?.totalTicket}
                        개의 티켓이 필요해요!
                    </p>
                ) : (
                    <p>{userInfo?.displayName}님은 문화를 사랑하는 아티 마스터!</p>
                )}
            </G.StyledGradeInfo>
            <GradeBar total={userInfo?.totalTicket} height={0.8} />
        </G.StyledGradeBox>
    );
};
export default GradeBox;
