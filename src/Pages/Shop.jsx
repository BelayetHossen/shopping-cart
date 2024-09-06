import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdEuro } from "react-icons/md";
import { ToastContainer } from "react-toastify";



const Shop = () => {
    const [products, setProducts] = useState([]);

    // Fetching data from product.json
    useEffect(() => {
        fetch('/product.json')
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);


    console.log(products);


    return (
        <>
            <ToastContainer />
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="flex flex-col md:flex-row space-x-10 my-6 w-full">
                    <ul className="flex-column space-y-2 text-sm font-medium text-gray-500 md:me-4 mb-4 md:mb-0 pe-4 border-e w-full md:w-1/4">
                        <li>
                            <Link
                                to=""
                                className="inline-flex items-center px-4 py-3 text-white bg-gray-800 rounded-lg active w-full"
                                aria-current="page"
                            >
                                Rocking chair
                            </Link>
                        </li>
                        <li>
                            <Link
                                to=""
                                className="inline-flex items-center px-4 py-3 rounded-lg active w-full border-b"
                                aria-current="page"
                            >
                                Side chair
                            </Link>
                        </li>
                        <li>
                            <Link
                                to=""
                                className="inline-flex items-center px-4 py-3 rounded-lg active w-full border-b"
                                aria-current="page"
                            >
                                Lounge chair
                            </Link>
                        </li>

                    </ul>

                    <div className="text-medium rounded-lg w-3/4 md:grid grid-cols-3 gap-4">

                        {
                            products?.map((product) => (
                                <div key={product.id} className="w-full bg-white border border-gray-200 rounded-lg shadow">
                                    <img className="p-4 rounded-t-lg bg-gray-100 w-full" src={product.photo} alt="product image" />
                                    <div className="px-5 pb-5">
                                        <a href="#">
                                            <h5 className="text-lg font-semibold tracking-tight text-gray-900 mt-4">
                                                {product.title}
                                            </h5>
                                        </a>
                                        <div className="flex items-center justify-between mt-2.5 mb-5">
                                            <div className="flex items-center">
                                                <div className="flex items-center">
                                                    <MdEuro />
                                                    <h6 className="me-3">{product.selling_price}</h6>
                                                </div>
                                                <div className="flex items-center text-gray-500">
                                                    <MdEuro />
                                                    <del className="">{product.price}</del>
                                                </div>
                                            </div>
                                            <h6 className="text-red-500">{Math.ceil(((product.price - product.selling_price) / product.price) * 100)}% OFF</h6>

                                        </div>
                                        <div className="mb-6 text-gray-400">
                                            <p>{product.short_description}</p>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <a href="#" className="text-white bg-gray-900 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center w-full">
                                                Add to cart
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }


                    </div>
                </div>




                <nav aria-label="">
                    <ul className="flex items-center space-x-2 h-8 text-sm m-auto w-96 my-10">
                        <li>
                            <a
                                href="#"
                                className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg bg-gray-200"
                            >

                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border-2 border-gray-300 bg-gray-100 text-gray-700"
                            >
                                1
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                            >
                                2
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                aria-current="page"
                                className="z-10 flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                            >
                                ...
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                            >
                                4
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                            >
                                5
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
                            >
                                <span className="sr-only">Next</span>
                                <svg
                                    className="w-2.5 h-2.5 rtl:rotate-180"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 6 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 9 4-4-4-4"
                                    />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </nav>


            </div>

        </>
    );
};

export default Shop;