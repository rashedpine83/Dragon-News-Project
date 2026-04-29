"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginPage = () => {

 const [isShowPassword, setIsShowPassword] = useState(false);

const { register, handleSubmit, formState: {errors} } = useForm()

const handleLogin = async (data) => {
    const { data: res, error } = await authClient.signIn.email({
        email: data.email,
        password: data.password,
        rememberMe: true,
        callbackURL: "/",
    });

    if (error) {
        console.log(error);
        alert(error.message); // simple way
        return;
    }

    if (res) {
        console.log("Login success", res);
        // normally redirect auto হবে, না হলে manually করো
    }
};
    return (
        <div className='container mx-auto h-[80vh] flex justify-between items-center bg-slate-100 mt-20'>
            <div className='p-4 rounded-xl bg-white mx-auto'>
                <h2 className='font-bold text-3xl text-center mb-6'>Login Your Account</h2>
                <form className='space-y-4' onSubmit={handleSubmit(handleLogin)}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email</legend>
                        <input 
                        type="email" 
                        className="input" 
                        placeholder="Type here email"
                        {...register("email", {required: "email field is required"})} /> 
                        {errors.email && <p className='text-red-600'>{errors.email.message}
                        </p>}                                     
                    </fieldset>
                    <fieldset className="fieldset relative">
                        <legend className="fieldset-legend">Password</legend>
                        <input 
                        type={ isShowPassword ? "text" : "password" }
                        className="input" 
                        placeholder="Type here password"
                        {...register("password", {required: "password field is required"})} /> 
                        {errors.password && <p className='text-red-600'>{errors.password.message}</p>} 

                        <span 
                            onClick={() => setIsShowPassword(!isShowPassword)} 
                            className='absolute right-2 top-4 cursor-pointer'
                            >
                            {isShowPassword ? <FaEye /> : <FaEyeSlash />}
                        </span>

                    </fieldset>
                    <button className='btn bg-gray-900 text-white w-full'>Login</button>
                </form>
                <p className='mt-6'>
                    dont have an account? <Link href={'/register'} className='text-blue-600'>Register</Link>
                </p>
            </div>
            
        </div>
    );
};

export default LoginPage;