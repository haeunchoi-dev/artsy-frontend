import styled from 'styled-components';

const StyledLoading = styled.div`
    z-index: ${({ theme }) => theme.layer.layer8};
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.4);

    p {
        margin-bottom: 1.6rem;
        font-size: ${({ theme }) => theme.fontSizes.h6};
    }

    div {
        display: inline-block;
        position: relative;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        border: 10px solid;
        border-color: rgba(255, 255, 255, 0.15) rgba(255, 255, 255, 0.25) rgba(255, 255, 255, 0.35)
            rgba(255, 255, 255, 0.5);
        box-sizing: border-box;
        animation: loader 1.5s linear infinite;

        @keyframes loader {
            0% {
                border-color: rgba(255, 255, 255, 0.15) rgba(255, 255, 255, 0.25) rgba(255, 255, 255, 0.35)
                    rgba(255, 255, 255, 0.5);
            }
            25% {
                border-color: rgba(255, 255, 255, 0.5) rgba(255, 255, 255, 0.15) rgba(255, 255, 255, 0.25)
                    rgba(255, 255, 255, 0.35);
            }
            50% {
                border-color: rgba(255, 255, 255, 0.35) rgba(255, 255, 255, 0.5) rgba(255, 255, 255, 0.15)
                    rgba(255, 255, 255, 0.25);
            }
            75% {
                border-color: rgba(255, 255, 255, 0.25) rgba(255, 255, 255, 0.35) rgba(255, 255, 255, 0.5)
                    rgba(255, 255, 255, 0.15);
            }
            100% {
                border-color: rgba(255, 255, 255, 0.15) rgba(255, 255, 255, 0.25) rgba(255, 255, 255, 0.35)
                    rgba(255, 255, 255, 0.5);
            }
        }
    }
`;

export default StyledLoading;
