
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../context/ContextProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Social = () => {
    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const LoginGoogleHandler = (e) => {
        e.preventDefault();

        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <>
            <div className="flex space-x-4 mb-6">
                <a
                    className="flex items-center justify-center w-full py-3 border-2 border-gray-300 rounded text-sm hover:bg-white"
                    href="#"
                    onClick={LoginGoogleHandler}
                >
                    <FcGoogle className="text-2xl mr-2" />
                    Sign in with Google
                </a>
                <a
                    className="flex items-center justify-center w-full py-3 border-2 border-gray-300 rounded text-sm hover:bg-white"
                    href="#"
                >
                    <FaApple className="text-2xl mr-2" />
                    Sign in with Apple
                </a>
            </div>
        </>
    );
};

export default Social;