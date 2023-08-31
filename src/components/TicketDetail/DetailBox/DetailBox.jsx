import DetailText from '../DetailText/DetailText';
import * as D from './DetailBox.styles';

const DetailBox = ({ ticketData, onUpdate, onDelete }) => {
    const { title, categoryName, rating, place, price, showDateString, review } = ticketData;

    const getBlank = (item) => {
        if (item === '') {
            return '-';
        } else return item;
    };

    return (
        <D.TicketDetailBox>
            <D.DetailContainer>
                <D.TitleWrap>
                    <h3>{title}</h3>
                </D.TitleWrap>
                <D.UnderLine />
                <D.DetailWrap>
                    <DetailText label="카테고리" content={categoryName} />
                    <DetailText label="별점" rating={rating} />
                    <DetailText label="장소" content={getBlank(place)} />
                    <DetailText label="금액" content={price === 0 ? '-' : `${price.toLocaleString()}원`} />
                    <DetailText label="일시" content={showDateString} />
                    <DetailText label="리뷰" review={true} content={getBlank(review)} />
                </D.DetailWrap>
                <D.EditWrap>
                    <span onClick={onUpdate}>수정하기</span>
                    <span>|</span>
                    <span onClick={onDelete}>삭제하기</span>
                </D.EditWrap>
            </D.DetailContainer>
        </D.TicketDetailBox>
    );
};
export default DetailBox;
