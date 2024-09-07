import { useContext } from "react";
import { AuthContext } from "../context/ContextProvider";
import { FaTimes } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import Loader from "../components/Loader";
import { subTotal } from "../featurs/CartReducer";



const Cart = () => {
    const { dispatch, loading, setLoading, cart } = useContext(AuthContext);


    // increase
    const increase = (id) => {
        dispatch({ type: "Increase", id });
    };

    // decrease
    const decrease = (id) => {
        dispatch({ type: "Decrease", id });
    }

    // Remove system
    const removeCart = (id) => {
        setLoading(true);
        dispatch({ type: "Remove", id });
        toast.success("Remove from cart successfully!");
        setLoading(false);
    };

    return (
        <>
            {
                loading && <Loader />
            }
            <ToastContainer />
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:space-x-10">
                    <div className="w-full md:w-3/4 mb-5">
                        <h4 className="text-2xl font-bold mb-10">An overview of your order</h4>
                        <div className="bg-gray-100 p-4 rounded">

                            {
                                cart.length === 0 &&
                                <div id="alert-2" className="flex items-center p-4 mb-4 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                    <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                                    </svg>
                                    <div className="ms-3 text-sm font-medium">
                                        No product !
                                    </div>
                                </div>

                            }

                            {
                                cart?.map((product) => (
                                    <div key={product.id} className="border-b border-gray-300 mt-3 mb-8 pb-4">
                                        <div className="flex justify-between">
                                            <div>
                                                <div className="flex items-center">
                                                    <div className="border border-gray-400 rounded">
                                                        <button onClick={() => decrease(product.id)} className="px-2 py-1 text-2xl">-</button>
                                                        <span className="px-2 py-1 text-2xl">{product.quantity}</span>
                                                        <button onClick={() => increase(product.id)} className="px-2 py-1 text-2xl">+</button>
                                                    </div>
                                                    <div className="flex ms-2">
                                                        <img className="w-20 h-20 bg-gray-200 p-2 rounded" src={product.photo} alt="" />
                                                        <h4 className="ms-2 text-lg">{product.title}</h4>
                                                    </div>
                                                </div>

                                            </div>
                                            <div>
                                                <button onClick={() => removeCart(product.id)}><FaTimes className="text-gray-500" /></button>
                                            </div>
                                        </div>
                                        <div className="text-end font-bold">
                                            €{product.selling_price}.00
                                        </div>
                                    </div>
                                ))
                            }






                        </div>
                    </div>
                    <div className="w-full md:w-1/4">
                        <h4 className="text-2xl font-bold mb-10">Order details</h4>
                        <div className="bg-gray-100 border border-gray-400 p-4 rounded">
                            <div className="flex justify-between text-gray-600">
                                <div>Subtotal</div>
                                <div>€{subTotal(cart)}.00</div>
                            </div>
                            <div className="flex justify-between py-1 text-gray-600">
                                <div>Shipping</div>
                                <div>Free</div>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <div>Estimated Tax</div>
                                <div>€-</div>
                            </div>
                            <hr className="my-5" />
                            <div className="flex justify-between text-lg font-bold">
                                <div>Total</div>
                                <div>€{subTotal(cart)}.00</div>
                            </div>
                        </div>
                        <button className="bg-gray-800 rounded text-white w-full py-2 mt-4">Go to Checkout</button>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Cart;