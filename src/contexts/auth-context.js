import React, { useState, useContext, createContext } from "react";

const authContext = createContext({isUserLoggedIn: false});

const AuthProvider = ({ children }) => {

    const [ isUserLoggedIn, setIsUserLoggedIn ] = useState(false);

    return <authContext.Provider value={{ isUserLoggedIn, setIsUserLoggedIn }}>
        { children }
    </authContext.Provider>
}

const useAuth = () => useContext(authContext);

export { useAuth, AuthProvider };