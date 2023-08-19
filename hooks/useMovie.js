import React, { useEffect, useState } from 'react';

const useMovie = (id) => 
{
    const [movie , setMovie] = useState([]);

    useEffect(()=>
    {
        fetch(`https://movie-mania-server-ruby.vercel.app/movie/${id}`).then(res=>res.json()).then(data=>setMovie(data))
    },[])
    return [movie,setMovie]
};

export default useMovie;