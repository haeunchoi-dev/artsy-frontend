import styled from 'styled-components';

const StyledFooter = styled.footer`
    background-color: ${({ theme }) => theme.colors.background5};
`;

const StyledFooterInner = styled.div`
    max-width: ${({ theme }) => theme.devicesSize.labtop};
    margin: 0 auto;
    padding: 4rem 2rem;
    box-sizing: border-box;
`;

const StyledProjectInfo = styled.ul`
    font-size: ${({ theme }) => theme.fontSizes.text};
    color: ${({ theme }) => theme.colors.font5};

    > li {
        display: flex;
        gap: 3rem;

        b {
            width: 12rem;
        }

        + li {
            margin-top: 0.4rem;
        }
    }
`;

export { StyledFooter, StyledFooterInner, StyledProjectInfo };
