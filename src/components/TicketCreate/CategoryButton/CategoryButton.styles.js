import styled from 'styled-components';

const RadioText = styled.span`
    font-size: 1.5rem;
    width: 7rem;
    height: 3rem;
    background-color: #848484;
    border-radius: 12px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    cursor: pointer;
`;

const RadioButton = styled.input.attrs({ type: 'radio' })`
    margin-right: 10px;
    &:checked {
        display: inline-block;
        background: none;
        text-align: center;
        display: none;
    }
    &:checked + ${RadioText} {
        background-color: ${({ color }) => color};
        color: #fff;
    }
    display: none;
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin: 1.5rem 0;
    flex-wrap: wrap;

    width: 100%;

    label {
        margin-bottom: 1rem;
        &:not(:last-child) {
            margin-right: 1.5rem;
        }
    }
`;

export { Container, RadioButton, RadioText };
