import styled from 'styled-components';

const ImgWrap = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 30rem;
    height: 20rem;
    margin: 2rem 0;

    border: 1px solid #c5c5c5;
    border-radius: ${({ theme }) => theme.borderRadius.large};
    background-color: white;

    cursor: pointer;

    img {
        width: 5.5rem;
        height: 5.5rem;
    }
`;

export { ImgWrap };
