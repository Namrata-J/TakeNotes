import { useState, useContext, createContext } from "react";
import { formData, childrenProp, authContextProps } from "./contextFiles.types";

const initialFormData = {
    userEmail: "",
    userPwd: ""
}

const initialAuthValue = {
    isUserLoggedIn: false,
    setIsUserLoggedIn: () => { },
    formData: initialFormData,
    setFormData: () => { },
    signUpErrMsg: "",
    setSignUpErrMsg: () => { },
    logInErrMsg: "",
    setLogInErrMsg: () => { }
};

const authContext = createContext<authContextProps>(initialAuthValue);

const AuthProvider = ({ children }: childrenProp): JSX.Element => {

    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const [signUpErrMsg, setSignUpErrMsg] = useState("");
    const [logInErrMsg, setLogInErrMsg] = useState("");
    const [formData, setFormData] = useState<formData>(initialFormData)

return <authContext.Provider
    value={{
        isUserLoggedIn,
        setIsUserLoggedIn,
        formData,
        setFormData,
        signUpErrMsg,
        setSignUpErrMsg,
        logInErrMsg,
        setLogInErrMsg
    }}>
    {children}
</authContext.Provider>
}

const useAuth = () => useContext(authContext);

export { useAuth, AuthProvider };