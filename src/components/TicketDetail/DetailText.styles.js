import styled from 'styled-components';

const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 40px;
    justify-content: space-between;
`;

const Label = styled.span`
    text-align: center;
    font-size: 15px;
    font-weight: 400;
    line-height: 150%; /* 22.5px */
    letter-spacing: -0.33px;
`;

const Content = styled.span`
    color: #333;
    text-align: center;
    font-size: 13px;
    font-weight: 500;
    line-height: 31.117px; /* 239.365% */
`;

export { RowContainer, Label, Content };
