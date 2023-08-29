import * as D from './DetailText.styles';
import RatingStar from '../RatingStar/RatingStar';

const DetailText = ({ label, content, rating, review }) => {
    return (
        <D.RowContainer $review={review}>
            <D.TitleText>{label}</D.TitleText>
            {content && <D.DetailText>{content}</D.DetailText>}
            {rating && <RatingStar rating={rating} />}
        </D.RowContainer>
    );
};
export default DetailText;
