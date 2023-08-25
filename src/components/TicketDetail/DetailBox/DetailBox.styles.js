import styled from 'styled-components';

const TicketDetailBox = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    overflow: auto;
    margin-top: -8rem;

    width: 90%;
    top: 38rem;

    border-radius: 12px;
    box-shadow: 0px 1px 20px 20px rgba(0, 0, 0, 0.02);

    background-color: #fff;
    z-index: 0;

    ${({ theme }) => theme.media.labtop} {
        width: 220rem;
        height: 50rem;
        margin: 0 0 0 4rem;
        z-index: 0;
    }
`;

const DetailContainer = styled.div`
    width: 90%;
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const UnderLine = styled.div`
    width: 70%;
    border-bottom: 0.5px solid #c4c4c4;
    margin: 2.5rem 0 1.5rem 0;

    ${({ theme }) => theme.media.labtop} {
        width: inherit;
    }
`;

const TitleWrap = styled.div`
    h3 {
        font-size: ${({ theme }) => theme.fontSizes.h6};
        font-weight: 600;
        margin-top: 10rem;
    }

    ${({ theme }) => theme.media.labtop} {
        display: flex;
        width: inherit;
        margin-top: -7rem;
    }
`;

const DetailWrap = styled.div`
    width: inherit;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;

const EditWrap = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    width: 100%;
    margin: 1rem 0;

    span {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        font-size: ${({ theme }) => theme.fontSizes.subText};
        color: #777;
        height: fit-content;
        padding: 15px 0;

        &:nth-child(2n + 1) {
            cursor: pointer;
            padding: 15px 10px;
        }

        &:not(:last-child) {
            margin-right: 4px;
        }
    }
`;

export { TicketDetailBox, DetailContainer, DetailWrap, TitleWrap, UnderLine, EditWrap };
