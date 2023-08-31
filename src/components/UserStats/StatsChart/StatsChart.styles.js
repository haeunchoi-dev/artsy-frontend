import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    padding: 10px;
    cursor: pointer;
`;

export { Container, TextWrap, ImageWrap };
