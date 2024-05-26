import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Head from 'next/head';
import Image from 'next/image';

const Movies = ({jsonData}) => {
    const [data, setData] = useState([]);
    const router = useRouter();

    useEffect(() => {
        setData(jsonData.results);

    }, [])
    return (
        <>
        <Head>
            <title>Netflix | Movies</title>
            <link rel="icon" href="/netflix_logo.ico" />
        </Head>
        <Navbar />
        <div className='flex flex-wrap w-screen justify-center'>
            {console.log(data)}
            {data.map((item, i) => {
                return (
                    <div key={i} className='relative h-[28rem] w-72 m-10'>
                        <Image layout='fill' onClick={()=> router.push(`/details/${item?.id}`)} className='m-4 cursor-pointer hover:scale-110 ease-linear duration-300' src={`https://image.tmdb.org/t/p/w342${item.poster_path}`} alt={item?.title}/>
                    </div>
                );
            })}
        </div>
        </>
    )
}

export default Movies;
export async function getServerSideProps(){
    const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}`);
    const jsonData = await data.json();

    return{
        props: {
            jsonData
        }
    }
}