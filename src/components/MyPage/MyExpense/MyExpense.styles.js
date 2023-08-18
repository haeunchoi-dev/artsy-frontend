import styled, { css } from 'styled-components';

import menoeyIconUrl from '@assets/icons/icon-money.png';

const StyledMyExpense = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 10rem;
    padding: 2rem;
    border-radius: 8px;
    box-sizing: border-box;
    background-color: #a888ff;
    background: #a888ff url(${menoeyIconUrl}) no-repeat right 2rem center / 6rem;
    color: #fff;

    h4 {
        font-size: ${({ theme }) => theme.fontSizes.body};
    }

    p {
        margin-top: 1rem;
    }
`;

export default StyledMyExpense;
