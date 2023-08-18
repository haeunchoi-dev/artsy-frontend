import styled from 'styled-components';

const Record = styled.div`
    position: relative;
`;
const RecordHeader = styled.div`
    padding: 0 20px;

    h2 {
        font-size: 2rem;
        font-weight: 600;
        margin-bottom: 8px;
    }
    p {
        position: absolute;
        font-size: 1rem;
    }
    ${({ $theme }) => $theme.media.tablet} {
        h2 {
            font-size: 2.4rem;
            font-weight: bold;
            margin-bottom: 8px;
        }
        p {
            font-size: 1.2rem;
        }
    }
`;
const CategoryContainer = styled.div`
    width: 100%;

    scroll-snap-type: x mandatory;

    /* hide scrollbar but allow scrolling */

    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
    overflow-x: scroll;

    &::-webkit-scrollbar {
        display: none; /* for Chrome, Safari, and Opera */
    }
    ${({ $theme }) => $theme.media.tablet}{
        scroll-snap-type: none;
    }
`;

const CategoryWrapper = styled.div`
    box-sizing: border-box;

    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 5vw;
    width: 205vw;
    padding: 3.5rem 25px 7rem;
    div {
        scroll-snap-align: center;
        scroll-snap-stop: normal;
    }
    ${({ $theme }) => $theme.media.tablet} {
        grid-gap: 20px;
        width: 100%;
    }
`;
export { Record, RecordHeader, CategoryContainer, CategoryWrapper };
