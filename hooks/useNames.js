import React, { useEffect, useState } from 'react';

const useNames = () => 
{
    const [names , setNames] = useState([]);

    useEffect(()=>
    {
        fetch('https://movie-mania-server-ruby.vercel.app/userName').then(res=>res.json()).then(data=>setNames(data))
    },[])
    return [names,setNames]
};

export default useNames;