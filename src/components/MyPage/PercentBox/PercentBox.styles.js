import styled from 'styled-components';

const PercentWrap = styled.div`
    margin-top: 4rem;
`;

const Title = styled.h4`
    font-size: ${({ theme }) => theme.fontSizes.body};

    b {
        color: ${({ theme }) => theme.colors.point1};
    }
`;

const Bar = styled.div``;
const PercentBar = styled.div`
    position: relative;
    width: 100%;
    height: 1rem;
    margin-top: 4rem;
    box-sizing: border-box;
    border-radius: 0.5rem;
    background-color: #eee;

    > ${Bar} {
        position: absolute;
        top: 0;
        left: 0;
        width: ${({ $percentage }) => $percentage + '%'};
        height: 100%;
        border-radius: 0.5rem;
        background-color: ${({ theme }) => theme.colors.point1};

        > span {
            position: absolute;
            bottom: calc(100% + 1rem);
            right: 0;
            transform: translateX(50%);
            font-size: ${({ theme }) => theme.fontSizes.subText};
            color: ${({ theme }) => theme.colors.point1};

            &:before {
                content: '';
                position: absolute;
                top: calc(100% + 0.2rem);
                left: 50%;
                transform: translateX(-50%);
                width: 0;
                height: 0;
                border-left: 0.4rem solid transparent;
                border-right: 0.4rem solid transparent;
                border-top: 0.4rem solid ${({ theme }) => theme.colors.point1};
            }
        }
    }
`;

export { PercentWrap, Title, PercentBar, Bar };
