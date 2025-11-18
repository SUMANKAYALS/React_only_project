import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // ✅ import useNavigate
import DoughnutManBg from "../assets/2.jpg";

function Signup() {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate(); // ✅ initialize navigate

    const handleSignupUser = (e) => {
        e.preventDefault();

        // Optional: simple password match check
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        console.log("Signup...", { userName, email, password });

        // Redirect to home page after signup
        navigate("/home");
    };

    return (
        <div
            className="min-h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat bg-fixed relative"
            style={{ backgroundImage: `url(${DoughnutManBg})` }}
        >
            <div className="absolute inset-0 bg-black/60"></div>

            <form
                onSubmit={handleSignupUser}
                className="relative bg-black/50 backdrop-blur-xl p-8 rounded-2xl shadow-xl w-full max-w-sm space-y-6 border border-gray-700 z-10"
            >
                <h2 className="text-3xl font-extrabold text-center text-white tracking-wide">
                    Create Account
                </h2>

                {/* USERNAME */}
                <div className="group">
                    <label htmlFor="userName" className="block mb-1 text-gray-300">
                        Username
                    </label>
                    <input
                        id="userName"
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-orange-500"
                        placeholder="Enter username"
                        required
                    />
                </div>

                {/* EMAIL */}
                <div className="group">
                    <label htmlFor="email" className="block mb-1 text-gray-300">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-orange-500"
                        placeholder="Enter email"
                        required
                    />
                </div>

                {/* PASSWORD */}
                <div className="group">
                    <label htmlFor="password" className="block mb-1 text-gray-300">
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-orange-500"
                        placeholder="Enter password"
                        required
                    />
                </div>

                {/* CONFIRM PASSWORD */}
                <div className="group">
                    <label htmlFor="confirmPassword" className="block mb-1 text-gray-300">
                        Confirm Password
                    </label>
                    <input
                        id="confirmPassword"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-orange-500"
                        placeholder="Re-enter password"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-orange-700 transition duration-300"
                >
                    Sign Up
                </button>

                <div className="text-center text-gray-300">
                    <span>Already have an account? </span>
                    <Link to="/login" className="text-orange-400 hover:underline">
                        Login
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default Signup;
