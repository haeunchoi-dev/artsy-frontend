import styled from 'styled-components';

const StyledMain = styled.main`
    flex: 1 auto;
    padding: 8rem 0;

    ${({ theme }) => theme.media.labtop} {
        padding: 12rem 0 8rem;
    }
`;

export default StyledMain;
