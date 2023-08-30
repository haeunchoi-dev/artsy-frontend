import styled from 'styled-components';

import Button from '@components/@common/Button/Button';
import introUrl from '@assets/images/img-intro.png';

const MainVisual = styled.section`
    overflow: hidden;
    position: relative;
    min-height: 30rem;
    height: 40vh;
    border-radius: 1rem;

    /* media */
    ${({ theme }) => theme.media.tablet} {
        height: 50vh;
    }
`;

const MainText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
    padding: 3rem 2rem;
    box-sizing: border-box;
    color: #fff;

    h2 {
        font-size: ${({ theme }) => theme.fontSizes.h5};
    }
    p {
        margin-top: 1rem;
        font-size: ${({ theme }) => theme.fontSizes.text};
    }

    button {
        align-self: center;
        margin-top: auto;
    }

    /* media */
    ${({ theme }) => theme.media.tablet} {
        color: ${({ theme }) => theme.colors.black};

        h2 {
            font-size: ${({ theme }) => theme.fontSizes.h4};
        }
        p {
            margin-top: 2rem;
            font-size: ${({ theme }) => theme.fontSizes.body};
        }
        button {
            align-self: flex-start;
            padding: 0.8rem 4rem;
            font-size: ${({ theme }) => theme.fontSizes.body};
        }
    }
`;

const MainImage = styled.div`
    z-index: -1;
    overflow: hidden;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(146deg, #8b97ff 0%, #7a85e0 100%);

    &:before {
        content: '';
        position: absolute;
        display: block;
        width: 20rem;
        height: 20rem;
        background: url(${introUrl}) no-repeat right bottom / 100%;
        right: 0;
        bottom: 0;
    }

    /* media */
    ${({ theme }) => theme.media.tablet} {
        width: 40%;
        right: 0;
        border-radius: 2rem;

        &:before {
            width: 28rem;
            height: 28rem;
        }
    }
`;

const ServiceIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.background4};

    img {
        width: 2rem;
        height: 2rem;
    }

    /* media */
    ${({ theme }) => theme.media.tablet} {
        width: 8rem;
        height: 8rem;

        img {
            width: 4rem;
            height: 4rem;
        }
    }
`;

const ServiceInfo = styled.div`
    margin-top: 4rem;

    > ul {
        display: flex;
        flex-direction: column;

        > li {
            display: flex;
            align-items: center;
            gap: 1.6rem;
            width: 80%;
            padding: 1rem 2rem;
            box-sizing: border-box;
            background-color: ${({ theme }) => theme.colors.background6};
            font-size: ${({ theme }) => theme.fontSizes.text};

            + li {
                margin-top: 2rem;
            }

            span {
                br {
                    display: none;
                }
            }
        }

        > li:nth-child(2n) {
            align-self: flex-end;
            justify-content: flex-end;
            border-radius: 0.8rem 0 0 0.8rem;

            span {
                order: -1;
            }
        }
        > li:nth-child(2n + 1) {
            align-self: flex-start;
            border-radius: 0 0.8rem 0.8rem 0;
        }
    }

    /* media */
    ${({ theme }) => theme.media.tablet} {
        & {
            max-width: ${({ theme }) => theme.devicesSize.labtop};
            margin: 10rem auto 0;
            padding: 0 20px;
        }

        > ul {
            flex-direction: row;
            gap: 10rem;

            > li {
                flex-direction: column;
                gap: 2rem;
                padding: 3rem 6rem;
                text-align: center;
                font-size: ${({ theme }) => theme.fontSizes.body};

                + li {
                    margin-top: 0;
                }
                span {
                    br {
                        display: block;
                    }
                }
            }

            > li:nth-child(2n) {
                justify-content: flex-start;
                border-radius: 1rem;

                span {
                    order: 0;
                }
            }
            > li:nth-child(2n + 1) {
                border-radius: 1rem;
            }
        }
    }
`;

const MainBanner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    margin-top: 4rem;
    padding: 4rem;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.point2};
    text-align: center;
    color: #fff;

    h3 {
        font-size: ${({ theme }) => theme.fontSizes.h6};
    }

    br {
        display: block;
    }

    /* media */
    ${({ theme }) => theme.media.tablet} {
        gap: 3rem;
        margin-top: 10rem;

        br {
            display: none;
        }

        h3 {
            font-size: ${({ theme }) => theme.fontSizes.h5};
        }

        button {
            padding: 0.8rem 2rem;
            font-size: ${({ theme }) => theme.fontSizes.body};
        }
    }
`;

const BannerButton = styled(Button)`
    color: ${({ theme }) => theme.colors.font4};
    background-color: ${({ theme }) => theme.colors.background4};
`;
const MainButton = styled(Button)`
    padding: 0 4rem;
    background-color: #fff;
    color: ${({ theme }) => theme.colors.font3};
    background-color: ${({ theme }) => theme.colors.background4};
    /* media */
    ${({ theme }) => theme.media.tablet} {
        color: #fff;
        background-color: ${({ theme }) => theme.colors.point1};
    }
`;

export { MainVisual, MainText, MainImage, ServiceInfo, ServiceIcon, MainBanner, BannerButton, MainButton };
