import styled from 'styled-components';
import Button from '@components/@common/Button/Button';
import Input from '@components/@common/Input/Input';
import { SlClose } from 'react-icons/sl';

const TitleContainer = styled.div`
    h3 {
        font-size: ${({ theme }) => theme.fontSizes.h5};
        margin-bottom: 3rem;
    }
`;

const TicketForm = styled.div``;

const ImgContainer = styled.div`
    display: flex;
    align-items: flex-end;
    margin: 2rem 0;
`;

const ImgWrap = styled.div`
    overflow: hidden;
    display: flex;
    position: relative;
    justify-content: center;

    border: 1px solid #c5c5c5;
    border-radius: ${({ theme }) => theme.borderRadius.large};

    width: 100%;
    height: 20rem;

    img {
        width: 75%;
        height: 100%;
        object-fit: contain;
    }
`;

const IconWrap = styled.div`
    cursor: pointer;
    display: inline-block;
    position: absolute;
    bottom: 3px;
    right: 3px;
    width: 30px;
    height: 30px;
`;

const StyledSlClose = styled(SlClose)`
    width: 90%;
    height: 90%;
    object-fit: contain;
`;

const ReviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const Label = styled.label`
    font-size: ${({ theme }) => theme.fontSizes.body};
    font-weight: 500;
    margin-bottom: 16px;
`;

const ReviewInput = styled.textarea`
    box-sizing: border-box;
    width: 100%;
    height: 20rem;
    font-size: ${({ theme }) => theme.fontSizes.body};
    padding: 1.2rem 2.2rem;
    border-radius: ${(props) => (props.$rounded ? '100px' : '0')};
    border: 1px solid ${({ theme }) => theme.colors.border2};
    resize: none;
    overflow: hidden;
    background-color: ${({ theme }) => theme.colors.background3};
    &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.colors.point1};
        caret-color: ${({ theme }) => theme.colors.point1};
    }
`;
const ButtonContaienr = styled.div`
    display: flex;
    justify-content: center;
    margin: 4rem 0;
`;

const CreateButton = styled(Button)`
    font-size: ${({ theme }) => theme.fontSizes.body};
`;

const StyledInput = styled(Input)``;

const MarginContainer = styled.div`
    margin-bottom: 3.5rem;
`;

export {
    TitleContainer,
    TicketForm,
    ImgContainer,
    IconWrap,
    StyledSlClose,
    ImgWrap,
    ReviewContainer,
    Label,
    ReviewInput,
    ButtonContaienr,
    CreateButton,
    StyledInput,
    MarginContainer,
};
