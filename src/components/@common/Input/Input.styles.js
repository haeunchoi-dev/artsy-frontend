import styled from 'styled-components';

const StyledForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;
const StyledLabel = styled.label`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
`;
const StyledRequired = styled.span`
    color: #ff1f00;
`;
const StyledInput = styled.input`
    box-sizing: border-box;
    width: ${(props) => props.$inputWidth};
    height: 54px;
    font-size: 16px;
    padding: 8px 22px;
    margin-bottom: 4px;
    border-radius: ${({ theme, $rounded }) => ($rounded ? theme.borderRadius.large : '0')};
    border: ${(props) => (props.$rounded ? '2px solid #c5c5c5' : 'none')};
    border-bottom: 2px solid #c5c5c5;
    border-color: ${(props) => (props.$valid ? '#c5c5c5' : '#FF1F00')};

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`;

const StyledErrorMessage = styled.span`
    color: #ff1f00;
`;

export { StyledForm, StyledInput, StyledLabel, StyledRequired, StyledErrorMessage };
