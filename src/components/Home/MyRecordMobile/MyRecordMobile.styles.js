import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: no-wrap;
    max-height: 200px;
    margin: 0 2rem;
    padding: 2rem 1rem;
    background-color: #fff;
    border-radius: ${({ theme }) => theme.borderRadius.large};
    box-shadow: 0px 1px 20px 20px rgba(0, 0, 0, 0.02);
`;
const BookImage = styled.img`
    width: 18%;
    height: auto;
`;
const Content = styled.p`
    flex: 1 auto;
    display: flex;
    justify-content: space-between;
    margin-left: 0.8rem;
    font-size: 1.4rem;
`;
const Arrow = styled.img`
    width: 18px;
`;
export { Container, BookImage, Content, Arrow };
