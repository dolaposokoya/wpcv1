import { View, Text, ScrollView, Alert, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import Styles from './Style'
import SharedHeader from '../../Shared/SharedHeader/SharedHeader';
import { domain } from '../../../Config/Config';
import Loader from '../../Shared/Loader/Loader';
import StarRating from '../../Shared/StarRating/StarRating';


export default function Index(props) {
    const { navigation, route } = props
    const { user_info } = route.params;
    const [photographer, setphotographer] = useState({})
    const [loading, setloading] = useState(false);

    useEffect(() => {
        console.log('User user_info', user_info?.user_name)
        getUserData();
        return () => getUserData();
    }, [navigation])

    const getUserData = async () => {
        try {
            setloading(true)
            if (user_info !== {} || user_info !== '') {

                if (user_info.profile_image.includes('https')) {
                    user_info.profile_image = user_info.profile_image
                    setphotographer(user_info);
                    setTimeout(() => {
                        setloading(false)
                    }, 3000);
                }
                else {
                    user_info.profile_image = `${domain}${user_info.profile_image}`
                    setphotographer(user_info);
                    setTimeout(() => {
                        setloading(false)
                    }, 3000);
                }
            }
            else {
                setphotographer({})
                setloading(false)
            }
        } catch (error) {
            setloading(false)
            Alert.alert(error.message)
        }
    }

    const ratings = {
        ratings: 0,
        views: 34000
    }

    return (
        <>
            {loading && <Loader />}
            <SharedHeader navigation={navigation} name="Rating To Photographer" />
            <ScrollView style={Styles.view}
                contentContainerStyle={Styles.contentContainer}
            >
                <View style={Styles.ratePhotographerView}>
                    <Image source={{ uri: photographer?.profile_image }} style={Styles.profileImage} />
                    <Text style={Styles.ratePhotographerName}>{photographer?.user_name}</Text>
                </View>
                <View style={Styles.ratingsView}>
                    <Text style={Styles.ratingsName}>{'What rating would you like to give on this profile?'}</Text>
                    <StarRating ratings={ratings} />
                </View>
            </ScrollView>
        </>
    )
}