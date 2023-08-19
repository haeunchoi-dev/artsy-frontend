import styled, { css } from 'styled-components';

const StyledBarWrap = styled.div``;

const StyledLegend = styled.div`
    width: ${({ $width }) => ($width ? $width + 'rem' : '100%')};
    text-align: right;
    margin-bottom: 1rem;
    font-size: ${({ theme }) => theme.fontSizes.subText};

    > span:first-of-type {
        font-weight: bold;
        font-size: ${({ theme }) => theme.fontSizes.text};
    }
    > span:last-of-type {
        font-weight: bold;
        color: ${({ theme, $grade }) => theme.gradeColor[$grade]};
    }
`;

const StyledBar = styled.div`
    overflow: hidden;
    position: relative;
    width: 100%;
    height: ${({ $height }) => ($height ? $height + 'rem' : '1rem')};
    border-radius: ${({ $height }) => ($height ? $height / 2 + 'rem' : '0.5rem')};
    background-color: #fff;
    box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.08);

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: ${({ $percent }) => $percent + '%'};
        height: 100%;
        border-radius: ${({ $height }) => ($height ? $height / 2 + 'rem' : '0.5rem')};
        background-color: ${({ theme, $grade }) => theme.gradeColor[$grade]};
    }
`;

export { StyledBarWrap, StyledBar, StyledLegend };
