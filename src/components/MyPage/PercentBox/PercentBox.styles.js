import styled from 'styled-components';

const PercentWrap = styled.div`
    margin-top: 3rem;
    padding: 2rem;
    border-radius: 10px;
    box-sizing: border-box;
    box-shadow: 1px 1px 10px 10px rgba(0, 0, 0, 0.02);
    background-color: ${({ theme }) => theme.colors.background3};
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
    margin-top: 5rem;
    box-sizing: border-box;
    border-radius: 0.5rem;
    background-color: #f7f7f7;
    box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.08);

    > ${Bar} {
        position: absolute;
        top: 0;
        left: 0;
        width: ${({ $percentage }) => 100 - $percentage + '%'};
        height: 100%;
        border-radius: 0.5rem;
        background-color: ${({ theme }) => theme.colors.point1};

        > span {
            position: absolute;
            bottom: calc(100% + 1rem);
            right: 0;
            transform: translateX(50%);
            width: 3rem;
            font-size: ${({ theme }) => theme.fontSizes.subText};
            color: ${({ theme }) => theme.colors.point1};
            text-align: center;

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
