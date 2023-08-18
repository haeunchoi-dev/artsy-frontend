import styled from 'styled-components';
import Button from '@components/@common/Button/Button';
const RegisterContainer = styled.div`
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
const Title = styled.h2`
    margin-bottom: 2.6rem;
`;
const RegisterForm = styled.form`
    width: 100%;
    max-width: 480px;

    display: grid;
    /* grid-template-rows: 57px 57px 53px; */
    grid-gap: 12px;
    margin-bottom: 16px;
    ${({ $theme }) => $theme.media.labtop} {
        max-width: 370px;
    }
`;
const RegisterButton = styled(Button)`
    border-radius: 100px;
    height: 53px;
    font-size: 1.4rem;
`;
export { RegisterContainer, Title, RegisterForm, RegisterButton };
