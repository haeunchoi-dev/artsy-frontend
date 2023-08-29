import styled from 'styled-components';

const StyledForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    > input:focus {
        outline: none;
        border-color: ${({ theme }) => theme.colors.point1};
        caret-color: ${({ theme }) => theme.colors.point1};
    }
`;
const StyledLabel = styled.label`
    font-size: ${({ theme }) => theme.fontSizes.body};
    font-weight: 600;
    margin-bottom: 16px;
`;
const StyledRequired = styled.span`
    color: #ff624d;
`;
const StyledInput = styled.input`
    box-sizing: border-box;
    width: ${(props) => props.$inputWidth};
    height: 54px;
    font-size: ${({ theme }) => theme.fontSizes.body};
    color: ${({ theme }) => theme.colors.black};
    padding: 8px 22px;
    margin-bottom: 4px;
    border-radius: ${({ theme, $rounded }) => ($rounded ? theme.borderRadius.large : '0')};
    border: none;
    border-bottom: 2px solid #c5c5c5;
    ${({ $rounded }) => $rounded && 'border: 2px solid #c5c5c5;'};
    ${({ $valid }) => !$valid && 'border-color: #ff624d'};

    &:read-only {
        color: #fff;
        background-color: ${({ theme }) => theme.colors.point1};
        border-color: #909090;
        opacity: 0.6;
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
        -webkit-text-fill-color: #000;
        -webkit-box-shadow: 0 0 0px 1000px #fff inset;
        box-shadow: 0 0 0px 1000px #fff inset;
        transition: background-color 5000s ease-in-out 0s;
    }
`;

const StyledErrorMessage = styled.span`
    margin-left: 22px;
    margin-top: 4px;
    color: #ff624d;
    font-size: ${({ theme }) => theme.fontSizes.text};
`;

export { StyledForm, StyledInput, StyledLabel, StyledRequired, StyledErrorMessage };
