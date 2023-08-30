import React, { createContext, useEffect, useState } from 'react';
import { useTheme } from 'styled-components';

const HeaderContext = createContext();

const HeaderContextProvider = ({ children }) => {
    const theme = useTheme();
    const [color, setColor] = useState(() => theme.colors.background1);
    const value = { color, setColor };

    useEffect(() => {
        setColor(theme.colors.background1);
    }, [theme, color]);

    return <HeaderContext.Provider value={value}>{children}</HeaderContext.Provider>;
};

export { HeaderContext, HeaderContextProvider };
