import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import router from './router';
import theme from '@styles/theme';

import { ToastContextProvider } from '@contexts/ToastContext.jsx';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <ToastContextProvider>
                    <RouterProvider router={router}></RouterProvider>
                </ToastContextProvider>
            </ThemeProvider>
        </QueryClientProvider>
    </React.StrictMode>
);
