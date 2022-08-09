import { eventClick, authSignupServiceProp } from "../../contexts/contextFiles.types";
import axios from "axios";

const signUpHandler = async (
    { e }: eventClick,
    {
        formData,
        setIsUserLoggedIn,
        setFormData,
        setSignUpErrMsg
    }: authSignupServiceProp,
    navigate) => {

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
                    return error;
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

export { signUpHandler };