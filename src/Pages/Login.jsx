import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../context/ContextProvider";
import Social from "../components/Social";
import { toast, ToastContainer } from "react-toastify";
import Loader from "../components/Loader";




const Login = () => {
    const { loginEmailPassword, setLoading, loading } = useContext(AuthContext);
    const [warning, setWarning] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const loginEmailPass = event => {
        event.preventDefault();
        setLoading(true);
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;


        loginEmailPassword(email, password)
            .then(result => {
                toast.success("User loggedIn successfully! Redirecting.....")
                form.reset();
                setWarning('');
                setTimeout(function () {
                    navigate(from, { replace: true })
                    setLoading(false);
                }, 3000);
            })
            .catch(error => {
                setWarning(error.message);
                setLoading(false);
            })
    }




    return (

        <>
            {
                loading && <Loader />
            }
            <div className="max-w-screen-xl flex flex-col md:flex-row items-center justify-between mx-auto px-4">
                <ToastContainer />

                <div className="flex items-center w-full md:w-1/2 md:p-24">
                    <form onSubmit={loginEmailPass} className="flex flex-col w-full h-full pb-6 text-center bg-gray-200 rounded-xl p-8">

                        {
                            location.state &&
                            <div id="alert-2" className="flex items-center p-4 mb-4 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                                </svg>
                                <div className="ms-3 text-sm font-medium">
                                    You have to login first!
                                </div>
                            </div>

                        }
                        {
                            warning &&
                            <div id="alert-2" className="flex items-center p-4 mb-4 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                                </svg>
                                <div className="ms-3 text-sm font-medium">
                                    {warning}
                                </div>
                            </div>

                        }

                        <h3 className="text-2xl font-extrabold text-dark-grey-900">Welcome Back!</h3>
                        <p className="mt-2 mb-6 text-gray-500 font-bold">Signup for purchase your desire products</p>

                        <div className="flex flex-col bg-white rounded px-3 py-2 border-2 border-gray-300 mb-4">
                            <label htmlFor="email" className="text-start text-gray-500">
                                Email address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                className="p-3"
                            />
                        </div>

                        <div className="flex flex-col bg-white rounded px-3 py-2 border-2 border-gray-300 mb-4">
                            <label htmlFor="password" className="text-start text-gray-500">
                                Password
                            </label>
                            <input
                                id="password"
                                password="password"
                                type="password"
                                className="p-3"
                            />
                        </div>

                        <Link to={''} className="text-end text-blue-600 -mt-2">Forgot Password</Link>
                        <div className="flex flex-row justify-between mb-8">
                            <label className="relative inline-flex items-center mr-3 cursor-pointer select-none">
                                <input type="checkbox" className="mr-2" />
                                <p className="text-gray-800">I agree to the <span className="underline">Terms & Policy</span></p>
                            </label>

                        </div>
                        <button className="w-full px-6 py-5 mb-5 text-sm font-bold text-white rounded-lg hover:bg-purple-blue-600 focus:ring-4 focus:ring-purple-blue-100 bg-gray-800">
                            Sign In
                        </button>


                        <div className="flex items-center mb-3">
                            <hr className="h-0 border-b border-solid border-grey-500 grow" />
                            <p className="mx-4 text-grey-600">or</p>
                            <hr className="h-0 border-b border-solid border-grey-500 grow" />
                        </div>

                        <Social />

                        <p className="text-md leading-relaxed text-grey-900">
                            Have an account?{' '}
                            <Link to="/user/register" className="font-bold text-blue-700 hover:text-gray-800">
                                Sign Up
                            </Link>
                        </p>

                    </form>
                </div>

                <div
                    className="md:w-1/2 w-full h-[130vh] bg-cover bg-center"
                    style={{ backgroundImage: `url('/src/assets/img/chris-lee-70l1tDAI6rM-unsplash 1.png')` }}
                >
                    <div className="flex flex-col items-center justify-center h-full p-6 text-center">
                        <img
                            src="/src/assets/img/logo.png"
                            className="h-24 mb-4"
                            alt="Logo"
                        />
                        <h4 className="text-4xl font-bold text-white mb-4">
                            Furni<span className="text-[#1E99F5]">Flex</span>
                        </h4>
                        <p className="text-white w-3/4">
                            Discover a seamless shopping experience with our curated collection of products. From fashion to electronics, we bring quality.
                        </p>
                    </div>

                </div>



            </div>
        </>
    );
};

export default Login;