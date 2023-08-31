import styled from 'styled-components';

const StyledForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;
const StyledLabel = styled.label`
    font-size: ${({ theme }) => theme.fontSizes.body};
    font-weight: 500;
    margin-bottom: 1.6rem;
`;
const StyledRequired = styled.span`
    color: #ff624d;
`;
const StyledInputContainer = styled.div`
    display: flex;
    width: 100%;
`;
const StyledInput = styled.input`
    box-sizing: border-box;
    width: ${(props) => props.$inputWidth};
    height: 54px;
    font-size: ${({ theme }) => theme.fontSizes.body};
    color: ${({ theme }) => theme.colors.font1};
    padding: 0.8rem 1.2rem;
    margin-bottom: 0.4rem;
    background-color: ${({ theme }) => theme.colors.background3};
    border-radius: ${({ theme, $rounded }) => ($rounded ? theme.borderRadius.large : '0')};
    border: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.border2};
    ${({ $rounded, theme }) => $rounded && `border: 2px solid ${theme.colors.border2};`};
    ${({ $valid }) => !$valid && 'border-color: #ff624d'};

    &:read-only {
        color: #fff;
        background-color: ${({ theme }) => theme.colors.point1};
        border-color: ${({ theme }) => theme.colors.border2};
        opacity: 0.7;
    }
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    &:autofill,
    &:autofill:hover,
    &:autofill:focus,
    &:autofill:active {
        -webkit-text-fill-color: ${({ theme }) => theme.colors.font1};
        -webkit-box-shadow: 0 0 0px 1000px ${({ theme }) => theme.colors.background3} inset;
        box-shadow: 0 0 0px 1000px ${({ theme }) => theme.colors.background3} inset;
        transition: background-color 5000s ease-in-out 0s;
    }
    &::placeholder {
        color: ${({ theme }) => theme.colors.font7};
        opacity: 1;
    }
    &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.colors.point1};
        caret-color: ${({ theme }) => theme.colors.point1};
    }
`;

const StyledErrorMessage = styled.span`
    margin-top: 0.4rem;
    color: #ff624d;
    font-size: ${({ theme }) => theme.fontSizes.text};
`;

export { StyledForm, StyledInput, StyledLabel, StyledRequired, StyledErrorMessage, StyledInputContainer };
