import styled from 'styled-components';
const RegisterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 100%;
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
    font-size: 4.6rem;
    padding-bottom: 2.8rem;
    cursor: pointer;
    ${({ theme }) => theme.media.labtop} {
        font-size: 3.4rem;
    }
`;
const FormsContainer = styled.div`
    flex-basis: 70%;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 290px;
`;

export { RegisterContainer, RegisterContent, Title, FormsContainer };
