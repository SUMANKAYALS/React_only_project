import React, { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import BgImage from "../assets/cart-bg.jpg"; // background image

function CartPage() {
    const { cart, removeFromCart, setCart } = useContext(CartContext);

    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

    const handleOrder = () => {
        if (cart.length === 0) {
            toast.error("Your cart is empty!", { autoClose: 2000 });
            return;
        }

        toast.success("Order placed successfully!", { autoClose: 3000 });
        console.log("Order details:", cart);
        setCart([]);
    };

    return (
        <div className="min-h-screen relative">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: `url(${BgImage})` }}
            ></div>

            {/* Dark overlay only for main content */}
            <div className="absolute top-0 left-0 right-0 z-10 bg-black/60 min-h-screen"></div>

            {/* Content */}
            <div className="relative z-20 flex flex-col min-h-screen">
                {/* Navbar */}
                <div className="z-30">
                    <Navbar />
                </div>

                {/* Cart Section */}
                <div className="max-w-4xl mx-auto p-6 py-10 text-white">
                    <h2 className="text-3xl font-bold mb-6 text-center drop-shadow-lg">Your Cart</h2>

                    {cart.length === 0 ? (
                        <p className="text-center text-gray-300 text-lg">Your cart is empty.</p>
                    ) : (
                        <div className="space-y-4">
                            {cart.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-between bg-white/20 p-4 rounded-lg shadow-md backdrop-blur-sm"
                                >
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-20 h-20 object-cover rounded-lg"
                                        />
                                        <p className="font-semibold text-lg text-white">{item.name}</p>
                                    </div>
                                    <p className="text-gray-100 font-semibold">${item.price}</p>
                                    <button
                                        onClick={() => removeFromCart(item.name)}
                                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}

                    {cart.length > 0 && (
                        <div className="mt-6 text-center">
                            <h3 className="text-2xl font-bold text-white">
                                Total: <span className="text-orange-400">${totalPrice}</span>
                            </h3>
                            <button
                                onClick={handleOrder}
                                className="mt-4 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition"
                            >
                                Place Order
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Footer stays separate, above background but not in overlay */}
            <div className="relative z-10">
                <Footer />
            </div>

            {/* Toast container */}
            <ToastContainer />
        </div>
    );
}

export default CartPage;
