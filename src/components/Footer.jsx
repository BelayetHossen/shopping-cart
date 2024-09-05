import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { SiVexxhost } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";



const Footer = () => {
    return (
        <>
            <footer className="bg-[#0E0E0E]">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="md:flex md:justify-between pt-6 pb-20">

                        <div className="mb-6 md:mb-0 w-2/6">
                            <Link href="" className="flex items-center space-x-1">
                                <img src="/src/assets/img/logo.png" className="h-10" alt="Logo" />
                                <h4 className="self-center text-white text-2xl font-bold whitespace-nowrap">Furni<span className="text-[#1E99F5]">Flex</span></h4>
                            </Link>
                        </div>

                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 w-4/6">
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">About US</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium flex flex-col space-y-3">
                                    <li className="">
                                        <a href="" className="hover:underline">Master Plan</a>
                                    </li>
                                    <li>
                                        <a href="" className="hover:underline">JobsS</a>
                                    </li>
                                    <li>
                                        <a href="" className="hover:underline">Invest</a>
                                    </li>
                                    <li>
                                        <a href="" className="hover:underline">Pressroom</a>
                                    </li>
                                    <li>
                                        <a href="" className="hover:underline">Blog</a>
                                    </li>
                                    <li>
                                        <a href="" className="hover:underline">Contact</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Explore EEVE</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium flex flex-col space-y-3">
                                    <li className="">
                                        <a href="" className="hover:underline">Unlock my Robot Power</a>
                                    </li>
                                    <li>
                                        <a href="" className="hover:underline">Starlight</a>
                                    </li>
                                    <li>
                                        <a href="" className="hover:underline">Robot Platform</a>
                                    </li>
                                    <li>
                                        <a href="" className="hover:underline">EEVE Roadmap</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Community & Support</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium flex flex-col space-y-3">
                                    <li className="">
                                        <a href="#" className="hover:underline">Willow X Community</a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:underline">Developer & Maker Access</a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:underline">Special Cases</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />


                    <div className="flex flex-col md:flex-row items-center justify-between pt-2 pb-6">
                        <div className="flex mt-4 sm:justify-center sm:mt-0">
                            <a href="#" className="text-gray-300 hover:text-gray-900 dark:hover:text-white ms-5">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-gray-900 dark:hover:text-white ms-5">
                                <FaInstagram />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-gray-900 dark:hover:text-white ms-5">
                                <SiVexxhost />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-gray-900 dark:hover:text-white ms-5">
                                <FaLinkedinIn />
                            </a>
                        </div>

                        <div className={`items-center justify-between w-full flex w-auto`} id="navbar-sticky">
                            <ul className="flex flex-col p-4 md:p-0 mt-4  rounded-lg flex-col md:flex-row md:mt-0 md:border-0 font-semibold text-gray-500">
                                <li>
                                    <Link
                                        to="/"
                                        className="block py-2 px-5 rounded hover:bg-gray-500"
                                        aria-current="page"
                                    >
                                        March22 Recap
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/"
                                        className="block py-2 px-5 rounded hover:bg-gray-500"
                                        aria-current="page"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/"
                                        className="block py-2 px-5 rounded hover:bg-gray-500"
                                        aria-current="page"
                                    >
                                        General Terms
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/"
                                        className="block py-2 px-5 rounded hover:bg-gray-500"
                                        aria-current="page"
                                    >
                                        Custom
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/"
                                        className="block py-2 px-5 rounded hover:bg-gray-500"
                                        aria-current="page"
                                    >
                                        Contact
                                    </Link>
                                </li>

                            </ul>
                        </div>

                        <p className="text-sm text-gray-400 sm:text-center">United States (English)</p>

                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-sm text-gray-600 ">EEVE © 2024. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;