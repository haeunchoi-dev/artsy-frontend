import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SlArrowRight } from 'react-icons/sl';

const Container = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: no-wrap;
    max-height: 200px;
    margin: 0 2rem;
    padding: 2rem 1rem;
    background-color: ${({ theme }) => theme.colors.background3};
    border-radius: ${({ theme }) => theme.borderRadius.large};
    box-shadow: 0px 1px 20px 20px rgba(0, 0, 0, 0.02);
    ${({ theme }) => theme.media.tablet} {
        display: none;
    }
`;
const BookImage = styled.img`
    width: 16%;
    max-width: 100px;
    height: auto;
`;
const Content = styled.p`
    flex: 1 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 0.8rem;
    font-size: 1.4rem;
`;

const RightArrow = styled(SlArrowRight)`
    font-size: 1.4rem;
`;
export { Container, BookImage, Content, RightArrow };
