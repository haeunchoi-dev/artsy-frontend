import styled from 'styled-components';

const Container = styled.div``;

const MainText = styled.h2`
    font-weight: 700;
    font-size: 32px;
`;

const TypeColorBox = styled.div`
    width: 100%;
    height: 360px;
    position: absolute;
    top: 260px;
    z-index: -999;

    background-color: blue;
`;

const TicketDetailContainer = styled.div`
    display: flex;
    justify-content: center;

    margin-top: 20px;
`;

const TicketImage = styled.img`
    width: 290px;
    height: 400px;
    margin-right: 40px;

    border-radius: 12px;
`;

const TicketDetailBox = styled.div`
    width: 600px;
    height: 400px;
    border-radius: 12px;
    box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.25);

    background-color: white;
`;

export { Container, MainText, TypeColorBox, TicketDetailContainer, TicketImage, TicketDetailBox };
