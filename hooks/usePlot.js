import React, { useEffect, useState } from 'react';

const usePlot = (id) => 
{
    const [plotData , setPlotData] = useState([]);

    useEffect(()=>
    {
        fetch(`https://movie-mania-server-ruby.vercel.app/plot/${id}`).then(res=>res.json()).then(data=>setPlotData(data))
    },[])
    return [plotData,setPlotData]
};

export default usePlot;