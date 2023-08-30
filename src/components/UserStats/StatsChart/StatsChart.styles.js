import styled from 'styled-components';

const Container = styled.div`
    ${({ theme }) => theme.media.labtop} {
        width: 45rem;
        height: 45rem;
    }
`;

const TextWrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;

    h5 {
        margin: 0 4rem;
        font-size: ${({ theme }) => theme.fontSizes.body};
    }
`;

const ImageWrap = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    cursor: pointer;

    img {
        width: 100%;
        height: 100%;
    }
`;

export { Container, TextWrap, ImageWrap };
