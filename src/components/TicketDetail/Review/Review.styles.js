import styled from 'styled-components';

const Container = styled.div`
    display: none;

    ${({ theme }) => theme.media.labtop} {
        display: block;
        padding: 2rem 4rem;

        border-radius: 12px;
        box-shadow: 0px 1px 20px 20px rgba(0, 0, 0, 0.02);

        background-color: #fff;

        margin-top: 13rem;
    }
`;

const TitleText = styled.h2`
    ${({ theme }) => theme.media.labtop} {
        font-size: ${({ theme }) => theme.fontSizes.body};
        font-weight: 500;
        text-align: left;
        margin: 2rem 0;
    }
`;

const DetailText = styled.span`
    ${({ theme }) => theme.media.labtop} {
        font-size: ${({ theme }) => theme.fontSizes.text};
        margin: 10px 0;
        line-height: 2.5rem;
        margin: 0;
        width: 20rem;
        text-align: left;
    }
`;

export { Container, TitleText, DetailText };
