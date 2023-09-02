import styled from 'styled-components';

const StyledMaxWidth = styled.div`
    max-width: ${({ theme }) => theme.devicesSize.labtop};
    margin: 0 auto;
    padding: 0 2rem;
    box-sizing: border-box;
`;

export default StyledMaxWidth;
