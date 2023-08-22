import styled from 'styled-components';

const SliderWrap = styled.div`
    width: 100%;
    margin: 1rem 0;

    div {
        display: flex;
        justify-content: flex-end;
    }

    h5 {
        font-size: 1.7rem;
        color: ${({ theme }) => theme.colors.point2};
        margin-bottom: 1rem;
    }

    input {
        cursor: pointer;
        width: 100%;
        accent-color: ${({ theme }) => theme.colors.point2};
    }
`;

export { SliderWrap };
