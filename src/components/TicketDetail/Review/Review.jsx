import * as R from './Review.styles';

const Review = ({ content }) => {
    return (
        <R.Container>
            <R.TitleText>리뷰</R.TitleText>
            <R.DetailText>{content === '' ? '리뷰를 작성해주세요.' : content}</R.DetailText>
        </R.Container>
    );
};
export default Review;
