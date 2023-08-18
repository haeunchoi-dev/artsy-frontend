import styled from 'styled-components';

const Greeting = styled.div`
    margin-bottom: 16px;
    h2 {
        font-size: 2.4rem;
        font-weight: 500;
        line-height: 3rem;
        margin-bottom: 8px;
    }
    p {
        display: none;
        font-size: 1.4rem;
    }

    ${({ $theme }) => $theme.media.tablet} {
        flex: 1 auto;
        h2 {
            font-size: 2.8rem;
            font-weight: bold;
            line-height: 3rem;
        }
        p {
            display: block;
        }
    }
`;

export { Greeting };
