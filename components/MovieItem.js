import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react'

const MovieItem = ({ id, backPhoto }) => {
    const router = useRouter();

    return (
        <>
            <div className='relative mx-1 h-40 min-w-[300px]'>
                <Image layout='fill' onClick={() => router.push(`/details/${id}`)} className=' cursor-pointer hover:scale-110 ease-linear duration-300' src={`https://image.tmdb.org/t/p/original${backPhoto}`} alt={id} />
            </div>
        </>
    )
}

export default MovieItem;
