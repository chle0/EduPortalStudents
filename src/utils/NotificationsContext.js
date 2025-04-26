import React, { createContext, useState, useContext } from 'react';

const NotificationsContext = createContext();

export const NotificationsProvider = ({ children }) => {
    const [hasUnreadNotifications, setHasUnreadNotifications] = useState(false);

    return (
        <NotificationsContext.Provider value={{ hasUnreadNotifications, setHasUnreadNotifications }}>
            {children}
        </NotificationsContext.Provider>
    );
};

export const useNotifications = () => useContext(NotificationsContext);
