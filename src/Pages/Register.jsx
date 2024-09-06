import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/ContextProvider";
import Social from "../components/Social";
import { toast, ToastContainer } from "react-toastify";
import Loader from "../components/Loader";




const Register = () => {
    const { userFullName, createUser, setLoading, loading } = useContext(AuthContext);


    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const submitRegister = (e) => {
        e.preventDefault();
        setLoading(true);
        const form = e.target;
        const fname = form.fname.value;
        const lname = form.lname.value;
        const email = form.email.value;
        const password = form.password.value;


        function checkPassword(str) {
            const passValRegEx = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
            return passValRegEx.test(str);
        }
        if (!checkPassword(password)) {
            toast.error("Password must be 8 caracters and numeric and special carecters mix")
            setLoading(false);
        }



        if (email === '') {
            toast.error("The email field is requrired!")
            setLoading(false);
        }
        if (password === '') {
            toast.error("The password field is requrired!")
            setLoading(false);
        }


        if (email != '' && password != '' && checkPassword) {
            createUser(email, password)
                .then(result => {
                    const registeredUser = result.user;
                    update(registeredUser, fname, lname);
                    form.reset();
                    setTimeout(function () {
                        navigate(from, { replace: true })
                        setLoading(false);
                    }, 3000);

                })
                .catch(error => {
                    console.log(error);
                    setLoading(false);
                })
        }


    }

    const update = (registeredUser, fname, lname) => {
        userFullName(registeredUser, fname, lname)
            .then(() => {
                toast.success("User registered successfully! Redirecting.....")
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
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
                    <form onSubmit={submitRegister} className="flex flex-col w-full h-full pb-6 text-center bg-gray-200 rounded-xl p-8">
                        <h3 className="mb-3 text-2xl font-extrabold text-dark-grey-900">Welcome to</h3>
                        <Link href="" className="text-center space-x-1">
                            <h4 className="text-6xl font-bold whitespace-nowrap text-center">Furni<span className="text-[#1E99F5]">Flex</span></h4>
                        </Link>
                        <p className="my-4 text-gray-500 font-bold">Signup for purchase your desire products</p>

                        <div className="flex space-x-1 mb-4">
                            <div className="flex flex-col bg-white rounded px-3 py-2 w-1/2 border-2 border-gray-300">
                                <label htmlFor="fname" className="text-start text-gray-500">
                                    First name (optional)
                                </label>
                                <input
                                    id="fname"
                                    name="fname"
                                    type="text"
                                    className="p-3"
                                />
                            </div>
                            <div className="flex flex-col bg-white rounded px-3 py-2 w-1/2 border-2 border-gray-300">
                                <label htmlFor="lname" className="text-start text-gray-500">
                                    Last name (optional)
                                </label>
                                <input
                                    id="lname"
                                    name="lname"
                                    type="text"
                                    className="p-3"
                                />
                            </div>
                        </div>


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
                                name="password"
                                type="password"
                                className="p-3"
                            />
                        </div>


                        <div className="flex flex-row justify-between mb-8">
                            <label className="relative inline-flex items-center mr-3 cursor-pointer select-none">
                                <input type="checkbox" className="mr-2" />
                                <p className="text-gray-800">I agree to the <span className="underline">Terms & Policy</span></p>
                            </label>

                        </div>
                        <button className="w-full px-6 py-5 mb-5 text-sm font-bold text-white rounded-lg hover:bg-purple-blue-600 focus:ring-4 focus:ring-purple-blue-100 bg-gray-800">
                            Sign Up
                        </button>


                        <div className="flex items-center mb-3">
                            <hr className="h-0 border-b border-solid border-grey-500 grow" />
                            <p className="mx-4 text-grey-600">or</p>
                            <hr className="h-0 border-b border-solid border-grey-500 grow" />
                        </div>

                        <Social />

                        <p className="text-md leading-relaxed text-grey-900">
                            Have an account?{' '}
                            <Link to="/user/login" className="font-bold text-blue-700 hover:text-gray-800">
                                Sign In
                            </Link>
                        </p>

                    </form>
                </div>

                <div
                    className="w-full h-[140vh] bg-cover bg-center"
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

export default Register;