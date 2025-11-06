import React, { useState } from 'react';
import img from "../../assets/authImage.png";
import ProfastLogo from '../Shared/ProfastLogo/ProfastLogo';
import { Link, NavLink } from 'react-router';
import { Eye, EyeOff } from 'lucide-react'; // 👈 icon import

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div>
            <div className='lg:pl-10 pt-3 '>
                <Link to='/'><ProfastLogo /></Link>
            </div>

            <div className="min-h-screen flex flex-col lg:items-center lg:flex-row bg-[#F9FBF5]">
                {/* Left Side - Form */}
                <div className="flex flex-col lg:items-center lg:w-[50%] w-full px-8 lg:px-0 py-10">
                    {/* Welcome Text */}
                    <div className="text-start">
                        <h2 className="text-3xl font-bold mb-2 text-gray-800">
                            Welcome Back
                        </h2>
                        <p className="text-sm text-gray-500 mb-6">Login with Profast</p>
                    </div>

                    {/* Form */}
                    <form className="w-full max-w-sm space-y-3">
                        {/* Email */}
                        <div>
                            <label className="label text-sm font-medium">Email</label>
                            <input
                                type="email"
                                placeholder="Email"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        {/* Password */}
                        <div className="relative">
                            <label className="label text-sm font-medium">Password</label>
                            <div className="relative flex items-center">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    className="input input-bordered w-full pr-10"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 text-gray-500 hover:text-gray-700 z-10 pointer-events-auto"
                                    tabIndex={-1}
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        {/* Forgot password */}
                        <div className="flex justify-end">
                            <a href="#" className="text-xs text-green-600 hover:underline">
                                Forgot Password?
                            </a>
                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            className="btn bg-green-500 hover:bg-green-600 text-white w-full rounded-lg"
                        >
                            Login
                        </button>

                        {/* Register link */}
                        <div className="text-sm text-center text-gray-500">
                            Don’t have any account?{" "}
                            <a href="#" className="text-green-600 hover:underline font-medium">
                                Register
                            </a>
                        </div>

                        <div className="divider text-gray-400 text-xs">Or</div>

                        {/* Google Button */}
                        <button
                            type="button"
                            className="btn btn-outline w-full flex items-center gap-2"
                        >
                            <img
                                src="https://www.svgrepo.com/show/475656/google-color.svg"
                                alt="Google"
                                className="w-5 h-5"
                            />
                            Login with Google
                        </button>
                    </form>
                </div>

                {/* Right Side - Illustration */}
                <div className="hidden lg:flex items-center lg:justify-start w-[50%] bg-[#F9FBF5]">
                    <img
                        src={img}
                        alt="Illustration"
                        className="w-[60%] max-w-md"
                    />
                </div>
            </div>
        </div>
    );
};

export default Login;
