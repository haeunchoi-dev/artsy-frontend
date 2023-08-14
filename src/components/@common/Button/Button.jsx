import StyledButton from './Button.styles';

/**
 * 예) <Button size="medium" color={theme.colors.point1} full="full">버튼</Button>
 * size= "small" | "medium" | "large"
 * color= (theme.colors 값 적용)
 * full="full" (full 너비 필요한 경우)
 */
const Button = ({ children, color, size, onClick, ...props }) => {
    return (
        <StyledButton color={color} size={size} onClick={onClick} {...props}>
            {children}
        </StyledButton>
    );
};
export default Button;
