import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import YoutubeIframe from 'react-native-youtube-iframe';
import useTrailer from '../../../hooks/useTrailer';
import style from './Traile.scss'
const Trailer = (props) => {
    const { route } = props;
    const id = route.params.trailerId
    const name = route.params.name;
    const [trailer, setTrailer] = useTrailer(id)

    return (
        <View style={style.trailerContainer}>
            <View style={styles.youtube}>
                <YoutubeIframe
                    height={300}

                    videoId={trailer[0]?.trailerId}
                />

                <View style={style.textView}>

                    <Text style={style.tratilerText}>Trailer : {name}</Text>
                </View>
            </View>

        </View>
    );
};

export default Trailer;


const styles = StyleSheet.create(
    {
        youtube:
        {
            elevation: 10,
            backgroundColor: '#fff',
            borderRadius : 10
        }
    }
)