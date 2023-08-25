import styled from 'styled-components';

const Wrap = styled.div`
    /* media */
    ${({ theme }) => theme.media.tablet} {
        width: 50rem;
        margin: 0 auto;
    }
`;

const InputBox = styled.div`
    margin-bottom: 3.5rem;
`;

export { Wrap, InputBox };
