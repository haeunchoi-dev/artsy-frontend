import styled from 'styled-components';

const StyledPageTitle = styled.div`
    margin-bottom: 6rem;

    h3 {
        font-size: ${({ theme }) => theme.fontSizes.h5};
    }
`;

export default StyledPageTitle;
