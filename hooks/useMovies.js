import React, { useEffect, useState } from 'react';

const useMovies = (page, size) =>
{
    const [movies , setMovies] = useState([]);

   
    useEffect(() => {
        fetch(`https://movie-mania-server-ruby.vercel.app/movies?page=${page}&size=${size}`)
          .then((res) => res.json())
          .then(data=>setMovies(data));
      }, [page, size]);
    return [movies, setMovies];
};

export default useMovies;