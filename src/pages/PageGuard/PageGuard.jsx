import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import useAuthContext from '@hooks/useAuthContext';
import { ERROR_MESSAGE } from '@constants/message';
import useToastContext from '@hooks/useToastContext';

const PageGuard = () => {
    const navigate = useNavigate();

    const toast = useToastContext();
    const { isLoading, isLogin } = useAuthContext();

    useEffect(() => {
        if (isLoading === false && isLogin === false) {
            toast.show(ERROR_MESSAGE.auth);
            navigate('/signin');
        }
    }, [isLoading, isLogin]);

    return <>{isLogin === true && <Outlet />}</>;
};

export default PageGuard;
