"use client"
import { authClient } from '@/lib/auth-client';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSidebar = () => {

    const handleGoogleSignIn = async() => {
        const data = await authClient.signIn.social({
    provider: "google",
  });
    }
   
    const handleGithubSignIn = async() => {
        const data = await authClient.signIn.social({
    provider: "github",
  });
    }
    return (
        <div>
            <h2 className='font-bold text-lg mb-6'>Login With</h2>
            <div className='flex flex-col gap-3'>
                <button className='btn border-blue-600 text-blue-600' onClick={handleGoogleSignIn} >
                    <FaGoogle></FaGoogle>
                    Login with google
                </button>
                <button className='btn border-gray-600 text-gray-600' onClick={handleGithubSignIn}>
                    <FaGithub></FaGithub>
                    Login with github
                </button>
            </div>
        </div>
    );
};

export default RightSidebar;