import React, { useState } from 'react';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {

    const { signIn } = useAuth()
    const [showPassword, setShowPassword] = useState(false);
    const location = useLocation();
    // console.log( "location from login",location)
    const navigate = useNavigate()


    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const email = form.get('email');
        const password = form.get('password');


        signIn(email, password)
            .then(result => {
                console.log(result.user);

                // navigate the user 
                navigate(location?.state ?  location.state : '/');

            })
            .catch(error => {
                console.log(error)

            })
    }
    return (
        <div style={{ backgroundImage: 'url(https://i.ibb.co/drq269w/mosharraf-hossain-VFn-Dry6c1-0-unsplash.jpg)' }} className='mt-5
        ' >
            <div className="hero min-h-[550px] flex flex-col lg:flex-row w-full bg-opacity-10" >

                <div className="lg:w-1/2  p-4 lg:p-8 text-white">
                    <h2 className="md:text-5xl text-2xl font-bold mt-4 text-[#0000ff]">Please Login</h2>
                    <p className="mt-3">Sign in to access your personalized travel dashboard. Manage your bookings, explore new destinations, and get exclusive travel tips to make your next journey unforgettable.</p>
                </div>

                <div className="card shrink-0  max-w-lg shadow-2xl bg-base-100 bg-opacity-25 lg:w-1/2">

                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="input input-bordered"
                                required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>

                            </label>
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Password"
                                className="input input-bordered pl-8"
                                required
                            />
                            <span onClick={() => setShowPassword(!showPassword)} className="absolute top-1/2 right-4 transform -translate-y-1/2">{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>


                        <div className="form-control mt-6">
                            <button className="btn border hover:text-[#0000ff] border-[#0000ff] bg-[#0000ff] text-white hover:border-[#0000ff]">Login</button>
                        </div>
                    </form>

                    <div className="text-center font-bold space-y-3">
                        <h3>Login with </h3>
                        <button onClick={() => handleSocialLogin(googleLogin)} className="btn  border text-[#0000ff] border-[#0000ff] hover:bg-[#0000ff] hover:text-white mr-2"> <FaGoogle />Google</button>
                        <button onClick={() => handleSocialLogin(githubLogin)} className="btn  border text-[#0000ff] border-[#0000ff] hover:bg-[#0000ff] hover:text-white">Github <FaGithub /></button>
                    </div>
                    <p className="text-center mb-4 mt-4">New in here ? Please <Link to={'/register'} className="text-blue-700 font-bold">Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;