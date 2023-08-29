import { createContext, useEffect, useState } from 'react';

import useAuthQuery from '@hooks/@queries/useAuthQuery';

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const { data, isLoading } = useAuthQuery();
    const [isLogin, setIsLogin] = useState(() => data === undefined ? false : data);

    useEffect(() => {
        setIsLogin(data);
    }, [data]);

    return <AuthContext.Provider value={{ isLoading, isLogin, setIsLogin }}>{children}</AuthContext.Provider>;
};

export { AuthContextProvider, AuthContext };
