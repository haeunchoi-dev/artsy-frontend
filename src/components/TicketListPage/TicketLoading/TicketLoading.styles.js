import styled from 'styled-components';

const StyledLoading = styled.div`
    margin: 6rem 0;
    text-align: center;

    div {
        display: inline-block;
        position: relative;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        border: 10px solid;
        border-color: rgba(139, 151, 255, 0.15) rgba(139, 151, 255, 0.25) rgba(139, 151, 255, 0.35)
            rgba(139, 151, 255, 0.5);
        box-sizing: border-box;
        animation: loader 1.5s linear infinite;

        @keyframes loader {
            0% {
                border-color: rgba(139, 151, 255, 0.15) rgba(139, 151, 255, 0.25) rgba(139, 151, 255, 0.35)
                    rgba(139, 151, 255, 0.5);
            }
            25% {
                border-color: rgba(139, 151, 255, 0.5) rgba(139, 151, 255, 0.15) rgba(139, 151, 255, 0.25)
                    rgba(139, 151, 255, 0.35);
            }
            50% {
                border-color: rgba(139, 151, 255, 0.35) rgba(139, 151, 255, 0.5) rgba(139, 151, 255, 0.15)
                    rgba(139, 151, 255, 0.25);
            }
            75% {
                border-color: rgba(139, 151, 255, 0.25) rgba(139, 151, 255, 0.35) rgba(139, 151, 255, 0.5)
                    rgba(139, 151, 255, 0.15);
            }
            100% {
                border-color: rgba(139, 151, 255, 0.15) rgba(139, 151, 255, 0.25) rgba(139, 151, 255, 0.35)
                    rgba(139, 151, 255, 0.5);
            }
        }
    }
`;

export default StyledLoading;
