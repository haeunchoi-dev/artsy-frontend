import styled from 'styled-components';

const Container = styled.div`
    padding-bottom: 4rem;

    ${({ theme }) => theme.media.labtop} {
        max-width: 1280px;
        margin: 0 auto;
        padding: 0 4rem;
        padding-bottom: 4rem;
        box-sizing: border-box;
    }
`;

const TypeColorBox = styled.div`
    width: 100%;
    height: 55rem;
    position: absolute;
    top: 0;
    z-index: -999;
    background-color: ${({ color }) => color};

    ${({ theme }) => theme.media.labtop} {
        width: 100%;
        color: ${({ theme }) => theme.colors.black};

        top: 27rem;
    }
`;

const MainWrap = styled.div`
    display: flex;
    justify-content: center;

    h2 {
        font-weight: 700;
        font-size: ${({ theme }) => theme.fontSizes.h4};
        margin: 2rem 0 4rem 0;
        color: white;
    }

    ${({ theme }) => theme.media.labtop} {
        justify-content: flex-start;

        h2 {
            color: ${({ theme }) => theme.colors.black};
            margin: 1rem 0 7rem 0;
        }
    }
`;

const TicketDetailWrap = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    ${({ theme }) => theme.media.labtop} {
        flex-direction: row;
        justify-content: center;
        margin-top: -3rem;
        height: 50rem;
    }
`;

const TicketImageWrap = styled.div`
    max-width: 100%;
    width: 200px;
    height: 290px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        border-radius: 12px;
    }

    ${({ theme }) => theme.media.labtop} {
        width: 100%;
        height: inherit;
    }
`;

const TicketDetailBox = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    overflow: auto;
    margin-top: -8rem;

    width: 90%;
    top: 38rem;

    border-radius: 12px;
    box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.25);

    background-color: white;
    z-index: -999;

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
    margin: 2.5rem 0 2rem 0;

    ${({ theme }) => theme.media.labtop} {
        width: inherit;
    }
`;

const TitleWrap = styled.div`
    h3 {
        font-size: 2rem;
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
        font-size: ${({ theme }) => theme.fontSizes.subText};
        color: #777;

        &:nth-child(2n + 1) {
            cursor: pointer;
        }

        &:not(:last-child) {
            margin-right: 4px;
        }
    }
`;

export {
    Container,
    MainWrap,
    TicketImageWrap,
    TypeColorBox,
    TicketDetailWrap,
    TicketDetailBox,
    DetailContainer,
    TitleWrap,
    UnderLine,
    EditWrap,
    DetailWrap,
};
