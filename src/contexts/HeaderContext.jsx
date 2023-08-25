import React, { createContext, useState } from 'react';

const HeaderContext = createContext();

const HeaderContextProvider = ({ children }) => {
    const [color, setColor] = useState('#fff');
    const [ticketId, setTicketId] = useState('');

    const value = { color, setColor, ticketId, setTicketId };

    return <HeaderContext.Provider value={value}>{children}</HeaderContext.Provider>;
};

export { HeaderContext, HeaderContextProvider };
