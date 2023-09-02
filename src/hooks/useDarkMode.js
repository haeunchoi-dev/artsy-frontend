import { useContext } from 'react';
import { DarkModeContext } from '@contexts/ThemeContext';

const useDarkMode = () => useContext(DarkModeContext);

export default useDarkMode;
