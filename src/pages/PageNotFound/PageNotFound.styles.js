import styled from 'styled-components';

const StyledPageNotFound = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 15rem;

    h2 {
        margin: 1rem 0 4rem;
        font-size: ${({ theme }) => theme.fontSizes.h5};
    }
`;

const StyledIcon = styled.span`
    display: inline-block;
    width: 10rem;
    height: 10rem;

    img {
        width: 100%;
    }
`;

export { StyledPageNotFound, StyledIcon };
