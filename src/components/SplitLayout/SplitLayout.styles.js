import styled from 'styled-components';
const Background = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -2;
    display: grid;
    grid-template-columns: 1fr minmax(min-content, 1280px) 1fr;
`;
const Left = styled.div`
    width: 100%;
    ${({ $css }) => $css}
`;
const Right = styled.div`
    width: 100%;
    ${({ $css }) => $css}
`;

export { Background, Left, Right };
