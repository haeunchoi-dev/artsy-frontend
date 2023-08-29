import * as P from './PercentBox.styles';

const PercentBox = ({ percentage, username }) => {
    return (
        <P.PercentWrap>
            <P.Title>
                <b>{username}</b>님의 티켓기록은!
            </P.Title>
            <P.PercentBar $percentage={percentage}>
                <P.Bar>
                    <span>상위 {Math.round(percentage)}% </span>
                </P.Bar>
            </P.PercentBar>
        </P.PercentWrap>
    );
};
export default PercentBox;
