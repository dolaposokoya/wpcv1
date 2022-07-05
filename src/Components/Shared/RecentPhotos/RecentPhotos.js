import React, { useState } from 'react'
import { View, Text, Image, Dimensions, TouchableOpacity, ScrollView, Alert, ToastAndroid, Platform } from 'react-native'
import { apiUrl, domain, WHITE } from '../../../Config/Config'
import Styles from './Style'
import { FlexRow } from '../../../Assets/Styles/Customized/Styled'
import ProfileSheet from '../../Sheets/ProfileSheet/ProfileSheet'
import Clipboard from '@react-native-community/clipboard';
// import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import { LIKED_PHOTOS } from '../../../ActionType/ActionType'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Like from '../../../Assets/Images/like.png'
import LikeActive from '../../../Assets/Images/likeactive.png';
import Animated from 'react-native-reanimated'
import { moderateScale } from 'react-native-size-matters';
import Loader from '../Loader/Loader'

const { width, height } = Dimensions.get('screen')

const SPACING = width * 0.5;
const AVATAR_SIZE = moderateScale(5);
export default function RecentPhotos(props) {

    const { navigation, loading, item, index, photoView, photoLikes, photoFullUrl, parents, comment, commentPhoto, createdAt, description, topPhotos } = props
    const [likeImage, setlikeImage] = useState(require('../../../Assets/Images/like.png'))

    const likePhoto = async (index) => {
        try {
            const user = await AsyncStorage.getItem('@user_id')
            if (user !== null) {
                const photoKey = photoFullUrl[index];
                const likes = photoLikes[index];
                console.log('likes', likes)
                const formData = new FormData();
                formData.append("photoKey", photoKey);
                formData.append("actionType", LIKED_PHOTOS);
                formData.append("user", user);
                const requestOptions = {
                    method: 'POST',
                    // headers: myHeaders,
                    body: formData,
                };
                const result = await fetch(`${apiUrl.generalUrl}`, requestOptions)
                const response = await result.json()
                if (response && response.success === 1) {
                    photoLikes[index] = response.num_like
                    setlikeImage(require('../../../Assets/Images/likeactive.png'))
                    console.log('likeImage', photoLikes[index],response.success)
                }
                else {
                    Alert.alert('Unable to like photo')
                }
            }
            else {
                Alert.alert('Something went wrong')
            }
        } catch (error) {
            Alert.alert(error.message)
        }
    }

    const getPhotoData = (index) => {
        const ownerProfile = photoFullUrl[index];
    }

    const copyLInk = () => {
        const link = `${domain}photo/${photoFullUrl[index]}`;
        Clipboard.setString(link)
        if (Platform.OS === 'android') {

        }
        else {

        }
    }

    const goToPhotoGraphersPage = async (data, index) => {
        await AsyncStorage.setItem('@userId', parents[index])
        navigation.setParams({
            userId: parents[index],
        });
        console.log('PhotographerDetails')
        navigation.navigate('UserDetailsStack', {
            screen: 'PhotographerDetails',
            item: data,
        })
    }

    return (
        <>
            {loading ? <Loader /> :
                <Animated.View style={Styles.card} key={index}>
                    <FlexRow>
                        <FlexRow>
                            <Image
                                source={{ uri: item }}
                                style={Styles.profileImage}
                            />
                            <TouchableOpacity
                                onPress={() => goToPhotoGraphersPage(item, index)}
                                style={{
                                    marginLeft: '3%',
                                }}>
                                <Text style={Styles.text}>{parents[index] === '' ? 'Null' : parents[index]}</Text>
                                <Text style={Styles.profileText}>Professional Photographer</Text>
                            </TouchableOpacity>
                        </FlexRow>
                        <FlexRow>
                            <Text style={Styles.profileDate}>{createdAt[index]}</Text>
                            <ProfileSheet copyLInk={copyLInk} />
                        </FlexRow>
                    </FlexRow>
                    <View style={Styles.profileImageView}>
                        <Image
                            source={item ? { uri: item } : require('../../../Assets/Images/image.png')}
                            style={Styles.profileImageViewImg}
                        />
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <FlexRow style={Styles.flexRow1}>
                            <FlexRow>
                                <TouchableOpacity onPress={() => likePhoto(index)}>
                                    <Image source={likeImage}
                                        style={Styles.flexRow1Image}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => commentPhoto(index, item)}>
                                    <Image source={require('../../../Assets/Images/comment.png')}
                                        style={Styles.flexRow1Image}
                                    />
                                </TouchableOpacity>
                            </FlexRow>
                            <Image source={require('../../../Assets/Images/bookmark.png')}
                                style={Styles.flexRow1Image}
                            />
                        </FlexRow>
                    </View>
                    <View style={Styles.commentView}>
                        <Text style={Styles.commentText} ellipsizeMode='tail' numberOfLines={1}>{description[index]}</Text>
                    </View>
                    <View style={{ marginLeft: 10, justifyContent: 'center', alignItems: 'flex-start', marginBottom: 0 }}>
                        <FlexRow style={{
                            justifyContent: 'flex-start',
                            marginLeft: moderateScale(12),
                            marginTop: moderateScale(10)
                        }}>
                            <Text style={Styles.like}>{photoLikes[index]} likes</Text>
                            {comment[index] !== '' && <Text style={Styles.like}>{comment[index]} comments</Text>}
                        </FlexRow>
                    </View>
                    <View style={{ margin: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{
                            borderBottomWidth: 0.9,
                            width: width * 0.95,
                            borderBottomColor: WHITE,
                            opacity: 0.57
                        }} />
                    </View>
                </Animated.View>
            }
        </>
    )
}
