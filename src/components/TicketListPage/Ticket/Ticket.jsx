import * as T from './Ticket.styles';
import starIconUrl from '@assets/icons/icon-star.png';
import ticketUrl from '@assets/images/ticket.png';

const Ticket = ({ title, showDate, rating, categoryColor, imUrl, to }) => {
    return (
        <T.Wrap $categoryColor={categoryColor} to={to}>
            <T.ImageBox>
                {imUrl ? <img src={imUrl} alt={title} /> : <img src={ticketUrl} alt="기본이미지" />}
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
                    <p>
                        {rating} <span>/ 5</span>
                    </p>
                </T.Rating>
            </T.InfoBox>
        </T.Wrap>
    );
};
export default Ticket;
