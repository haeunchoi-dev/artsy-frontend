import styled from 'styled-components';
const MyPage = styled.div`
    ${({ theme }) => theme.media.labtop} {
        display: grid;
        grid-column-gap: 2rem;
        grid-template-columns: repeat(2, 1fr);
    }
`;

const ViewWrap = styled.section`
    ${({ theme }) => theme.media.labtop} {
        padding: 4rem 3rem;
        border-radius: 2rem;
        box-sizing: border-box;
        box-shadow: 1px 1px 10px 10px rgba(0, 0, 0, 0.02);
        background-color: ${({ theme }) => theme.colors.background2};
    }
`;

const DataWrap = styled.section`
    margin-top: 4rem;

    ${({ theme }) => theme.media.labtop} {
        margin-top: 0;
        padding: 4rem 3rem;
        border-radius: 2rem;
        box-sizing: border-box;
        box-shadow: 1px 1px 10px 10px rgba(0, 0, 0, 0.02);
        background-color: ${({ theme }) => theme.colors.background2};
    }
`;

export { MyPage, ViewWrap, DataWrap };
