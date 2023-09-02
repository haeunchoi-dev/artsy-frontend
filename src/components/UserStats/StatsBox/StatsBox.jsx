import * as S from './StatsBox.styles';

const StatsBox = ({ title, content, imgSrc, color }) => {
    return (
        <S.Container $color={color}>
            <S.TextWrap>
                <span>{title}</span>
                <span>{content}</span>
            </S.TextWrap>
            <S.ImageWrap>
                <img src={imgSrc} />
            </S.ImageWrap>
        </S.Container>
    );
};
export default StatsBox;
