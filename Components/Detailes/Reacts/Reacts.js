import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Like from './Like';
import Love from './Love';
import Unlike from './Unlike';
import style from './Reacts.scss'
import { useState } from 'react';
import Ratings from '../../Shared/Ratings/Ratings';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query'
import auth from '../../../firebase.init';
import { useEffect } from 'react';
const Reacts = (props) => {

    const { route } = props;
    const detailes = route.params.detailes

    const { id , name } = detailes

    const [like, setLike] = useState(false);
    const [likeIcon, setLikeIcon] = useState('thumbs-o-up')
    const [unlike, setUnLike] = useState(false);
    const [love, setLove] = useState(false);
    const [loveIcon, setLoveIcon] = useState('favorite-outline')
    const [likeColor, setLikeColor] = useState('')
    const [unlikeIcon , setUnlikeIcon] = useState('thumbs-o-down')
    const [unlikeColor, setUnLikeColor] = useState('')
    const [loveColor, setLoveColor] = useState('')


    const [ratings , setRatings] = useState(0)
    const [user] = useAuthState(auth)


    const { data: reactsCount = [] } = useQuery({
        queryKey: ['reviews'],
        queryFn: () => fetch(`https://movie-mania-server-ruby.vercel.app/react/${id}`).then(res => res.json())
    })

    const { data: userReacts = [] } = useQuery({
        queryKey: ['userReacts'],
        queryFn: () => fetch(`https://movie-mania-server-ruby.vercel.app/reactDetailes/${user.email}/${id}`).then(res => res.json())
    })


    useEffect(()=>
    {
        if(userReacts[0]?.like)
        {
            setLikeColor('#4267B2')
            setLikeIcon('thumbs-up')
        }

        if(userReacts[0]?.favourite)
        {
            setLoveColor('#ED2B2A')
            setLoveIcon('favorite')
        }

        if(userReacts[0]?.unlike)
        {
            
            setUnLikeColor('#454545');
            setUnlikeIcon('thumbsdown')
        }
    },[setLikeIcon,setLoveIcon,setUnlikeIcon])


    const handleLike = () => {
        setLike(!like)

        let reactDetailes

        if (like) {
            setLikeColor('#4267B2')
            setLikeIcon('thumbs-up')

            reactDetailes = 
            {
                email : user.email,
                movieId : id,
                like : 'Liked'
            }

        }
        else if (!like) {
            setLikeColor('')
            setLikeIcon('thumbs-o-up')
            reactDetailes = 
            {
                email : user.email,
                movieId : id,
                like : ''
            }
        }

        fetch('https://movie-mania-server-ruby.vercel.app/reacts' , {
            method : "PUT",
            headers : 
            {
                "content-type" : "application/json"
            },
            body : JSON.stringify(reactDetailes)
        })

    }

    const handleLove = () => {
        setLove(!love);

        let reactDetailes

        if (love) {
            setLoveColor('#ED2B2A')
            setLoveIcon('favorite')

            reactDetailes = 
            {
                email : user.email,
                movieId : id,
                favourite : 'Loved'
            }

        }

        else if (!love) {
            setLoveColor('')
            setLoveIcon('favorite-outline')
            reactDetailes = 
            {
                email : user.email,
                movieId : id,
                favourite : ''
            }

        }

        
        fetch('https://movie-mania-server-ruby.vercel.app/reacts' , {
            method : "PUT",
            headers : 
            {
                "content-type" : "application/json"
            },
            body : JSON.stringify(reactDetailes)
        })
    }


    const handleUnlike = () => 
    {
        setLike(false)
        setLove(false)

        setUnLike(!unlike)

        let reactDetailes

        if(unlike)
        {
            setUnLikeColor('#454545');
            setUnlikeIcon('thumbsdown')
            reactDetailes = 
            {
                email : user.email,
                movieId : id,
                like : '',
                favourite : '',
                unlike : 'Unliked'
            }
        }
        else
        {
            setUnlikeIcon('thumbs-o-down')
            setUnLikeColor('')

            reactDetailes = 
            {
                email : user.email,
                movieId : id,
                unlike : ''
            }

        }

        fetch('https://movie-mania-server-ruby.vercel.app/reacts' , {
            method : "PUT",
            headers : 
            {
                "content-type" : "application/json"
            },
            body : JSON.stringify(reactDetailes)
        })

    }



    return (
        <View >
            <View style={[style.reactConntainer, styles.container]}>
                <Text style={style.reactHeader}>Give your reacts on {name}</Text>
                <View style={style.reacts}>
                    <Like press={handleLike} icon={likeIcon} color={likeColor} count = {reactsCount.like}/>
                    <Unlike press={handleUnlike} icon={unlikeIcon} color={unlikeIcon} count = {reactsCount.unlike} />
                    <Love press={handleLove} icon={loveIcon} color={loveColor} count = {reactsCount.fav} />
                </View>
            </View>

            <View>
                <Text>Give Ratings to the movie</Text>
                <Ratings rating={ratings} setRating={setRatings}/>
                
            </View>
        </View>
    );
};

export default Reacts;


const styles = StyleSheet.create({
    container:
    {
        elevation: 1,
        borderRadius: 5
    }
})