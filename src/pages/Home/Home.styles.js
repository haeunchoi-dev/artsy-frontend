import styled from 'styled-components';
const Home = styled.div`
    width: 100%;
    ${({ theme }) => theme.media.tablet} {
        max-width: 1280px;
        margin: 0 auto;
    }
`;

const TopContainer = styled.div`
    padding: 20px;
    margin-bottom: 16px;
    display: flex;
    flex-direction: column;
    ${({ theme }) => theme.media.tablet} {
        flex-direction: row;
        padding: 0 20px;
        margin-bottom: 24px;
    }
`;

export { Home, TopContainer };
