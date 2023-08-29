import styled from 'styled-components';
import Button from '@components/@common/Button/Button';

const RegisterForm = styled.form`
    display: grid;
    grid-gap: 1.2rem;
    margin-bottom: 1.6rem;
`;
const RegisterButton = styled(Button)`
    font-size: 1.4rem;
    &:disabled {
        background-color: #909090;
    }
`;
const BackButton = styled.span`
    margin-left: 0.8rem;
    font-size: 1.4rem;
    cursor: pointer;
    color: #909090;
`;

const Email = styled.div`
    margin-left: 0.8rem;
    margin-bottom: 1.8rem;
`;

export { RegisterForm, RegisterButton, BackButton, Email };
