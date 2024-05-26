import React from 'react'
import Movie from './Movie';
const Scroll = () => {
    return (
        (
            <>
                <Movie url={`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}`} title="Popular Movies"/>

                <Movie url={`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=hi-IN&region=IN&primary_release_year=2021&with_original_language=hi`} title="Bollywood Popular Movies"/>

                <Movie url={`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.NEXT_PUBLIC_API_KEY}`} title="Trending Movies"/>


                <Movie url={`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=16`} title="Animated Movies"/>

                <Movie url={`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=12`} title="Adventure Movies"/>

                <Movie url={`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=35`} title="Comedy Movies"/>

                <Movie url={`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=80`} title="Crime Movies"/>

                <Movie url={`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=14`} title="Fantasy Movies"/>

                <Movie url={`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=27`} title="Horror Movies"/>

                <Movie url={`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=10752`} title="War Movies"/>
                <Movie url={`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=53`} title="Thriller Movies"/>

                <Movie url={`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=878`} title="Science Fiction Movies"/>

                <Movie url={`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=10770`} title="TV Movies"/>

                <Movie url={`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=10749,`} title="Romance Movies"/>

                <Movie url={`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=9648,`} title="Mystery Movies"/>
            </>
        )
    )
}

export default Scroll