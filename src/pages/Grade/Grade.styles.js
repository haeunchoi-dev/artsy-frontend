import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 5rem;
`;

const TopContent = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    h2 {
        margin-bottom: 1.8rem;
        font-size: 2rem;
    }
    p {
        margin-bottom: 3.6rem;
        font-size: 1.6rem;
        color: #909090;
    }
    ${({ theme }) => theme.media.tablet} {
        h2 {
            margin-bottom: 2rem;
            font-size: 2.4rem;
        }
        p {
            margin-bottom: 4rem;
            font-size: 2rem;
            color: #909090;
        }
    }
    ${({ theme }) => theme.media.labtop} {
        h2 {
            margin-bottom: 2.4rem;
            font-size: 3.4rem;
        }
        p {
            font-size: 2rem;
            color: #909090;
        }
    }
`;
const Background = styled.div`
    position: absolute;
    top: -80%;
    display: flex;
    justify-content: space-between;
    ${({ theme }) => theme.media.tablet} {
        top: -70%;
    }
    ${({ theme }) => theme.media.labtop} {
        top: -60%;
    }
`;
const ImageWrap = styled.span`
    display: flex;
    width: 15%;
    max-width: 240px;
    img {
        width: 100%;
        height: auto;
    }
    &:first-of-type {
        width: 18%;
    }

    ${({ theme }) => theme.media.tablet} {
        width: 13%;
        max-width: 340px;
    }
    ${({ theme }) => theme.media.labtop} {
        max-width: 400px;
    }
`;
const RoundBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: 800px;
    padding: 1.2rem 1.8rem;
    border-radius: 2.4rem;
    margin-bottom: 8rem;
    background-color: ${({ theme }) => theme.colors.point1};
    font-size: 1.4rem;
    text-align: center;
    color: #fff;
    > p:first-of-type {
        margin-bottom: 0.8rem;
    }
    span {
        color: #e9be53;
    }
    ${({ theme }) => theme.media.tablet} {
        font-size: 1.6rem;
    }
    ${({ theme }) => theme.media.labtop} {
        font-size: 2rem;
    }
`;
const BadgesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    ${({ theme }) => theme.media.tablet} {
        flex-direction: row;
    }
`;
export { Container, TopContent, RoundBox, BadgesContainer, Background, ImageWrap };
