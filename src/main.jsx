import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import router from './router';
import theme from '@styles/theme';

import { ToastContextProvider } from '@contexts/ToastContext.jsx';
import { AuthContextProvider } from './contexts/AuthContext';
import { HeaderContextProvider } from '@contexts/HeaderContext';
import GlobalStyle from '@styles/GlobalStyles';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 30,
            refetchOnMount: false,
            refetchOnWindowFocus: false,
        },
    },
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <AuthContextProvider>
                    <ToastContextProvider>
                        <HeaderContextProvider>
                            <GlobalStyle />
                            <RouterProvider router={router}></RouterProvider>
                        </HeaderContextProvider>
                    </ToastContextProvider>
                </AuthContextProvider>
            </ThemeProvider>
        </QueryClientProvider>
    </React.StrictMode>
);
