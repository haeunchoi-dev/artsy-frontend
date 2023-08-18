import styled from 'styled-components';

const CustomSelect = styled.select`
    width: ${({ width }) => width};
    display: block;
    margin: 0px;
    padding: 6px;
    border: none;
    border-bottom: 1px solid #1b1d21;
    cursor: pointer;
    font-size: inherit;
    background-color: transparent;

    &:focus {
        outline: none;
    }
`;

export { CustomSelect };
