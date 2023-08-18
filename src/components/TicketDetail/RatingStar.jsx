import * as R from './RatingStar.styles';
import starIconUrl from '@assets/icons/icon-star.png';

const RatingStar = ({ rating }) => {
    return (
        <R.IconWrap>
            {Array.from({ length: rating }, (_, index) => (
                <R.StarImg src={starIconUrl} key={index} $full={false} />
            ))}
            {Array.from({ length: 5 - rating }, (_, index) => (
                <R.StarImg src={starIconUrl} key={index} $full={true} />
            ))}
        </R.IconWrap>
    );
};
export default RatingStar;
