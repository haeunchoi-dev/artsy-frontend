import styled, { css } from 'styled-components';

import Button from '@components/@common/Button/Button';

const StyledOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: ${({ theme }) => theme.layer.layer6}; // 토스트보단 낮아야해서
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledContentBox = styled.div`
    border-radius: ${({ theme }) => theme.borderRadius.large};
    background-color: ${({ theme }) => theme.colors.background1};
    padding: 24px 16px 16px 16px;
    width: 90%;
    max-width: 420px;
`;

const StyledTitle = styled.h4`
    font-size: ${({ theme }) => theme.fontSizes.body};
    font-weight: 700;
    margin-bottom: 12px;

    ${({ theme }) => theme.media.labtop} {
        font-size: ${({ theme }) => theme.fontSizes.h6};
        margin-bottom: 16px;
    }
`;

const StyledDescription = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.text};
    color: ${({ theme }) => theme.colors.font6};

    ${({ theme }) => theme.media.labtop} {
        font-size: ${({ theme }) => theme.fontSizes.body};
    }
`;

const StyledButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 24px;
`;

const StyledButton = styled(Button)`
    min-width: 80px;
    margin-left: 12px;
    height: 40px;
`;

export { StyledOverlay, StyledContentBox, StyledTitle, StyledDescription, StyledButtonContainer, StyledButton };
