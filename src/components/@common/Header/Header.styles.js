import styled from 'styled-components';

const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 5.5rem;

    z-index: ${({ theme }) => theme.layer.layer5};
    background-color: ${({ color }) => color};

    ${({ theme }) => theme.media.labtop} {
        height: 7rem;
        background-color: ${({ theme }) => theme.colors.background1};
    }
`;

const StyledHeaderInner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    box-sizing: border-box;
    max-width: ${({ theme }) => theme.devicesSize.labtop};
    height: 100%;
    padding: 0 2rem;

    h1 {
        font-size: ${({ theme }) => theme.fontSizes.h5};
        width: 100%;
    }
`;

export { StyledHeader, StyledHeaderInner };
