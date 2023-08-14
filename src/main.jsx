import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import router from './router';
import theme from '@styles/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <RouterProvider router={router}></RouterProvider>
        </ThemeProvider>
    </React.StrictMode>
);
