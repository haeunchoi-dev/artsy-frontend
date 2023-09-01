import styled from 'styled-components';

const StatsContainer = styled.div`
    min-height: 600px;
    ${({ theme }) => theme.media.labtop} {
        width: 100%;
        min-height: 680px;
    }
`;

const StatsWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
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
`;

export { StatsContainer, StatsWrap, StatsChartWrap, StatsBoxWrap };
