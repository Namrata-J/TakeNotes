import { eventClick, authloginServiceProp } from "../../contexts/contextFiles.types";
import axios from "axios";

const loginHandler = async (
    { e }: eventClick,
    {
        formData,
        setIsUserLoggedIn,
        setFormData,
        setLogInErrMsg
    }: authloginServiceProp,
    navigate) => {

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

export { loginHandler };