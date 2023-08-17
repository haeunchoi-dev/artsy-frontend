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
    padding: 4px 10px;
    font-size: ${({ theme }) => theme.fontSizes.text};
    border-bottom: 1px solid ${({ theme }) => theme.colors.black};
`;

const FilterInner = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 20px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
`;

const TicketList = styled.div`
    display: grid;
    grid-row-gap: 16px;
    ${({ theme }) => theme.media.tablet} {
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 16px;
    }
    ${({ theme }) => theme.media.labtop} {
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 20px;
        grid-row-gap: 20px;
    }
`;

const NoTicket = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px;
    border-radius: 8px;
    box-sizing: border-box;
    background-color: #eee;
    font-size: ${({ theme }) => theme.fontSizes.body};

    ${({ theme }) => theme.media.labtop} {
        max-width: 600px;
        margin: 80px auto 0;
        min-height: 200px;
    }
`;

export { TitleWrap, FilterWrap, TicketList, NoTicket, FilterInner, Filter };
