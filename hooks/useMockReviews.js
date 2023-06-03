import {useState , useEffect} from 'react';

const useMockReviews = () => {
    const [reviews , setReviews] = useState([]);


    useEffect(()=> {
        fetch('reivew.json').then(res => res.json()).then(data=>setReviews(data)).catch(err=> {throw err})
    }, [])
    
    return [reviews , setReviews]
};

export default useMockReviews;