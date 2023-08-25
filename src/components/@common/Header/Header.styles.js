import styled from 'styled-components';

const StyledHeader = styled.header`
    z-index: 1000;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 5.5rem;

    z-index: ${({ theme }) => theme.layer.layer5};
    background-color: ${({ color }) => color};

    ${({ theme }) => theme.media.labtop} {
        height: 7rem;
        background-color: #fff;
    }
`;

const StyledHeaderInner = styled.div`
    margin: 0 auto;
    box-sizing: border-box;

    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
        font-size: 3rem;
        width: 100%;
        margin: 1rem 2rem;
    }
`;

export { StyledHeader, StyledHeaderInner };
