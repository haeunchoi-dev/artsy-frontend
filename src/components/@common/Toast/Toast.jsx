import { useEffect, useRef } from 'react';

import StyledToast from './Toast.styles';
import useToastContext from '@hooks/useToastContext';

const Toast = ({ message, id }) => {
    const toast = useToastContext();
    const timerId = useRef(null);

    useEffect(() => {
        timerId.current = setTimeout(() => {
            toast.hide(id);
        }, 2000);

        return () => {
            clearTimeout(timerId.current);
        };
    }, []);
    return <StyledToast>{message}</StyledToast>;
};
export default Toast;
