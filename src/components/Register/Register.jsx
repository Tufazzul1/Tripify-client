import React, { useContext, useState } from 'react';
import { FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaEyeSlash } from "react-icons/fa6";
import useAuth from '../../hooks/useAuth';


const Register = () => {
    const [showPassword, setShowPassword] = useState(false);

    const {createUser} = useAuth()

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const photo = form.get('photo');
        const password = form.get('password');
        // console.log(name, email, photo, password)

        createUser(email, password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error =>{
            console.log(error.message)
        })

    }
    return (
        <div style={{ backgroundImage: 'url(https://i.ibb.co/drq269w/mosharraf-hossain-VFn-Dry6c1-0-unsplash.jpg)' }} className='mt-5
        ' >
            <div className="hero min-h-[550px] flex flex-col lg:flex-row w-full bg-opacity-10" >

                <div className="lg:w-1/2  p-4 lg:p-8 text-white">
                    <h2 className="md:text-5xl text-2xl font-bold mt-4 text-[#0000ff]">Please Register</h2>
                    <p className="mt-3">Create an account to start your travel journey. Unlock special offers, build custom itineraries, and enjoy a seamless booking experience for your next adventure.</p>
                </div>

                <div className="card shrink-0  max-w-lg shadow-2xl bg-base-100 bg-opacity-25 lg:w-1/2">

                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                className="input input-bordered"
                                required />
                        </div>
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
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input
                                type="text"
                                name="photo"
                                placeholder="Photo URL"
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
                            <button className="btn border hover:text-[#0000ff] border-[#0000ff] bg-[#0000ff] text-white hover:border-[#0000ff]">Register</button>
                        </div>
                    </form>

                 
                    <p className="text-center mb-4 mt-4">Already have an account ? Please <Link to={'/login'} className="text-blue-700 font-bold">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;