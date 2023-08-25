import React from 'react';
import StyledPageTitle from './PageTitle.styles';

const PageTitle = ({ children }) => {
    return (
        <StyledPageTitle>
            <h3>{children}</h3>
        </StyledPageTitle>
    );
};

export default PageTitle;
