import * as S from './SplitLayout.styles';

const SplitLayout = ({ children, leftCss, rightCss }) => {
    return (
        <S.Background>
            <S.Left $css={leftCss} />
            {children}
            <S.Right $css={rightCss} />
        </S.Background>
    );
};
export default SplitLayout;
