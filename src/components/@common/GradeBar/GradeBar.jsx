import { StyledBarWrap, StyledBar, StyledLegend } from './GradeBar.styles';
import { BADGE_GRADE } from '@constants/badgeGrade';
import { calculateGrade } from '@utils/calculateGrade';

import { useTheme } from 'styled-components';

/**
 *
 * @param {Number} total
 * @param {Number} width rem 단위로 계산한 숫자만(default: 100%)
 * @param {Number} height rem 단위로 계산한 숫자만(default: 1rem)
 * @param {String} fontColor (ex: '#fff')
 * @param {String} fontSize (ex: '1.4rem')
 *
 * @returns
 */
const GradeBar = ({ total, width, height, fontColor, fontSize }) => {
    const theme = useTheme();
    const { targetValue, imageName } = calculateGrade(total);
    let percent = 0;
    if (total !== 0) {
        percent = total >= BADGE_GRADE[2].targetValue ? 100 : Math.floor((total / targetValue) * 100);
    }

    return (
        <StyledBarWrap $width={width}>
            <StyledLegend
                $grade={imageName}
                $fontSize={fontSize ?? theme.fontSizes.subText}
                $fontColor={fontColor ?? theme.colors.black}
            >
                <span>{total}</span>
                <span>{isFinite(targetValue) ? ` / ${targetValue}` : ' / ∞'}</span>
            </StyledLegend>
            <StyledBar $grade={imageName} $percent={percent ?? 0} $height={height} />
        </StyledBarWrap>
    );
};
export default GradeBar;
