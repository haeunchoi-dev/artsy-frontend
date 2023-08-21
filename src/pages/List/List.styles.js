import styled, { css } from 'styled-components';

const TitleWrap = styled.div`
    display: flex;

    h4 {
        font-size: ${({ theme }) => theme.fontSizes.h5};
    }
`;

const FilterWrap = styled.div`
    z-index: 1000;
    position: sticky;
    top: 50px;
    padding: 1rem 0;
    background-color: #fff;
`;

const Filter = styled.select`
    /* 초기화 */
    outline: none;
    border: none;
    background-color: transparent;

    /* 스타일 */
    padding: 0.4rem 1rem;
    font-size: ${({ theme }) => theme.fontSizes.text};
    border-bottom: 1px solid ${({ theme }) => theme.colors.black};
`;

const FilterInner = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: ${({ theme }) => theme.devicesSize.labtop};
    margin: 0 auto;
    padding: 0 2rem;
    box-sizing: border-box;
`;

const TicketList = styled.div`
    display: grid;
    grid-row-gap: 1.6rem;
    ${({ theme }) => theme.media.tablet} {
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 1.6rem;
    }
    ${({ theme }) => theme.media.labtop} {
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 2rem;
        grid-row-gap: 2rem;
    }
`;

const NoTicket = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4rem;
    margin: 4rem 0;
    border-radius: 8px;
    box-sizing: border-box;
    background-color: #eee;
    font-size: ${({ theme }) => theme.fontSizes.body};

    ${({ theme }) => theme.media.tablet} {
        max-width: 80%;
        margin: 4rem auto 0;
    }

    ${({ theme }) => theme.media.labtop} {
        margin: 8rem auto 0;
        min-height: 20rem;
    }
`;

const LoadingText = styled.div`
    text-align: center;
    padding: 2rem 0;
    span {
        display: inline-block;
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        border-top: 3px solid ${({ theme }) => theme.colors.point1};
        border-right: 3px solid transparent;
        box-sizing: border-box;
        animation: loader 1s linear infinite;
    }

    @keyframes loader {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

export { TitleWrap, FilterWrap, TicketList, NoTicket, FilterInner, Filter, LoadingText };
