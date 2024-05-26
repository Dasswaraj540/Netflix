import Image from 'next/image'
import React from 'react'
import { HiMenuAlt1 } from "react-icons/hi";
import { useRouter } from 'next/router';


const Error = () => {
    const router = useRouter();
    const errMsg = router.query.error;
    return (
        <div className='h-screen w-screen bg-red-700 flex justify-center items-center overflow-y-hidden'>
            <div className='bg-black px-12' style={{ height: "90vh", width: "94vw" }}>
                <div className='bg-transparent flex justify-between items-center'>
                    <Image src="/navbar.png" height={100} width={200} alt="Logo"/>
                    <div className='h-14 w-14 flex justify-center items-center cursor-pointer rounded-full hover:bg-gray-800'>
                        <HiMenuAlt1 className='h-10 w-10' />
                    </div>
                </div>
                <div className='flex items-center justify-between' style={{ height: "80vh" }}>
                    <div className='h-full w-full flex flex-col justify-center items-start'>
                        <h1 className='text-6xl'>Something went Wrong</h1>
                        <p className='my-8'>{errMsg}</p>
                        <button onClick={() => { router.push("/") }} className='px-4 py-2 border-2 border-white rounded-lg text-white'>Go Home</button>
                    </div>
                    <div>
                        <img src="/error.svg" alt="error"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Error;