import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Head from 'next/head';
import Image from 'next/image';

const Tv = ({jsonDataHoll,jsonDataBoll}) => {
    const [data, setData] = useState([]);
    const [datas, setDatas] = useState([]);
    const router = useRouter();

    useEffect(() => {
        setData(jsonDataHoll.results)
        setDatas(jsonDataBoll.results)

    }, [])
    return (
        <>
        <Head>
            <title>Netflix | TV Shows</title>
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
            {datas.map((item, i) => {
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

export default Tv;

export async function getServerSideProps() {
    const dataHoll = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}`);
    const jsonDataHoll = await dataHoll.json();


    const dataBoll = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=hi-IN&region=IN&primary_release_year=2021&with_original_language=hi`)
    const jsonDataBoll = await dataBoll.json();


    return{
        props: {
            jsonDataHoll,
            jsonDataBoll,
        }
    }


}