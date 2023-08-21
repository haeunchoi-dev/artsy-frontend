import styled from 'styled-components';
import introBgUrl from '@assets/icons/signIn_intro.png';

const Introduction = styled.div`
    display: none;
    position: relative;
    height: 100%;
    color: #fff;
    background: linear-gradient(180deg, rgba(105, 96, 204, 0.8) 0%, #554dab 100%);
    > h2 {
        font-size: 4.6rem;
        line-height: 8rem;
        margin-bottom: 0.8rem;
    }
    > p {
        font-size: 1.6rem;
        margin-bottom: 4.8rem;
    }

    &:before {
        content: '';
        position: absolute;
        top: 50%;
        right: 10%;
        transform: translate(0, -50%);
        width: 360px;
        height: 360px;
        background: url(${introBgUrl}) no-repeat center/cover;
    }
    ${({ theme }) => theme.media.labtop} {
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex-basis: 60%;
        > p {
            z-index: 3;
        }
    }
`;

export { Introduction };
