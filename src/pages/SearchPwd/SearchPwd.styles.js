import styled from 'styled-components';

import Button from '@components/@common/Button/Button';

const SubTitleWrap = styled.div`
    margin-bottom: 4rem;
    word-break: keep-all;
`;

const Form = styled.div``;

const Timer = styled.div``;

const InputBox = styled.div`
    display: flex;
    align-items: flex-end;

    position: relative;
    margin-bottom: 3.5rem;

    > button {
        margin-top: 1rem;
    }

    > div {
        width: 100%;
    }

    ${Timer} {
        position: absolute;
        top: 0;
        right: 0;
        text-align: right;
        font-size: ${({ theme }) => theme.fontSizes.text};
        color: ${({ theme }) => theme.colors.point2};
    }
`;

const StyledButton = styled(Button)`
    flex-shrink: 0;
    margin-left: 8px;
    height: 54px;
`;

export { SubTitleWrap, Form, InputBox, Timer, StyledButton };
