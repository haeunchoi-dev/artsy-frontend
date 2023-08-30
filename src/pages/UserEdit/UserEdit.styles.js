import styled from 'styled-components';

const InputBox = styled.div`
    margin-bottom: 3.5rem;

    > div + div {
        margin-top: 0.8rem;
    }
`;

const EditForm = styled.div``;

const ConfirmForm = styled.div``;

const SubTitleWrap = styled.div`
    margin-bottom: 4rem;
`;

const SubTitle = styled.h4`
    font-size: ${({ theme }) => theme.fontSizes.h6};
    margin-bottom: 1rem;
`;

const SubText = styled.div`
    b {
        color: ${({ theme }) => theme.colors.point1};
    }
`;
export { InputBox, EditForm, ConfirmForm, SubTitleWrap, SubTitle, SubText };
