import styled, { css } from 'styled-components';

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
        height: 50rem;

        top: 24rem;
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
    margin-top: 5rem;

    ${({ theme }) => theme.media.labtop} {
        flex-direction: row;
        justify-content: center;
        height: 50rem;
    }
`;

const TicketImageWrap = styled.div`
    max-width: 100%;
    width: 200px;
    height: 290px;
    z-index: ${({ theme }) => theme.layer.layer1};

    img {
        width: 100%;
        height: 100%;
        border-radius: 12px;
        box-shadow: rgba(0, 0, 0, 0.02) 1px 1px 10px 10px;
    }

    ${({ theme }) => theme.media.labtop} {
        width: 100%;
        height: inherit;
    }
`;

export { Container, MainWrap, TicketImageWrap, TypeColorBox, TicketDetailWrap };
