import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const useTrailer = (id) => {
    const [trailer , setTrailer] = useState([])
    useEffect(()=>
    {
        fetch(`https://movie-mania-server-ruby.vercel.app/trailer/${id}`).then(res=>res.json()).then(data=>setTrailer(data))
    },[])


    return [trailer,setTrailer];
    
};

export default useTrailer;