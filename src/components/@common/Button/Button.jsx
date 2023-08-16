import { useTheme } from 'styled-components';
import StyledButton from './Button.styles';

/**
 * 예) <Button size="medium" color={theme.colors.point1} full="full">버튼</Button>
 * size= "small" | "medium" | "large" (default: 'small')
 * color= theme.colors 값 적용 (default: thems.colors.point1)
 * full="full" (full 너비 필요한 경우)
 */
const Button = ({ children, color, size, onClick, ...props }) => {
    const theme = useTheme();

    return (
        <StyledButton $color={color ?? theme.colors.point1} $size={size ?? 'small'} onClick={onClick} {...props}>
            {children}
        </StyledButton>
    );
};
export default Button;
