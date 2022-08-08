import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useContext, createContext } from "react";
import { eventClick, formData, locationProp, childrenProp, authContextProps } from "./contextFiles.types";

const initialFormData = {
    userEmail: "",
    userPwd: ""
}

const initialAuthValue = {
    isUserLoggedIn: false,
    setIsUserLoggedIn: () => { },
    formData: initialFormData,
    setFormData: () => { },
    signUpHandler: async () => { },
    signUpErrMsg: "",
    setSignUpErrMsg: () => { },
    logInErrMsg: "",
    setLogInErrMsg: () => { },
    loginHandler: async () => { },
    handleGuestLogin: async () => { }
};

const authContext = createContext<authContextProps>(initialAuthValue);

const AuthProvider = ({ children }: childrenProp): JSX.Element => {

    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const [signUpErrMsg, setSignUpErrMsg] = useState("");
    const [logInErrMsg, setLogInErrMsg] = useState("");
    const [formData, setFormData] = useState<formData>(initialFormData)
    const navigate = useNavigate();
    const location: locationProp = useLocation();

    const signUpHandler = async ({ e }: eventClick) => {
        e.preventDefault();
        if (formData.userEmail !== "" && formData.userPwd !== "") {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.userEmail)) {
                if (formData.userPwd.length >= 6 && /[a-zA-z]/.test(formData.userPwd) && /[0-9]/.test(formData.userPwd)) {
                    try {
                        const response = await axios.post(`/api/auth/signup`, {
                            email: formData.userEmail,
                            password: formData.userPwd
                        });
                        localStorage.setItem("token", response.data.encodedToken)
                        setIsUserLoggedIn(true);
                        setFormData({ userEmail: "", userPwd: "" })
                        navigate("/home")
                    } catch (error) {
                        console.log(error);
                    }
                } else {
                    setSignUpErrMsg("Pwd should be alphanumeric and have atleast 6 characters.")
                }
            } else {
                setSignUpErrMsg("Your email format isn't correct")
            }
        } else {
            setSignUpErrMsg("Please fill out all the fields")
        }
    }

    const loginHandler = async ({ e }: eventClick) => {
        e.preventDefault();
        if (formData.userEmail !== "" && formData.userPwd !== "") {
            try {
                const response = await axios.post("/api/auth/login", {
                    email: formData.userEmail,
                    password: formData.userPwd
                });
                localStorage.setItem("token", response.data.encodedToken)
                setIsUserLoggedIn(true)
                setFormData({ ...formData, userEmail: "", userPwd: "" })
                navigate("/home")
            } catch (error) {
                console.log(error)
            }
        } else {
            setLogInErrMsg("Please fill out all the fields")
        }
    }

    const handleGuestLogin = async () => {
        try {
            const response = await axios.post("/api/auth/login", {
                email: "adarshbalika@gmail.com",
                password: "adarshBalika123"
            });
            if (response) {
                setIsUserLoggedIn(true)
                if (location.state === null) {
                    navigate("/home")
                } else
                    navigate(location?.state?.from?.pathname, { replace: true })
            }
        } catch (error) {
            console.log(error)
        }
    }

    return <authContext.Provider
        value={{
            isUserLoggedIn,
            setIsUserLoggedIn,
            formData,
            setFormData,
            signUpHandler,
            signUpErrMsg,
            setSignUpErrMsg,
            logInErrMsg,
            setLogInErrMsg,
            loginHandler,
            handleGuestLogin
        }}>
        {children}
    </authContext.Provider>
}

const useAuth = () => useContext(authContext);

export { useAuth, AuthProvider };