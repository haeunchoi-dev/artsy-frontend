import * as D from './DetailText.styles';

const DetailText = ({ label, content }) => {
    return (
        <D.RowContainer>
            <D.Label>{label}</D.Label>
            <D.Content>{content}</D.Content>
        </D.RowContainer>
    );
};
export default DetailText;
