import styled from 'styled-components';

const StyledTimer = styled.span`
    margin-bottom: 6rem;

    h3 {
        font-size: ${({ theme }) => theme.fontSizes.h5};
    }
`;

export default StyledTimer;
