import styled, { useTheme } from 'styled-components';
const CategoryLink = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    box-sizing: border-box;
    width: 35vw;
    height: 35vw;
    padding: 1.8rem;
    border-radius: 10px;
    box-shadow: 0px 1px 20px 20px rgba(0, 0, 0, 0.02);
    ${({ $theme }) => $theme.media.tablet} {
        width: auto;
        height: auto;
        padding: 2rem;
        border-radius: 20px;
    }
`;
const CategoryImage = styled.img`
    width: 25%;
    height: auto;
    margin-bottom: 0.8rem;
`;
const CategoryTitle = styled.h3`
    font-size: 1.4rem;
    margin-bottom: 40%;
    ${({ $theme }) => $theme.media.tablet} {
        margin-bottom: 50%;
    }
`;

const MakeTicketLink = styled.div`
    align-self: flex-end;
    font-size: 0.7rem;
`;
export { CategoryLink, CategoryImage, CategoryTitle, MakeTicketLink };
