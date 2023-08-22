import styled from 'styled-components';

const StyledToastContainer = styled.div`
    z-index: ${({ theme }) => theme.layer.layer7};
    position: fixed;
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
`;

export default StyledToastContainer;
