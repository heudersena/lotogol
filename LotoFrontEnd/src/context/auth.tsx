import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext({});


const AuthProvider = ({ children }) => {

    const [loggedInUser, setLogeedInUser] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <AuthContext.Provider value={{ loggedInUser, isLoggedIn }}>
            {children}
        </AuthContext.Provider >
    );
}

function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('o userAuth não foi iniciado/usado');
    }
    return context;
}

export { AuthProvider, useAuth };