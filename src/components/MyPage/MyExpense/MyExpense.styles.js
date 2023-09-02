import styled, { css } from 'styled-components';

import menoeyIconUrl from '@assets/icons/icon-money.png';

const StyledMyExpense = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 10rem;
    padding: 2rem;
    border-radius: 0.8rem;
    box-sizing: border-box;
    background-color: #a888ff;
    background: #a888ff url(${menoeyIconUrl}) no-repeat right 2rem center / 6rem;
    color: #fff;

    h4 {
        font-size: ${({ theme }) => theme.fontSizes.text};
        font-weight: normal;
    }

    p {
        margin-top: 1rem;
        font-weight: 500;
        font-size: ${({ theme }) => theme.fontSizes.body};
    }
`;

export default StyledMyExpense;
