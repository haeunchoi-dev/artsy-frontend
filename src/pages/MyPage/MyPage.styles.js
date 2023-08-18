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
        padding: 3rem;
        border-radius: 2rem;
        box-sizing: border-box;
        box-shadow: 1px 1px 10px 10px rgba(0, 0, 0, 0.02);
        background-color: #fff;
    }
`;

const DataWrap = styled.section`
    margin-top: 4rem;

    ${({ theme }) => theme.media.labtop} {
        margin-top: 0;
        padding: 3rem;
        border-radius: 2rem;
        box-sizing: border-box;
        box-shadow: 1px 1px 10px 10px rgba(0, 0, 0, 0.02);
        background-color: #fff;
    }
`;

const IconMenuList = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
`;

const GradeBox = styled.div`
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

const GradeBoxTop = styled.div`
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

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 6rem;
        height: 6rem;
        border-radius: 50%;
        /* 지영님 코드 머지시 뱃지 이미지로 교체 */
        background-color: #eee;
    }
`;

export { MyPage, ViewWrap, IconMenuList, DataWrap, GradeBox, GradeBoxTop };
