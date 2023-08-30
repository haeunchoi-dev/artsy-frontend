import styled from 'styled-components';

const StatsContainer = styled.div`
    ${({ theme }) => theme.media.labtop} {
        width: 100%;
    }
`;

const StatsWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    ${({ theme }) => theme.media.labtop} {
        display: flex;
        flex-direction: row;
        flex: 1;
    }
`;

const StatsChartWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
        margin-bottom: 1rem;
        font-size: ${({ theme }) => theme.fontSizes.body};
    }
`;

const StatsBoxWrap = styled.div`
    margin-top: 5rem;
    ${({ theme }) => theme.media.labtop} {
        display: flex;
        flex-direction: column;
        flex: 1;
        margin-left: 10rem;
        margin-top: 0;
    }
`;

export { StatsContainer, StatsWrap, StatsChartWrap, StatsBoxWrap };
