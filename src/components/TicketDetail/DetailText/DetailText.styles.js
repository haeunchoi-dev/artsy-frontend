import styled, { css } from 'styled-components';

const RowContainer = styled.div`
    width: 100%;
    padding: 1.8rem 0;
    display: flex;
    flex-direction: column;

    ${({ theme }) => theme.media.labtop} {
        flex-direction: row;
        align-items: center;

        ${({ $review }) =>
            $review &&
            css`
                display: none;
            `}
    }
`;

const TitleText = styled.span`
    font-size: ${({ theme }) => theme.fontSizes.body};
    font-weight: 500;

    ${({ theme }) => theme.media.labtop} {
        text-align: left;
        width: 10rem;
    }
`;

const DetailText = styled.span`
    font-size: ${({ theme }) => theme.fontSizes.text};
    margin: 10px 0;
    line-height: 2.5rem;

    ${({ $review }) =>
        $review &&
        css`
            white-space: pre-wrap;
        `}

    ${({ theme }) => theme.media.labtop} {
        white-space: nowrap; // 다음 줄로 넘어가지 않도록

        margin: 0;
        width: 20rem;
        text-align: left;
    }
`;

export { RowContainer, TitleText, DetailText };
