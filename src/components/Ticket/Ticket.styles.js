import styled, { css } from 'styled-components';

const bg = {
    영화: '#8B97FF',
    뮤지컬: '#A888FF',
    전시: '#D373FA',
    콘서트: '#FFC348',
    연극: '#FFA888',
};

const bgStyles = css`
    ${({ $category }) => css`
        background-color: ${bg[$category]};
    `}
`;

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

const Wrap = styled.div`
    overflow: hidden;
    position: relative;
    display: flex;
    height: 140px;
    border-radius: 8px;
    padding-left: 20px;
    box-sizing: border-box;
    filter: drop-shadow(2px 5px 5px rgba(0, 0, 0, 0.15));

    /* 카테고리별 배경색 */
    &:before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        display: block;
        width: 20px;
        ${bgStyles}
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
    width: 130px;
    padding: 20px 20px 20px 10px;
    box-sizing: border-box;
    background-color: #fff;
    color: #1b1d21;
`;

const Title = styled.div`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: ${({ theme }) => theme.fontSizes.text};
`;

const Date = styled.div`
    margin-top: 8px;
    font-size: ${({ theme }) => theme.fontSizes.subText};
    color: #909090;
`;

const Rating = styled.div`
    display: inline-flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: auto;
    text-align: right;
    font-size: ${({ theme }) => theme.fontSizes.text};
    span {
        margin-left: 4px;
    }
    img {
        width: ${({ theme }) => theme.fontSizes.text};
    }
`;

const DivideLine = styled.div`
    position: relative;
    display: flex;
    margin: 10px 0;
    width: 20px;

    span {
        width: 10px;
        height: 100%;
        background-color: #fff;
    }

    span:first-of-type {
        border-right: 1px dashed #eee;
    }

    span:first-of-type:before,
    span:first-of-type:after {
        top: -10px;
    }
    span:last-of-type::before,
    span:last-of-type::after {
        bottom: -10px;
    }

    span:before {
        content: '';
        border-left: 10px solid #fff;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        position: absolute;
        left: 0;
    }
    span:after {
        content: '';
        border-right: 10px solid #fff;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        position: absolute;
        right: 0;
    }
`;

export { Wrap, ImageBox, InfoBox, Title, Date, Rating, DivideLine };
