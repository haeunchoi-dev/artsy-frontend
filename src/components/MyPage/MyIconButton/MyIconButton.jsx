import StyledIconButton from './MyIconButton.styles';

const MyIconButton = ({ children, imgUrl, size, ...props }) => {
    return (
        <StyledIconButton $imgUrl={imgUrl} $size={size ?? '100%'} {...props}>
            <span>{children}</span>
        </StyledIconButton>
    );
};
export default MyIconButton;
