import * as D from './DetailText.styles';
import RatingStar from './RatingStar';

const DetailText = ({ label, content, rating }) => {
    return (
        <D.RowContainer>
            <D.TitleText>{label}</D.TitleText>
            {content && <D.DetailText>{content}</D.DetailText>}
            {rating && <RatingStar rating={rating} />}
        </D.RowContainer>
    );
};
export default DetailText;
