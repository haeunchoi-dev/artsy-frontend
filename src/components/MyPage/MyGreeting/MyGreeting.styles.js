import styled, { css } from 'styled-components';

const StyledMyGreeting = styled.div`
    text-align: center;

    h2 {
        font-size: ${({ theme }) => theme.fontSizes.h5};
    }

    ${({ theme }) => theme.media.labtop} {
        text-align: left;
    }
`;

export default StyledMyGreeting;
