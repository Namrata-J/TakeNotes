import axios from "axios";

const handleGuestLogin = async (
    setIsUserLoggedIn: React.Dispatch<React.SetStateAction<boolean>>,
    navigate,
    location) => {

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

export { handleGuestLogin };