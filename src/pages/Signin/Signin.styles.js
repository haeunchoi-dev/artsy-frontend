import styled from 'styled-components';
import Button from '@components/@common/Button/Button';
const SignInContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SignInContent = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    input {
        font-size: 1.4rem;
    }
    ${({ theme }) => theme.media.labtop} {
        flex-basis: 40%;
    }
`;
const loginTitle = styled.h2`
    font-size: 4.6rem;
    margin-bottom: 3.6rem;
    ${({ theme }) => theme.media.labtop} {
        font-size: 3.4rem;
    }
`;
const loginForm = styled.form`
    width: 100%;
    max-width: 290px;

    display: grid;
    grid-template-rows: 57px 57px 53px;
    grid-gap: 12px;
    margin-bottom: 16px;
`;
const SignInButton = styled(Button)`
    font-size: 1.4rem;
`;
const RegisterButton = styled(Button)`
    width: 100%;
    max-width: 290px;
    font-size: 1.4rem;

    color: ${({ theme }) => theme.colors.point1};
    background: #fff;
    margin-bottom: 3.6rem;

    border: 2px solid ${({ theme }) => theme.colors.point1};
`;
export { SignInContainer, SignInContent, loginTitle, loginForm, SignInButton, RegisterButton };
