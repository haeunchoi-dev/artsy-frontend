import styled from 'styled-components';
import GradeBar from '@components/@common/GradeBar/GradeBar';

const Badge = styled.div`
    box-sizing: border-box;
    width: 100%;
    padding: 30px 25px 48px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-shrink: 0;

    border-radius: 10px;
    background: ${({ theme }) => `linear-gradient(146deg, ${theme.colors.point1} 0%, #7a85e0 100%)`};

    ${({ $theme }) => $theme.media.tablet} {
        max-width: 480px;
        width: 55%;
    }
    ${({ $theme }) => $theme.media.labtop} {
    }
`;
const ImageWrapper = styled.div`
    box-sizing: border-box;
    position: relative;

    width: 25%;
    height: 0;
    padding-bottom: 25%;
    background-color: #fff;
    border-radius: 100%;
    box-shadow: 10px 10px 10px rgba(96, 87, 186, 0.3);
    margin-bottom: 3.8rem;
    img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 60%;
        height: auto;
    }
`;
const Comment = styled.p`
    font-size: 1.8rem;
    line-height: 2.6rem;
    font-weight: bold;
    color: white;
    margin-bottom: 0.4rem;
`;
const ExtendGradeBar = styled(GradeBar)`
    margin-bottom: 1.8rem;
`;
export { Badge, Comment, ImageWrapper, ExtendGradeBar };
