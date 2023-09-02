import styled from 'styled-components';

const Record = styled.div`
    position: relative;
`;
const RecordHeader = styled.div`
    padding: 0 2rem;

    h2 {
        font-size: 2rem;
        font-weight: 600;
        margin-bottom: 0.8rem;
    }
    p {
        position: absolute;
        font-size: 1.4rem;
        color: ${({ theme }) => theme.colors.font6};
    }
    ${({ theme }) => theme.media.tablet} {
        h2 {
            font-size: 2.4rem;
            margin-bottom: 0.8rem;
            line-height: 3.6rem;
        }
    }
    ${({ theme }) => theme.media.labtop} {
        h2 {
            font-size: 2.8rem;
        }
        p {
            font-size: 1.6rem;
        }
    }
`;
const CategoryContainer = styled.div`
    width: 100%;

    scroll-snap-type: x mandatory;

    -ms-overflow-style: none;
    scrollbar-width: none;
    overflow-x: scroll;

    &::-webkit-scrollbar {
        display: none;
    }
    ${({ theme }) => theme.media.tablet} {
        scroll-snap-type: none;
    }
`;

const CategoryWrapper = styled.div`
    box-sizing: border-box;

    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 5vw;
    width: 205vw;
    padding: 3.5rem 2.5rem;
    div {
        scroll-snap-align: center;
        scroll-snap-stop: normal;
    }
    ${({ theme }) => theme.media.tablet} {
        grid-gap: 20px;
        width: 100%;
        padding: 4.8rem 2.5rem;
    }
`;
export { Record, RecordHeader, CategoryContainer, CategoryWrapper };
