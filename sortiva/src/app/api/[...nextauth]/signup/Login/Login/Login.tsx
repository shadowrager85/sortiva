'use client';

import { useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Link from 'next/link';

const firebaseConfig = {
    apiKey: "AIzaSyDxfLSgzIifo3FRZKWlvCFeeh9FEKcPdeA",
    authDomain: "sortiva-cccdd.firebaseapp.com",
    projectId: "sortiva-cccdd",
    storageBucket: "sortiva-cccdd.firebasestorage.app",
    messagingSenderId: "892235031932",
    appId: "1:892235031932:web:b6bfa124d044ace22930f9",
    measurementId: "G-GHDTWC08L7"
};

// Initialize Firebase only once
const app = initializeApp(firebaseConfig);
// Optional: getAnalytics(app);

const Login = () => {
        const auth = getAuth();
        const router = useRouter();

        const [authing, setAuthing] = useState(false);
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [error, setError] = useState('');

        const signInWithGoogle = async () => {
                setAuthing(true);
                signInWithPopup(auth, new GoogleAuthProvider())
                        .then(response => {
                                console.log(response.user.uid);
                                router.push('/');
                        })
                        .catch(error => {
                                console.log(error);
                                setAuthing(false);
                        });
        }

        const signInWithEmail = async () => {
                setAuthing(true);
                setError('');
                signInWithEmailAndPassword(auth, email, password)
                        .then(response => {
                                console.log(response.user.uid);
                                router.push('/');
                        })
                        .catch(error => {
                                console.log(error);
                                setError(error.message);
                                setAuthing(false);
                        });
        }

        return (
                <div className='w-full h-screen flex'>
                        <div className='w-1/2 h-full flex flex-col bg-[#282c34] items-center justify-center'>
                        </div>
                        <div className='w-1/2 h-full bg-[#1a1a1a] flex flex-col p-20 justify-center'>
                                <div className='w-full flex flex-col max-w-[450px] mx-auto'>
                                        <div className='w-full flex flex-col mb-10 text-white'>
                                                <h3 className='text-4xl font-bold mb-2'>Login</h3>
                                                <p className='text-lg mb-4'>Welcome Back! Please enter your details.</p>
                                        </div>
                                        <div className='w-full flex flex-col mb-6'>
                                                <input
                                                        type='email'
                                                        placeholder='Email'
                                                        className='w-full text-white py-2 mb-4 bg-transparent border-b border-gray-500 focus:outline-none focus:border-white'
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)} />
                                                <input
                                                        type='password'
                                                        placeholder='Password'
                                                        className='w-full text-white py-2 mb-4 bg-transparent border-b border-gray-500 focus:outline-none focus:border-white'
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)} />
                                        </div>
                                        <div className='w-full flex flex-col mb-4'>
                                                <button
                                                        className='w-full bg-transparent border border-white text-white my-2 font-semibold rounded-md p-4 text-center flex items-center justify-center cursor-pointer'
                                                        onClick={signInWithEmail}
                                                        disabled={authing}>
                                                        Log In With Email and Password
                                                </button>
                                        </div>
                                        {error && <div className='text-red-500 mb-4'>{error}</div>}
                                        <div className='w-full flex items-center justify-center relative py-4'>
                                                <div className='w-full h-[1px] bg-gray-500'></div>
                                                <p className='text-lg absolute text-gray-500 bg-[#1a1a1a] px-2'>OR</p>
                                        </div>
                                        <button
                                                className="cursor-pointer text-black flex gap-2 items-center bg-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-zinc-300 transition-all ease-in duration-200"
                                                onClick={signInWithGoogle}
                                                disabled={authing}
                                        >
                                                <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="w-6">
                                                        <path
                                                                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                                                                fill="#FFC107"
                                                        ></path>
                                                        <path
                                                                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                                                                fill="#FF3D00"
                                                        ></path>
                                                        <path
                                                                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                                                                fill="#4CAF50"
                                                        ></path>
                                                        <path
                                                                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                                                                fill="#1976D2"
                                                        ></path>
                                                </svg>
                                                Continue with Google
                                        </button>
                                </div>
                                <div className='w-full flex items-center justify-center mt-10'>
                                        <p className='text-sm font-normal text-gray-400'>
                                                Don't have an account?{' '}
                                                <span className='font-semibold text-white cursor-pointer underline'>
                                                        <Link href='/signup'>Sign Up</Link>
                                                </span>
                                        </p>
                                </div>
                        </div>
                </div>
        );
}

export default Login;
