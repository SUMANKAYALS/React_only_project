import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DoughnutManBg from "../assets/landing2.jpg";

function Login() {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); // ✅ For navigation

    const handleLoginUser = (e) => {
        e.preventDefault();

        // Here you can add authentication logic
        console.log("Login Successful:", { userName, email });

        // Navigate to home page after login
        navigate("/home");
    };

    return (
        <div
            className="min-h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat relative"
            style={{ backgroundImage: `url(${DoughnutManBg})` }}
        >
            <div className="absolute inset-0 bg-black/60"></div>

            <form
                onSubmit={handleLoginUser}
                className="
                    relative bg-black/50 backdrop-blur-xl 
                    p-8 rounded-2xl shadow-xl 
                    w-full max-w-sm 
                    space-y-6 border border-gray-700 z-10 
                    mx-4
                "
            >
                <h2 className="text-3xl font-extrabold text-center text-white tracking-wide">
                    Welcome Back
                </h2>

                {/* Username */}
                <div className="group">
                    <label htmlFor="userName" className="block mb-1 text-gray-300">
                        Username
                    </label>
                    <input
                        id="userName"
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        onFocus={(e) => e.target.parentElement.classList.add("shake")}
                        onBlur={(e) => e.target.parentElement.classList.remove("shake")}
                        className="
                            w-full p-3 bg-gray-900 border border-gray-700 
                            rounded-lg text-white placeholder-gray-500 
                            focus:ring-2 focus:ring-orange-500
                        "
                        placeholder="Enter your username"
                        required
                    />
                </div>

                {/* Email */}
                <div className="group">
                    <label htmlFor="email" className="block mb-1 text-gray-300">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onFocus={(e) => e.target.parentElement.classList.add("shake")}
                        onBlur={(e) => e.target.parentElement.classList.remove("shake")}
                        className="
                            w-full p-3 bg-gray-900 border border-gray-700 
                            rounded-lg text-white placeholder-gray-500 
                            focus:ring-2 focus:ring-orange-500
                        "
                        placeholder="Enter your email"
                        required
                    />
                </div>

                {/* Password */}
                <div className="group">
                    <label htmlFor="password" className="block mb-1 text-gray-300">
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onFocus={(e) => e.target.parentElement.classList.add("shake")}
                        onBlur={(e) => e.target.parentElement.classList.remove("shake")}
                        className="
                            w-full p-3 bg-gray-900 border border-gray-700 
                            rounded-lg text-white placeholder-gray-500 
                            focus:ring-2 focus:ring-orange-500
                        "
                        placeholder="Enter your password"
                        required
                    />
                </div>

                {/* Button */}
                <button
                    type="submit"
                    className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-orange-700 transition duration-300"
                >
                    Log In
                </button>

                <div className="text-center text-gray-300">
                    <span>Are you new? </span>
                    <Link to="/signup" className="text-orange-400 hover:underline">
                        Create an Account
                    </Link>
                </div>
            </form>

            <style>
                {`
                    .shake {
                        animation: shakeAnim 0.3s ease-in-out;
                    }
                    @keyframes shakeAnim {
                        0% { transform: translateX(0px); }
                        25% { transform: translateX(-4px); }
                        50% { transform: translateX(4px); }
                        75% { transform: translateX(-4px); }
                        100% { transform: translateX(0px); }
                    }
                    .animate-spin-slow {
                        animation: slowSpin 7s linear infinite;
                    }
                    @keyframes slowSpin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                `}
            </style>
        </div>
    );
}

export default Login;
