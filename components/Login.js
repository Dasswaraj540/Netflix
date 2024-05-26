import { GoogleAuthProvider,signInWithRedirect } from 'firebase/auth';
import Head from 'next/head'
import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md' 
import { auth } from '../firebase';
import { useRouter } from 'next/router';

const Login = () => {

    const router = useRouter();

    const provider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        signInWithRedirect(auth,provider)
    } 


    return (
        <>
            <Head>
                <title>Netflix | Sign In</title>
                <link rel="icon" href="/netflix_logo.ico" />
            </Head>
            <div className="bg-siginbg h-screen w-screen relative" >
                <div className='flex justify-between items-center mx-8'>
                    <img src="Netflix-Logo.wine.svg" className='w-28 md:w-44' alt='Netlix Logo' />
                    <div>
                        <button onClick={signInWithGoogle} className='py-1 px-4 bg-red-600 rounded-sm text-lg cursor-pointer'>Sign In</button>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center h-screen w-screen absolute top-0'>
                    <div className='w-1/2 text-center flex justify-center flex-col items-center'>
                        <h1 className='text-3xl md:text-6xl font-bold mb-2'>Unlimited movies, TV shows and more.</h1>
                        <h4 className='text-xl md:text-3xl'>Watch anywhere. Cancel anytime.</h4>
                        <h4 className='text-xl md:text-2xl my-4' >Ready to watch? Sign In to Watch</h4>
                        <div onClick={signInWithGoogle} className='text-xl md:text-3xl flex justify-center items-center p-4 bg-red-600 rounded-lg cursor-pointer '>
                            <h4>Get Started</h4>
                            <MdKeyboardArrowRight />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login