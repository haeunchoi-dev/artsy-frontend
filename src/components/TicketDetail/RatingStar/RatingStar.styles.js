import styled from 'styled-components';

const IconWrap = styled.div`
    display: inline;
    margin: 10px 0 20px 0;

    ${({ theme }) => theme.media.labtop} {
        margin: 0;
    }
`;

const StarImg = styled.img`
    max-width: 100%;
    width: 20px;
    height: 20px;

    opacity: ${({ $full }) => ($full ? 0.4 : 1)};
`;

export { IconWrap, StarImg };
