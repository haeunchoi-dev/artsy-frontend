import styled from 'styled-components';

import introUrl from '@assets/images/img-intro.png';

const MainVisual = styled.section`
    overflow: hidden;
    position: relative;
    min-height: 200px;
    height: 40vh;
    border-radius: 1rem;

    /* media */
    ${({ theme }) => theme.media.labtop} {
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

    h2 {
        font-size: ${({ theme }) => theme.fontSizes.h5};
    }
    p {
        margin-top: 1rem;
        color: #909090;
        font-size: ${({ theme }) => theme.fontSizes.text};
    }

    button {
        align-self: center;
        margin-top: auto;
    }

    /* media */
    ${({ theme }) => theme.media.labtop} {
        h2 {
            font-size: ${({ theme }) => theme.fontSizes.h4};
        }
        p {
            margin-top: 2rem;
            font-size: ${({ theme }) => theme.fontSizes.body};
        }
        button {
            align-self: flex-start;
            padding: 0.8rem 2rem;
            font-size: ${({ theme }) => theme.fontSizes.body};
        }
    }
`;

const MainImage = styled.div`
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100%;
    background: url(${introUrl}) no-repeat center / cover;

    &:before {
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.4);
    }

    /* media */
    ${({ theme }) => theme.media.labtop} {
        width: 50%;
        right: 0;
        border-radius: 2rem;

        &:before {
            display: none;
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
    background-color: #fff;

    img {
        width: 2rem;
        height: 2rem;
    }

    /* media */
    ${({ theme }) => theme.media.labtop} {
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
            background-color: #f7f7f7;
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
    ${({ theme }) => theme.media.labtop} {
        & {
            max-width: ${({ theme }) => theme.devicesSize.labtop};
            margin: 10rem auto 0;
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
    background-color: rgba(139, 151, 256, 0.4);

    h3 {
        font-size: ${({ theme }) => theme.fontSizes.h6};
    }

    /* media */
    ${({ theme }) => theme.media.labtop} {
        gap: 3rem;
        margin-top: 10rem;

        h3 {
            font-size: ${({ theme }) => theme.fontSizes.h5};
        }

        button {
            padding: 0.8rem 2rem;
            font-size: ${({ theme }) => theme.fontSizes.body};
        }
    }
`;

export { MainVisual, MainText, MainImage, ServiceInfo, ServiceIcon, MainBanner };
