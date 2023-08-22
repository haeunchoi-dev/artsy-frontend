import styled from 'styled-components';
import Button from '@components/@common/Button/Button';
const RegisterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
const RegisterContent = styled.div`
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

const Title = styled.h2`
    flex-basis: 30%;
    display: flex;
    align-items: flex-end;
    box-sizing: border-box;
    font-size: 3.4rem;
    padding-bottom: 4rem;

    ${({ theme }) => theme.media.labtop} {
        padding-bottom: 3.4rem;
    }
`;
const FormsContainer = styled.div`
    flex-basis: 70%;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 290px;
`;

const RegisterForm = styled.form`
    display: grid;
    grid-gap: 12px;
    margin-bottom: 16px;
`;
const RegisterButton = styled(Button)`
    font-size: 1.4rem;
`;
const BackButton = styled.span`
    margin-left: 0.8rem;
    font-size: 1.4rem;
    cursor: pointer;
    color: #909090;
`;
export { RegisterContainer, RegisterContent, Title, FormsContainer, RegisterForm, RegisterButton, BackButton };
