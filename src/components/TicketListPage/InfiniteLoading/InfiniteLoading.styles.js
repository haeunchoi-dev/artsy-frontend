import styled from 'styled-components';

const StyledInfiniteLoading = styled.div`
    text-align: center;
    padding: 2rem 0;
    span {
        display: inline-block;
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        border-top: 3px solid ${({ theme }) => theme.colors.point1};
        border-right: 3px solid transparent;
        box-sizing: border-box;
        animation: loader 1s linear infinite;
    }

    @keyframes loader {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

export default StyledInfiniteLoading;
