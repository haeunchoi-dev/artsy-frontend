import styled from 'styled-components';
import Button from '@components/@common/Button/Button';

const EmailForm = styled.form`
    display: flex;
    flex-direction: column;
    padding-top: 3.2rem;
`;
const CheckButton = styled(Button)`
    font-size: 1.4rem;
    margin-top: 1.2rem;
`;
export { EmailForm, CheckButton };
