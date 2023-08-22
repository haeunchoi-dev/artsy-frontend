import styled from 'styled-components';
import Button from '@components/@common/Button/Button';
import Input from '@components/@common/Input/Input';

const Container = styled.div`
    margin: 0 auto;
    padding: 0 3rem 0 2rem;

    h3 {
        font-weight: 500;
        font-size: ${({ theme }) => theme.fontSizes.h5};
        margin-bottom: 3rem;
    }

    ${({ theme }) => theme.media.tablet} {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

const TitleContainer = styled.div`
    ${({ theme }) => theme.media.tablet} {
        width: 40%;
    }
`;

const CreateForm = styled.div`
    ${({ theme }) => theme.media.tablet} {
        width: 40%;
    }
`;

const ImgContainer = styled.div`
    display: flex;
    align-items: flex-end;
    margin-bottom: 4rem;
`;

const ImgWrap = styled.div`
    overflow: hidden;
    display: block;
    position: relative;

    border: 1px solid #c5c5c5;

    width: 30rem;
    height: 20rem;
    margin-right: 1rem;

    img {
        width: 100%;
        height: 100%;
        object-fit: fill; // 크기에 맞춰서 채움
        //object-fit: cover; // 비율 유지하면서 자름
    }
`;

const ReviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;
const Label = styled.label`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
`;

const ReviewInput = styled.textarea`
    box-sizing: border-box;
    width: 100%;
    height: 20rem;
    font-size: 16px;
    padding: 8px 22px;
    border-radius: ${(props) => (props.$rounded ? '100px' : '0')};
    border: 1px solid #c5c5c5;
    resize: none;
    overflow: hidden;
`;

const ButtonContaienr = styled.div`
    display: flex;
    justify-content: center;
    margin: 4rem 0;
`;

const CreateButton = styled(Button)`
    font-size: 1.5rem;
    /* height: 4.5rem; */
    /* width: 12em;
    height: 4rem; */
`;

const StyledInput = styled(Input)``;

const MarginContainer = styled.div`
    margin-bottom: 3.5rem;
`;

export {
    Container,
    TitleContainer,
    CreateForm,
    ImgContainer,
    ImgWrap,
    ReviewContainer,
    Label,
    ReviewInput,
    ButtonContaienr,
    CreateButton,
    StyledInput,
    MarginContainer,
};
