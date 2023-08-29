import styled from 'styled-components';

const StyledNoTicket = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4rem;
    margin: 4rem 0;
    border-radius: 8px;
    box-sizing: border-box;
    background-color: #eee;
    font-size: ${({ theme }) => theme.fontSizes.body};

    ${({ theme }) => theme.media.tablet} {
        max-width: 80%;
        margin: 4rem auto 0;
    }

    ${({ theme }) => theme.media.labtop} {
        margin: 8rem auto 0;
        min-height: 20rem;
    }
`;

export default StyledNoTicket;
