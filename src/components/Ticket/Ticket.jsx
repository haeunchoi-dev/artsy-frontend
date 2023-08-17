import * as T from './Ticket.styles';
import starIconUrl from '@assets/icons/icon-star.png';
import ticketUrl from '@assets/images/ticket.png';

const Ticket = ({ title, showDate, rating, categoryColor, image }) => {
    return (
        <T.Wrap $categoryColor={categoryColor}>
            <T.ImageBox>
                {image.length !== 0 ? (
                    <img src={image[0].imageUrl} alt={title} />
                ) : (
                    <img src={ticketUrl} alt="기본이미지" />
                )}
            </T.ImageBox>
            <T.DivideLine>
                <span></span>
                <span></span>
            </T.DivideLine>
            <T.InfoBox>
                <T.Title>{title}</T.Title>
                <T.Date>{showDate}</T.Date>
                <T.Rating>
                    <img src={starIconUrl} />
                    <span>{rating}</span>
                </T.Rating>
            </T.InfoBox>
        </T.Wrap>
    );
};
export default Ticket;
