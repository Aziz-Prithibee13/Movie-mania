import React, { useEffect, useState } from 'react';

const useMovies = () =>
{
    const [movies , setMovies] = useState([]);

   
    useEffect(()=>
    {
        fetch(`https://movie-mania-server-ruby.vercel.app/movies`).then(res=>res.json()).then(data=>setMovies(data))
    },[setMovies])
    return [movies, setMovies];
};

export default useMovies;