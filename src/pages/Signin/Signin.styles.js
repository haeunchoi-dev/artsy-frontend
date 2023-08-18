import styled from 'styled-components';
import Button from '../../components/@common/Button/Button';

const SignInContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Introduction = styled.div`
    display: none;
    height: 100%;
    color: #fff;
    background: linear-gradient(180deg, rgba(105, 96, 204, 0.8) 0%, #554dab 100%);
    h2 {
        font-size: 3.6rem;
        margin-bottom: 0.8rem;
    }
    ${({ $theme }) => $theme.media.labtop} {
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex-basis: 60%;
    }
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

    ${({ $theme }) => $theme.media.labtop} {
        flex-basis: 40%;
    }
`;
const loginTitle = styled.h2`
    margin-bottom: 2.6rem;
`;
const loginForm = styled.form`
    width: 100%;
    max-width: 480px;

    display: grid;
    grid-template-rows: 57px 57px 53px;
    grid-gap: 12px;
    margin-bottom: 16px;
    ${({ $theme }) => $theme.media.labtop} {
        max-width: 340px;
    }
`;
const SignInButton = styled(Button)`
    border-radius: 100px;
    height: 53px;
    font-size: 1.4rem;
`;
const RegisterButton = styled(Button)`
    border-radius: 100px;

    width: 100%;
    height: 53px;
    max-width: 480px;
    font-size: 1.4rem;

    color: ${({ $theme }) => $theme.colors.point1};
    background: #fff;
    margin-bottom: 3.6rem;

    border: 2px solid ${({ $theme }) => $theme.colors.point1};
    ${({ $theme }) => $theme.media.labtop} {
        max-width: 340px;
    }
`;
export { SignInContainer, Introduction, SignInContent, loginTitle, loginForm, SignInButton, RegisterButton };
