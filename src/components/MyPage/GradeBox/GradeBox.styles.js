import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledGradeBox = styled(Link)`
    display: block;
    margin-top: 2rem;
    padding: 2rem;
    border-radius: 10px;
    box-sizing: border-box;
    box-shadow: 1px 1px 10px 10px rgba(0, 0, 0, 0.02);
    background-color: #fff;

    ${({ theme }) => theme.media.labtop} {
        padding: 3rem;
    }
`;

const StyledGradeInfo = styled.div`
    position: relative;
    min-height: 6rem;
    margin-bottom: 1rem;
    padding-left: 8rem;

    h4 {
        font-size: ${({ theme }) => theme.fontSizes.h6};
    }

    p {
        margin-top: 1rem;
        font-size: ${({ theme }) => theme.fontSizes.text};
    }

    span {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 6rem;
        height: 6rem;
        border-radius: 50%;
        background-color: #eee;

        img {
            width: 4rem;
        }
    }
`;

export { StyledGradeBox, StyledGradeInfo };
