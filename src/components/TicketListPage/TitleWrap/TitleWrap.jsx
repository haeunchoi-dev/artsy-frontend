import StyledTitleWrap from './TitleWrap.styles';

const TitleWrap = ({ totalCount }) => {
    return (
        <StyledTitleWrap>
            <h4>총 {totalCount ?? 0} 개</h4>
        </StyledTitleWrap>
    );
};
export default TitleWrap;
