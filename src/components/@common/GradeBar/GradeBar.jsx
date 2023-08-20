import { StyledBarWrap, StyledBar, StyledLegend } from './GradeBar.styles';
import { BADGE_GRADE } from '@constants/badgeGrade';

const calculateGrade = (ticketCount) => {
    const selectedGrade = BADGE_GRADE.find(({ targetValue }) => ticketCount < targetValue);
    return selectedGrade;
};

/* // 지영님 코드 병합시 impor 구문으로 변경 */

/**
 *
 * @param {Number} total
 * @param {Number} height rem 단위로 계산한 숫자(default: 100%)
 * @param {Number} height rem 단위로 계산한 숫자(default: 1rem)
 * @returns
 */
const GradeBar = ({ total, width, height }) => {
    const { targetValue, imageName } = calculateGrade(total);
    let percent = 0;
    if (total !== 0) {
        percent = total >= BADGE_GRADE[2].targetValue ? 100 : Math.floor((total / targetValue) * 100);
    }

    return (
        <StyledBarWrap $width={width}>
            <StyledLegend $grade={imageName}>
                <span>{total}</span>
                <span> / {targetValue}</span>
            </StyledLegend>
            <StyledBar $grade={imageName} $percent={percent ?? 0} $height={height} />
        </StyledBarWrap>
    );
};
export default GradeBar;
