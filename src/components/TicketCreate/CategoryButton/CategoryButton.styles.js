import styled from 'styled-components';

const RadioText = styled.span`
    font-size: 1.5rem;
    width: 7rem;
    height: 3rem;
    background-color: grey;
    border-radius: 12px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.black};
`;

const RadioButton = styled.input.attrs({ type: 'radio' })`
    &:checked {
        display: inline-block;
        background: none;
        text-align: center;
        display: none;
    }
    &:checked + ${RadioText} {
        background-color: ${({ color }) => color};
        color: white;
    }
    display: none;
`;

const Container = styled.div`
    display: grid;
    flex-direction: row;
    margin: 1.5rem 0;

    width: fit-content;
    grid-gap: 1rem;

    grid-template-columns: repeat(3, 1fr);

    ${({ theme }) => theme.media.tablet} {
        grid-template-columns: repeat(5, 1fr);
    }
`;

export { Container, RadioButton, RadioText };
