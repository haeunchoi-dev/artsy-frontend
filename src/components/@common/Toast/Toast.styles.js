import styled from 'styled-components';

const StyledToast = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(100vw - 6rem);
    min-height: 4.8rem;
    margin-top: 1.6rem;
    padding: 1rem 2rem;
    box-sizing: border-box;
    border-radius: ${({ theme }) => theme.borderRadius.large};
    text-align: center;
    font-size: ${({ theme }) => theme.fontSizes.text};
    color: #fff;
    background-color: ${({ theme }) => theme.colors.black};
    box-shadow: 0px 1px 10px 3px rgba(0, 0, 0, 0.02);

    ${({ theme }) => theme.media.tablet} {
        max-width: 40rem;
    }
`;

export default StyledToast;
