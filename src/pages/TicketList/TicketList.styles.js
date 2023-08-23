import styled from 'styled-components';

const FilterWrap = styled.div`
    z-index: ${({ theme }) => theme.layer.layer3};
    position: sticky;
    top: 50px;
    padding: 1rem 0;
    background-color: #fff;
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
    margin-top: 2rem;

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

export { FilterWrap, FilterInner, TicketList };
