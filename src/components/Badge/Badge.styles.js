import styled, { useTheme } from 'styled-components';

const Badge = styled.div`
    box-sizing: border-box;
    width: 100%;
    padding: 30px 25px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-shrink: 0;

    border-radius: 10px;
    background: ${({ theme }) => `linear-gradient(146deg, ${theme.colors.point1} 0%, #7a85e0 100%)`};

    @media all and (min-width: 768px) {
        max-width: 480px;
        width: 55%;
    }
    @media all and (min-width: 1280px) {
    }
`;
const ImageWrapper = styled.div`
    box-sizing: border-box;
    position: relative;

    width: 25%;
    height: 0;
    padding-bottom: 25%;
    background-color: white;
    border-radius: 100%;
    box-shadow: 10px 10px 10px rgba(96, 87, 186, 0.3);
    margin-bottom: 10%;
    img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 50%;
        height: auto;
    }
`;
const Description = styled.p`
    font-size: 1.3rem;
    line-height: 1.6rem;
    font-weight: bold;
    color: white;
    margin-bottom: 1%;
`;
const BadgeValue = styled.p`
    align-self: flex-end;
    color: white;
    font-size: 1.3rem;
    font-weight: bold;
    margin-bottom: 4%;
    span {
        font-size: 0.9rem;
        font-weight: normal;

        color: ${({ theme }) => theme.colors.sub2};
    }
`;
const Bar = styled.div`
    width: 100%;
    height: 6px;
    margin-bottom: 5%;
    border-radius: 6px;
    background-color: white;
    box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.25) inset;
`;
const Value = styled.div`
    width: ${({ $all, $value }) => parseInt(($value / $all) * 100)}%;
    height: 6px;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.colors.sub2};
    box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.25) inset;
`;
export { Badge, Description, ImageWrapper, Bar, Value, BadgeValue };