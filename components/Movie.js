import React, { useState, useEffect } from 'react'
import MovieItem from './MovieItem';
import { useRouter } from 'next/router';

const Movie = ({url,title}) => {
    
    const router = useRouter();
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((res) => setData(res.results))
            .catch((err) => {
                router.push(`/error/${err}`);
            })

    }, [url])


    return (
        (
            <>
                <h3 className='text-2xl font-bold mt-8 sm:'>{title}</h3>
                <div className='flex items-center overflow-x-auto mb-4 scroll-bar'>
                    {data.map((item, i) => {
                        return (
                            <MovieItem key={i} id={item?.id} backPhoto={item.backdrop_path} title={item.title}/>
                        );
                    })}
                </div>
            </>
        )
    )
}

export default Movie;

// async function getServerSideProps() {
//     const res = await fetch(ur)
// }