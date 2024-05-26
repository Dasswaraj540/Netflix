import React,{useState,useEffect} from 'react';
import { MdInfoOutline } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import { useRouter } from 'next/router';
import Image from 'next/image';

const Preview = () => {
    const [data, setData] = useState({});
    const router = useRouter();

    useEffect(() => {

        const num = Math.floor(Math.random() * 20);

        fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
            .then((res) => res.json())
            .then((res) => setData(res.results[num]))
            .catch((err) => {
                router.push(`/error/${err}`);
            })

    }, [])

    const photo = "https://image.tmdb.org/t/p/original" + data.backdrop_path;
    return (
        <>
            <div className='relative backg-imgs'>
                <div className='relative h-screen w-screen'>
                    <Image layout='fill' objectFit='cover' src={photo} className="w-full h-full" alt={data?.title}/>
                </div>
                <div className='h-full w-1/2 flex flex-col justify-end items-start px-4 absolute top-0'>
                    <h1 className='text-6xl mb-2'>{data?.title}</h1>
                    <p className='mb-2'>{data?.overview}</p>
                    <div className='flex mb-2'>
                        <div className='flex items-center justify-center bg-red-600 py-2 px-6 cursor-pointer rounded'>
                            <FaPlay className='mr-2'/>
                            <strong className='text-black'>Play</strong>
                        </div>
                        <div className='flex items-center justify-center bg-gray-600 py-2 px-6 mx-4 cursor-pointer rounded '>
                            <MdInfoOutline className='text-3xl mr-2'/>
                            <strong>More Info</strong>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Preview;