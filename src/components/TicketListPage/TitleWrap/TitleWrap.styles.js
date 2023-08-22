import styled from 'styled-components';

const StyledTitleWrap = styled.div`
    display: flex;

    h4 {
        font-size: ${({ theme }) => theme.fontSizes.h5};
    }
`;
export default StyledTitleWrap;
