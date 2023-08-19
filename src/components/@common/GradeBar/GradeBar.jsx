import { StyledBarWrap, StyledBar, StyledLegend } from './GradeBar.styles';

/* 지영님 코드 병합시 impor 구문으로 변경 */
const BADGE_GRADE = {
    first: { name: 'darkSilver', targetValue: 10 },
    second: { name: 'bronze', targetValue: 30 },
    third: { name: 'silver', targetValue: 50 },
    fourth: { name: 'gold', targetValue: 100 },
};

const calculateGrade = (ticketCount) => {
    if (ticketCount < BADGE_GRADE.first.targetValue) {
        return BADGE_GRADE.first;
    } else if (ticketCount < BADGE_GRADE.second.targetValue) {
        return BADGE_GRADE.second;
    } else if (ticketCount < BADGE_GRADE.third.targetValue) {
        return BADGE_GRADE.third;
    } else {
        return BADGE_GRADE.fourth;
    }
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
    const { name, targetValue } = calculateGrade(total);
    const percent = Math.floor((total / targetValue) * 100);

    return (
        <StyledBarWrap $width={width}>
            <StyledLegend $grade={name}>
                <span>{total}</span>
                <span> / {targetValue}</span>
            </StyledLegend>
            <StyledBar $grade={name} $percent={percent ?? 0} $height={height} />
        </StyledBarWrap>
    );
};
export default GradeBar;
