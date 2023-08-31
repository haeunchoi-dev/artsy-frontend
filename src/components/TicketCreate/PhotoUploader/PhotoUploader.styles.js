import styled from 'styled-components';

const ImgWrap = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 20rem;
    margin: 2rem 0;

    border: 1px solid ${({ theme }) => theme.colors.border2};
    border-radius: ${({ theme }) => theme.borderRadius.large};
    background-color: ${({ theme }) => theme.colors.background3};

    cursor: pointer;

    img {
        width: 5.5rem;
        height: 5.5rem;
    }
`;

export { ImgWrap };
