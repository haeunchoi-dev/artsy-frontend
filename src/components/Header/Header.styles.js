import styled from 'styled-components';

const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    // 임시
    height: 50px;
    line-height: 50px;
    text-align: center;
    background-color: #fff;
    box-shadow: 0px 1px 10px 3px rgba(0, 0, 0, 0.02);
`;

const HeaderInner = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 20px;
    box-sizing: border-box;
`;

export { Header, HeaderInner };
