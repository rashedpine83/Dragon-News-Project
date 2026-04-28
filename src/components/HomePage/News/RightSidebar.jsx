import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSidebar = () => {
    return (
        <div>
            <h2 className='font-bold text-lg mb-6'>Login With</h2>
            <div className='flex flex-col gap-3'>
                <button className='btn border-blue-600 text-blue-600'>
                    <FaGoogle></FaGoogle>
                    Login with google
                </button>
                <button className='btn border-gray-600 text-gray-600'>
                    <FaGithub></FaGithub>
                    Login with github
                </button>
            </div>
        </div>
    );
};

export default RightSidebar;