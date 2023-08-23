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
        color: #505050;
    }

    ${({ $theme }) => $theme.media.tablet} {
        flex: 1 auto;
        h2 {
            font-size: 2.6rem;
            font-weight: bold;
            line-height: 3.2rem;
        }
        p {
            display: block;
        }
    }
    ${({ $theme }) => $theme.media.labtop} {
        h2 {
            font-size: 3.4rem;
            line-height: 4rem;
        }
        p {
            font-size: 1.6rem;
        }
    }
`;

export { Greeting };
