import styled from 'styled-components';

const ImgWrap = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 7rem;
    height: 7rem;
    margin: 2rem 0;

    border: 1px solid #c5c5c5;
    border-radius: 10px;
    background-color: white;

    cursor: pointer;

    img {
        width: 3.5rem;
        height: 3.5rem;
    }
`;

export { ImgWrap };
