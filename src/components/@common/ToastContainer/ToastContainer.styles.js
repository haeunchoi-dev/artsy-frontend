import styled from 'styled-components';

const StyledToastContainer = styled.div`
    z-index: ${({ theme }) => theme.layer.layer7};
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
`;

export default StyledToastContainer;
