import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Like from './Like';
import Love from './Love';
import Unlike from './Unlike';
import style from './Reacts.scss'
import { useState } from 'react';
import Ratings from '../../Shared/Ratings/Ratings';
const Reacts = () => {



    const [like, setLike] = useState(false);
    const [likeIcon, setLikeIcon] = useState('thumbs-o-up')
    const [unlike, setUnLike] = useState(false);
    const [love, setLove] = useState(false);
    const [loveIcon, setLoveIcon] = useState('favorite-outline')
    const [likeColor, setLikeColor] = useState('')
    const [unlikeColor, setUnLikeColor] = useState('')
    const [loveColor, setLoveColor] = useState('')


    const [ratings , setRatings] = useState(0)

    const handleLike = () => {
        setLike(!like)



        if (like) {
            setLikeColor('#4267B2')
            setLikeIcon('thumbs-up')
        }
        else if (!like) {
            setLikeColor('')
            setLikeIcon('thumbs-o-up')
        }

    }


    


    const handleLove = () => {
        setLove(!love);

        if (love) {
            setLoveColor('#ED2B2A')
            setLoveIcon('favorite')
        }

        else if (!love) {
            setLoveColor('')
            setLoveIcon('favorite-outline')
        }
    }



    return (
        <View >
            <View style={[style.reactConntainer, styles.container]}>
                <Text style={style.reactHeader}>Give your reacts on this movie</Text>
                <View style={style.reacts}>
                    <Like press={handleLike} icon={likeIcon} color={likeColor} />
                    <Unlike />
                    <Love press={handleLove} icon={loveIcon} color={loveColor} />
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