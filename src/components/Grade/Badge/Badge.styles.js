import styled from 'styled-components';
import arrowUrl from '@assets/icons/icon-brightArrow.png';

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 240px;
    height: 240px;
    margin-bottom: 6rem;
    border-radius: 100%;
    box-shadow: 0px 1px 10px 10px rgba(0, 0, 0, 0.02);
    background-color: ${({ theme }) => theme.colors.background2};
    &::after {
        content: '';
        position: absolute;
        bottom: -17%;
        right: 50%;
        transform: translateX(50%);
        width: 36px;
        height: 18px;
        background: url(${arrowUrl}) no-repeat center/cover;
    }
    &:last-of-type::after {
        width: 0;
        height: 0;
    }

    ${({ theme }) => theme.media.tablet} {
        width: 160px;
        height: 160px;
        margin-bottom: 0;
        & + div {
            margin-left: 3rem;
        }
        &::after {
            width: 24px;
            height: 12px;
            top: 50%;
            right: -20%;
            transform: rotate(-90deg) translateY(-50%);
        }
    }
    ${({ theme }) => theme.media.labtop} {
        width: 200px;
        height: 200px;
        & + div {
            margin-left: 6rem;
        }
        &::after {
            width: 30px;
            height: 15px;
            top: 50%;
            right: -26%;
        }
    }
`;
const ImageWrap = styled.span`
    width: 40%;
    margin-bottom: 0.8rem;
    > img {
        width: 100%;
    }
    ${({ theme }) => theme.media.tablet} {
        margin-bottom: 0rem;
    }
`;
const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${({ $color }) => $color};
    font-size: 1.6rem;
    > p:first-of-type {
        font-size: 2rem;
        font-weight: bold;
        line-height: 2.4rem;
    }
    ${({ theme }) => theme.media.tablet} {
        font-size: 1.4rem;

        > p:first-of-type {
            font-size: 1.8rem;
            line-height: 2.2rem;
        }
    }
    ${({ theme }) => theme.media.labtop} {
        margin-bottom: 0.4rem;
        font-size: 1.6rem;
        > p:first-of-type {
            font-size: 2.4rem;
            line-height: 2.8rem;
        }
    }
`;
export { Container, ImageWrap, Content };
