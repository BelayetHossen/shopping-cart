import { Link } from "react-router-dom";
import { PiHandbagSimpleBold } from "react-icons/pi";
import { useContext, useState } from "react";
import { AuthContext } from "../context/ContextProvider";




const Navbar = () => {
    const { user, logOut, setLoading, loading } = useContext(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = () => {
        setLoading(true);
        logOut()
            .then(result => { })
            .catch(error => console.error(error));
        setLoading(false);
    }




    return (
        <>


            <nav className="w-full border-b border-gray-200 py-2">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link href="" className="flex items-center space-x-1">
                        <img src="/src/assets/img/logo.png" className="h-10" alt="Logo" />
                        <h4 className="self-center text-2xl font-bold whitespace-nowrap">Furni<span className="text-[#1E99F5]">Flex</span></h4>
                    </Link>
                    <div className="flex items-center md:order-2 space-x-4">

                        <div className="relative">
                            <PiHandbagSimpleBold className="text-4xl" />
                            <div className="absolute inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-gray-800 border-1 border-black rounded-full -bottom-0 -end-0 dark:border-gray-900">2</div>
                        </div>
                        {
                            user &&
                            <div className="relative inline-block text-left">
                                <button onClick={toggleDropdown}>{user?.email}</button>

                                {isOpen && (
                                    <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg">
                                        <ul className="py-1">
                                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={handleLogout}>
                                                Logout
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        }
                        {
                            !user &&
                            <Link
                                to="/user/register"
                                className="text-white bg-[#1E99F5] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
                            >
                                Login/Register
                            </Link>
                        }
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-sticky"
                            aria-expanded={isMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 17 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 1h15M1 7h15M1 13h15"
                                />
                            </svg>
                        </button>


                    </div>

                    <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:mt-0 md:border-0 font-semibold text-gray-700">
                            <li>
                                <Link
                                    to="/"
                                    className="block py-2 px-5 rounded hover:bg-gray-100"
                                    aria-current="page"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/"
                                    className="block py-2 px-5 rounded bg-gray-100"
                                    aria-current="page"
                                >
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/"
                                    className="block py-2 px-5 rounded hover:bg-gray-100"
                                    aria-current="page"
                                >
                                    Categories
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/"
                                    className="block py-2 px-5 rounded hover:bg-gray-100"
                                    aria-current="page"
                                >
                                    Custom
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/"
                                    className="block py-2 px-5 rounded hover:bg-gray-100"
                                    aria-current="page"
                                >
                                    Blog
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav >





        </>
    );
};

export default Navbar;