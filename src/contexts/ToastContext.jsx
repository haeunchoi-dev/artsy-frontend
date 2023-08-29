import { createContext, useReducer } from 'react';

import ToastContainer from '@components/@common/ToastContainer/ToastContainer.jsx';

export const ToastContext = createContext();

const toastReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TOAST':
            return [...state, action.payload];
        case 'DELETE_TOAST':
            return state.filter((toast) => toast.id !== action.payload);
        default:
            return state;
    }
};

const initialState = [];

export const ToastContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(toastReducer, initialState);
    const show = (message) => {
        const id = Date.now();
        dispatch({ type: 'ADD_TOAST', payload: { id, message } });
    };

    const hide = (id) => {
        dispatch({ type: 'DELETE_TOAST', payload: id });
    };
    return (
        <ToastContext.Provider value={{ show, hide }}>
            <ToastContainer toasts={state} />
            {children}
        </ToastContext.Provider>
    );
};
