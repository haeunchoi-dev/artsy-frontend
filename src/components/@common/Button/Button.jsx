import { useTheme } from 'styled-components';
import StyledButton from './Button.styles';

/**
 * size= "small" | "medium" | "large" (default: 'small')
 * color= theme.colors 값 적용 (default: thems.colors.point1)
 * full="full" (full 너비 필요한 경우)
 * style="line" (라인 필요한 경우)
 */
const Button = ({ children, color, size, onClick, full, style, ...props }) => {
    const theme = useTheme();

    return (
        <StyledButton
            $color={color ?? theme.colors.point1}
            $size={size ?? 'small'}
            onClick={onClick}
            $full={full ?? ''}
            $style={style === 'line'}
            {...props}
        >
            {children}
        </StyledButton>
    );
};
export default Button;
