import styled from 'styled-components';

const SliderWrap = styled.div`
    width: 100%;
    margin: 1rem 0;

    div {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        margin-bottom: 1rem;
    }

    h5 {
        font-size: ${({ theme }) => theme.fontSizes.body};
        color: ${({ theme }) => theme.colors.point1};
        margin-right: 0.2rem;
    }

    h4 {
        color: #6e6e6e;
        font-size: ${({ theme }) => theme.fontSizes.text};
    }

    input {
        cursor: pointer;
        width: 100%;
        accent-color: ${({ theme }) => theme.colors.point1};
    }
`;

export { SliderWrap };
