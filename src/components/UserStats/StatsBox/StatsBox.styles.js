import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    border-radius: ${({ theme }) => theme.borderRadius.large};
    box-shadow: 1px 1px 10px 10px rgba(0, 0, 0, 0.02);

    padding: 2.5rem 2rem;
    margin-bottom: 1rem;

    background-color: ${({ $color, theme }) => $color ?? theme.colors.background3};

    ${({ theme }) => theme.media.labtop} {
        width: 90%;
    }
`;

const TextWrap = styled.div`
    display: flex;
    flex-direction: column;

    span:first-of-type {
        font-size: ${({ theme }) => theme.fontSizes.text};
        margin-bottom: 1rem;
        color: #909090;
    }
    span:last-of-type {
        font-size: ${({ theme }) => theme.fontSizes.body};
        font-weight: 500;
    }
`;

const ImageWrap = styled.div`
    width: 4rem;
    height: 4rem;

    img {
        width: 100%;
        height: 100%;
    }
`;

export { Container, TextWrap, ImageWrap };
