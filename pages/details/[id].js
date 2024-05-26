import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { FaPlay } from "react-icons/fa";
import Navbar from "../../components/Navbar";
import Head from "next/head";
import MovieItem from "../../components/MovieItem";
import { TailSpin } from "react-loader-spinner";
import Image from "next/image";

const Id = () => {
    const router = useRouter();
    const ids = router.query.id;
    const [data, setData] = useState([]);
    const [similarData, setSimilarData] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${ids}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
            .then((res) => res.json())
            .then((res) => setData(res))
            .catch((err) => {
                router.push(`/error/${err}`);
            })

        fetch(`https://api.themoviedb.org/3/movie/${ids}/similar?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
            .then((res) => res.json())
            .then((res) => setSimilarData(res.results))
            .catch((err) => {
                router.push(`/error/${err}`);
            })

    }, [data])

    return (
        <>
            <Head>
                <title>Netflix | {data?.title}</title>
                <link rel="icon" href="/netflix_logo.ico" />
            </Head>
            <Navbar />
            {!similarData ? <div className="flex justify-center items-center h-96"><TailSpin height="100"
                width="100"
                color="#f20001"
                ariaLabel="loading" /></div> : <div>
                <div className="relative ">
                    <div className="relative h-screen w-screen">
                        <Image layout="fill" objectFit="cover" src={`https://image.tmdb.org/t/p/original${data?.backdrop_path}`} className="w-full h-full" alt={data?.title}/>
                    </div>
                    <div className="h-full w-1/2 flex flex-col justify-end items-start px-4 absolute top-0">
                        <p className="text-yellow-400">You&apos;re watching</p>
                        <h1 className="text-6xl mb-2">{data?.title}</h1>
                        <p className="text-3xl">{data?.tagline}</p>
                        <div className="flex items-center justify-center py-4">
                            {data?.adult ? <h3 className="pr-4 font-bold text-xl">18+</h3> : <h3 className="pr-4 font-bold text-xl">Family</h3>}|
                            <h3 className="px-4 font-bold text-xl">{data?.release_date}</h3>|
                            <h3 className="px-4 font-bold text-xl">{Math.floor(data?.runtime / 60)}hr {data?.runtime % 60}min</h3>
                        </div>
                        <div className="flex justify-center items-center bg-green-500 px-2 rounded-md my-2">
                            <p>{data?.vote_average}</p>
                        </div>
                        <div className="flex justify-center items-center">
                            <p className="mb-2">{data?.overview}</p>

                        </div>
                        <div className="flex mb-2">
                            <a href={`${data?.homepage}`} target="_blank" rel="noreferrer"><div className="flex items-center justify-center bg-red-600 py-2 px-6 cursor-pointer rounded">
                                <FaPlay className="mx-2" />
                                <strong className="text-white">Watch</strong>
                            </div></a>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl font-bold mt-8">Similar Movies</h3>
                    <div className="flex items-center overflow-x-auto mb-4 scroll-bar">
                        {similarData.map((item, i) => {
                            return (
                                <MovieItem key={i} id={item?.id} backPhoto={item.backdrop_path} title={item.title} />
                            );
                        })}
                    </div>
                </div>
            </div>}
        </>
    )
}

export default Id;