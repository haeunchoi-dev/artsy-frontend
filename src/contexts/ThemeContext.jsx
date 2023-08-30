import { createContext, useCallback, useEffect, useState } from 'react';
import { lightTheme, darkTheme } from '@styles/theme';
import { ThemeProvider as StyledProvider } from 'styled-components';

export const DarkModeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);

    const theme = useCallback(() => {
        return darkMode ? darkTheme : lightTheme;
    }, [darkMode]);

    const toggleDarkMode = useCallback(() => {
        setDarkMode((prev) => !prev);
        if (!darkMode) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    useEffect(() => {
        const isDark = localStorage.getItem('theme') === 'dark';
        setDarkMode(isDark);
    }, []);

    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            <StyledProvider theme={theme}> {children}</StyledProvider>
        </DarkModeContext.Provider>
    );
};

export default ThemeProvider;
