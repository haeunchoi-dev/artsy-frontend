import styled from 'styled-components';
import { SlArrowRight } from 'react-icons/sl';

const CategoryLink = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    box-sizing: border-box;
    width: 35vw;
    height: 35vw;
    padding: 1.6rem;
    border-radius: 10px;
    box-shadow: 0px 1px 20px 20px rgba(0, 0, 0, 0.02);
    background-color: ${({ theme }) => theme.colors.background3};
    cursor: pointer;
    ${({ theme }) => theme.media.tablet} {
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
    ${({ theme }) => theme.media.tablet} {
        width: 40px;
    }
    ${({ theme }) => theme.media.labtop} {
        width: 50px;
    }
`;
const CategoryTitle = styled.h3`
    font-size: 1.6rem;
    height: 50%;
    ${({ theme }) => theme.media.tablet} {
        margin-bottom: 6rem;
    }
    ${({ theme }) => theme.media.labtop} {
        font-size: 1.8rem;
        margin-bottom: 10rem;
    }
`;

const MakeTicketLink = styled.div`
    align-self: flex-end;
    display: flex;
    align-items: flex-end;
    font-size: 1.2rem;
    ${({ theme }) => theme.media.labtop} {
        font-size: 1.4rem;
    }
`;
const RightArrow = styled(SlArrowRight)`
    margin-left: 0.4rem;
`;
export { CategoryLink, CategoryImage, CategoryTitle, MakeTicketLink, RightArrow };
