import styled from 'styled-components';

const RowContainer = styled.div`
    width: 100%;
    padding: 1.8rem 0;
    display: flex;
    flex-direction: column;

    ${({ theme }) => theme.media.labtop} {
        flex-direction: row;
    }
`;

const TitleText = styled.span`
    font-size: 1.5rem;
    font-weight: 600;

    ${({ theme }) => theme.media.labtop} {
        text-align: left;
        width: 10rem;
    }
`;

const DetailText = styled.span`
    font-size: 1.25rem;
    margin: 10px 0;
    word-wrap: break-word;

    ${({ theme }) => theme.media.labtop} {
        margin: 0;
        width: 20rem;
        text-align: left;
    }
`;

export { RowContainer, TitleText, DetailText };
