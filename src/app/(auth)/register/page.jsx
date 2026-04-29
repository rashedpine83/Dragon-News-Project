"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const RegisterPage = () => {

const [isShowPassword, setIsShowPassword] = useState(false);

const { register, handleSubmit, formState: {errors} } = useForm()

const handleRegister = async(data) => {
  
 const {email, name, password, photo} = data;

 const {data: res, error} = await authClient.signUp.email({
    name: name,
    email: email,
    password: password,
    image: photo,
    callbackURL: "/"
 })


 if(error){
    alert(error.message);
 }
 if(res){
    alert("signup successfully")
 }
}
    return (
        <div className='container mx-auto h-auto flex justify-center items-center bg-slate-100'>
            <div className='p-4 rounded-xl bg-white mx-auto'>
                <h2 className='font-bold text-3xl text-center mb-6'>Register Your Account</h2>
                <form className='space-y-4' onSubmit={handleSubmit(handleRegister)}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Name</legend>
                        <input 
                        type="text" 
                        className="input" 
                        placeholder="Type Your Name"
                        {...register("name", {required: "name field is required"})} /> 
                        {errors.name && <p className='text-red-600'>{errors.name.message}</p>}                                     
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Photo URL</legend>
                        <input 
                        type="text" 
                        className="input" 
                        placeholder="Type Your Photo URL"
                        {...register("photo", {required: "Photo URL field is required"})} /> 
                        {errors.photo && <p className='text-red-600'>{errors.photo.message}</p>}                                     
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email</legend>
                        <input 
                        type="email" 
                        className="input" 
                        placeholder="Type here email"
                        {...register("email", {required: "email field is required"})} /> 
                        {errors.email && <p className='text-red-600'>{errors.email.message}</p>}                                     
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
                                                className='absolute right-10 top-4 cursor-pointer'
                                                >
                                                {isShowPassword ? <FaEye /> : <FaEyeSlash />}
                                            </span>
                    
                                        </fieldset>
                    <button className='btn bg-gray-900 text-white w-full'>Register</button>
                </form>
            </div>
            
        </div>
    );
};

export default RegisterPage;