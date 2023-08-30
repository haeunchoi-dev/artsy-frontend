import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const ImageBox = styled.div`
    flex: 1 auto;
    overflow: hidden;
    position: relative;
    background-color: #eee;

    &:before {
        content: '';
        display: block;
        padding-top: 100%;
    }

    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 0.2s;
    }
`;

const Wrap = styled(Link)`
    overflow: hidden;
    position: relative;
    display: flex;
    height: 16rem;
    border-radius: 8px;
    padding-left: 2rem;
    box-sizing: border-box;
    will-change: filter;
    filter: drop-shadow(2px 5px 5px rgba(0, 0, 0, 0.15));
    cursor: pointer;

    /* 카테고리별 배경색 */
    &:before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        display: block;
        width: 2rem;
        background-color: ${({ $categoryColor }) => $categoryColor};
    }

    &:hover ${ImageBox} {
        img {
            transform: scale(1.04);
        }
    }
`;

const InfoBox = styled.div`
    display: flex;
    flex-direction: column;
    flex: none;
    width: 13rem;
    padding: 2rem 2rem 2rem 1rem;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.background3};
    color: ${({ theme }) => theme.colors.black};
`;

const Title = styled.div`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: ${({ theme }) => theme.fontSizes.text};
`;

const Date = styled.div`
    margin-top: 1rem;
    font-size: ${({ theme }) => theme.fontSizes.subText};
    color: ${({ theme }) => theme.colors.font5};
`;

const Rating = styled.div`
    display: inline-flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: auto;
    text-align: right;
    font-size: ${({ theme }) => theme.fontSizes.text};

    p {
        margin-left: 0.4rem;

        > span {
            font-size: ${({ theme }) => theme.fontSizes.subText};
            color: #909090;
        }
    }

    img {
        width: ${({ theme }) => theme.fontSizes.text};
    }
`;

const DivideLine = styled.div`
    position: relative;
    display: flex;
    margin: 1rem 0;
    width: 2rem;

    span {
        width: 1rem;
        height: 100%;
        background-color: ${({ theme }) => theme.colors.background3};
    }

    span:first-of-type {
        border-right: 1px dashed #eee;
    }

    span:first-of-type:before,
    span:first-of-type:after {
        top: -1rem;
    }
    span:last-of-type::before,
    span:last-of-type::after {
        bottom: -1rem;
    }

    span:before {
        content: '';
        border-left: 1rem solid ${({ theme }) => theme.colors.background3};
        border-top: 1rem solid transparent;
        border-bottom: 1rem solid transparent;
        position: absolute;
        left: 0;
    }
    span:after {
        content: '';
        border-right: 10px solid ${({ theme }) => theme.colors.background3};
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        position: absolute;
        right: 0;
    }
`;

export { Wrap, ImageBox, InfoBox, Title, Date, Rating, DivideLine };
