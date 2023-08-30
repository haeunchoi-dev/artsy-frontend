import styled from 'styled-components';
import Button from '@components/@common/Button/Button';
const Greeting = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 16px;
    h2 {
        font-size: 2.4rem;
        font-weight: 500;
        line-height: 3rem;
        margin-bottom: 0.8rem;
    }
    p {
        display: none;
    }

    ${({ theme }) => theme.media.tablet} {
        flex: 1 auto;
        h2 {
            font-size: 3.4rem;
            line-height: 3.8rem;
            font-weight: bold;
        }
        p {
            display: block;
            font-size: 1.6rem;
            margin-bottom: 6rem;
            color: ${({ theme }) => theme.colors.font6};
        }
    }
    ${({ theme }) => theme.media.labtop} {
        h2 {
            font-size: 4.6rem;
            line-height: 6rem;
        }
        p {
            font-size: 2rem;
        }
    }
`;

const ExtendedButton = styled(Button)`
    display: none;

    ${({ theme }) => theme.media.tablet} {
        display: block;
        margin-bottom: 2rem;
    }
    ${({ theme }) => theme.media.labtop} {
        margin-bottom: 1.4rem;
    }
`;

export { Greeting, ExtendedButton };
