
import React, { useState, useEffect, useRef } from 'react'
import { View, Text, Image, Dimensions, TouchableOpacity, Pressable, Alert, StatusBar } from 'react-native'
import { FETCH_USER, LOGGEDIN_USER_PHOTO } from '../../../ActionType/ActionType'
import { apiUrl, domain, Options, INTEREST_COLOR } from '../../../Config/Config'
import BackDrop from '../../Shared/BackDrop/BackDrop'
import Loader from '../../Shared/Loader/Loader'
import SharedHeader from '../../Shared/SharedHeader/SharedHeader'
import Styles from './Style'
import { verticalScale } from 'react-native-size-matters';
import Animated from 'react-native-reanimated'
import StarRating from '../../Shared/StarRating/StarRating'
import AsyncStorage from '@react-native-async-storage/async-storage'
import ArrayList from '../../Shared/ArrayList/ArrayList'


const { height, width } = Dimensions.get('window')
const IMAGE_HEIGHT = verticalScale(height * 0.35);
const COLOR_HEIGHT = verticalScale(height * 0.55)
const headerHeight = height * 0.12;
const minHeight = height * 0.06;
const header_delta = headerHeight - minHeight
export default function Index(props) {
    const { navigation, route } = props
    // const { userId } = route.params;
    const [itemId, setitemId] = useState("1")
    const [loading, setloading] = useState(false)
    const [user, setuser] = useState({})
    const [profile_image, setprofileImage] = useState()
    const [type, settype] = useState('Photo')
    const [offset, setoffset] = useState(0)
    const [numPhotos, setnumPhotos] = useState(0)
    const [photoURL, setphotoURL] = useState([])
    const [videoURL, setvideoURL] = useState([])
    const [portfolioURL, setportfolioURL] = useState([])
    const [blogsURL, setblogsURL] = useState([])
    const [groupsURL, setgroupsURL] = useState([])
    const [followed, setfollowed] = useState(false)
    const [photoFullURL, setphotoFullURL] = useState([])
    const [headerShown, setHeaderShown] = useState(false);
    const [myFollowers, setmyFollowers] = useState('')
    const imageWidth = { width: 0 }

    useEffect(() => {
        getUserData();
        const unsubscribe = navigation.addListener('focus', () => {
            getUserData()
        });
        return unsubscribe;
    }, [navigation])


    const getUserData = async () => {
        try {
            setloading(true)
            const user_id = await AsyncStorage.getItem('@userId')
            if (user_id !== null || user_id !== '') {
                const fomrData = new FormData()
                fomrData.append("user_id", user_id);
                fomrData.append("actionType", FETCH_USER)
                const requestOptions = {
                    method: 'POST',
                    body: fomrData
                };
                const response = await fetch(`${apiUrl.generalUrl}`, requestOptions)
                const user = await response.json();
                if (user.success === 1) {
                    await getUserPhotos(user_id)
                    if (user.profile_image.includes('https')) {
                        user.profile_image = user.profile_image
                        setuser(user)
                        setprofileImage(user.profile_image)
                        setmyFollowers(user.followers)
                        setloading(false)
                    }
                    else {
                        user.profile_image = `${domain}${user.profile_image}`
                        setuser(user)
                        setprofileImage(user.profile_image)
                        // setuserId(user.user_id)
                        setloading(false)
                    }
                }
                else {
                    setuser({})
                    setuserId('')
                    setloading(false)
                }
            }
            else {
                setuser({})
                setuserId('')
                setloading(false)
            }
        } catch (error) {
            setloading(false)
            Alert.alert(error.message)
        }
    }

    const getUserPhotos = async (userId) => {
        try {
            const fomrData = new FormData();
            fomrData.append("actionType", LOGGEDIN_USER_PHOTO);
            fomrData.append("user_id", userId);
            fomrData.append("offset", offset);
            fomrData.append("num_photos_to_fetch", 5);
            const requestOptions = {
                method: 'POST',
                body: fomrData
            };
            const response = await fetch(`${apiUrl.generalUrl}`, requestOptions)
            const { photo_full_url, success, photo_url, num_photos } = await response.json();
            if (success === 1) {
                // setnumPhotos(num_photos)
                setphotoFullURL(photo_full_url)
                setphotoURL(photo_url)
            }
            else {
                setnumPhotos()
                setphotoFullURL([])
                setphotoURL([])
            }
        } catch (error) {
            Alert.alert(error.message)
        }
    }

    const onChangeView = (id, type) => {
        setitemId(id)
        settype(type)
    }

    const follow = () => {
        setmyFollowers((prev) => (
            prev + 1
        ))
        setfollowed(!followed)
    }

    const unFollow = () => {
        setmyFollowers((prev) => (
            prev - 1
        ))
        setfollowed(!followed)
    }
    const scrolling = useRef(new Animated.Value(0)).current;

    const opacity = scrolling.interpolate({
        inputRange: [0, headerHeight],
        outputRange: [1, 0],
        extrapolate: "clamp",
    });

    const goToPage = (screen, item) => {
        navigation.navigate(screen, {
            item,
            screen: screen
        })
    }
    const ratings = {
        ratings: 3.2,
        views: 34000
    }

    const getImageWidth = (item) => {
        var regex = /[?&]([^=#]+)=([^&#]*)/g,
            params = {},
            match;
        while (match = regex.exec(item)) {
            params[match[1]] = match[2];
        }
        console.log(`Params ${params}, item ${item}`)
    }

    return (
        <>
            {loading && <Loader />}
            <StatusBar
                hidden={false}
                animated={true}
                barStyle='light-content'
                showHideTransition="slide"
                backgroundColor={INTEREST_COLOR}
            />
            <>
                <Animated.View style={[Styles.animateHeader, { opacity: opacity }]}>
                    <SharedHeader navigation={navigation} profile={true} topPhoto={true} IMAGE={require('../../../Assets/Images/profile1.png')} user_info={user} />
                </Animated.View>
                <Animated.ScrollView style={Styles.container}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: scrolling } } }],
                        { useNativeDriver: true }
                    )}
                    scrollEventThrottle={16}
                >
                    <BackDrop IMAGE_HEIGHT={IMAGE_HEIGHT} COLOR_HEIGHT={COLOR_HEIGHT} IMAGE={require('../../../Assets/Images/profileback.png')} />
                    <View style={Styles.scrollView}>
                        <View style={Styles.profileImageInfo}>
                            <Image source={{ uri: profile_image }} style={Styles.profileImage} />
                        </View>
                        <View style={Styles.profileInfo}>
                            <View>
                                <View style={Styles.userView}>
                                    <Text style={Styles.usernameText} numberOfLines={1} ellipsizeMode={'tail'}>{user.user_name}</Text>
                                    <Image source={require('../../../Assets/Images/badge.png')} style={Styles.badgeImage} />
                                </View>
                                <View style={Styles.profileInfoData}>
                                    <StarRating ratings={ratings} />
                                </View>
                                <View style={Styles.profileInfoData}>
                                    <Text style={Styles.text1}>{user.following} Following</Text>
                                    <TouchableOpacity onPress={() => goToPage('Followers', user)}>
                                        <Text style={Styles.text1}>{myFollowers} Followers</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={Styles.userAction}>
                                {followed === false ? <TouchableOpacity style={[Styles.userActionInfoCard]} onPress={() => followed === false ? follow() : unFollow()}>
                                    <Text style={Styles.userActionInfoText}>Follow</Text>
                                </TouchableOpacity>
                                    :
                                    <TouchableOpacity style={[Styles.userActionInfoCard1]} onPress={() => followed === false ? follow() : unFollow()}>
                                        <Image source={require('../../../Assets/Images/check.png')} style={Styles.checkImage} />
                                    </TouchableOpacity>
                                }
                                <Pressable style={[Styles.photoActionCard]}>
                                    <Text style={Styles.userActionInfoText1} numberOfLines={1} ellipsizeMode={'tail'}>{user.photos_count} Photos</Text>
                                </Pressable>
                            </View>
                        </View>
                        <View style={Styles.mainInfo}>
                            {(user && user.about_me) && <View>
                                <Text style={Styles.text}>About Me</Text>
                                <Text style={Styles.infoText}>{user && user.about_me}</Text>
                                {/* <Text style={Styles.infoText}>{user && user.about_me} <Text style={[Styles.infoText, { color: THEME_COLOR }]}>Read more...</Text></Text> */}
                            </View>}
                            <View>
                                <Text style={Styles.text}>Photography Interests</Text>
                                <Text style={[Styles.infoText, { opacity: 0.48 }]}>Advertising | Aerial | Architectural | Astronomical | Music | Event | Family | Fashion | Food</Text>
                            </View>
                        </View>
                        <View style={Styles.portfolioDetails}>
                            <ArrayList
                                data={Options}
                                extraData={Options}
                                horizontal={true}
                                renderItem={({ item }) => (<Pressable style={Styles.portfolioInfo} onPress={() => onChangeView(item.id, item.name)}>
                                    <Text style={[Styles.portfolioDetailsText, itemId === item.id && Styles.portfolioDetailsTextActive]}>{item.name}</Text>
                                    <View style={itemId === item.id ? Styles.circle : Styles.rectangle} />
                                </Pressable>
                                )}
                            />
                        </View>
                        {type === 'Photo' && <>
                            <ArrayList
                                data={photoURL}
                                keyExtractor={(item, index) => index}
                                numColumns={2}
                                renderItem={({ item }) => (
                                    <Pressable style={Styles.portfolioShowcaseView} onPress={() => getImageWidth(item)}>
                                        <Image source={{ uri: item }} style={[Styles.portfolioShowcaseInfo, {
                                            height: 200
                                        }]} />
                                    </Pressable>
                                )}
                            />
                        </>}
                        {type === 'Portfolio' && <>
                            <ArrayList
                                data={portfolioURL}
                                keyExtractor={(item, index) => index}
                                numColumns={2}
                                renderItem={({ item }) => (
                                    <Pressable style={Styles.portfolioShowcaseView}>
                                        <Image source={{ uri: item }} style={Styles.portfolioShowcaseInfo} />
                                    </Pressable>
                                )}
                            />
                        </>}
                        {type === 'Videos' && <>
                            <ArrayList
                                data={videoURL}
                                keyExtractor={(item, index) => index}
                                numColumns={2}
                                renderItem={({ item }) => (
                                    <View style={Styles.portfolioShowcaseView}>
                                        <Image source={{ uri: item }} style={Styles.portfolioShowcaseInfo} />
                                    </View>
                                )}
                            />
                        </>}
                        {type === 'Blog' && <>
                            <ArrayList
                                data={blogsURL}
                                keyExtractor={(item, index) => index}
                                numColumns={2}
                                renderItem={({ item }) => (
                                    <View style={Styles.portfolioShowcaseView}>
                                        <Image source={{ uri: item }} style={Styles.portfolioShowcaseInfo} />
                                    </View>
                                )}
                            />
                        </>}
                        {type === 'Groups' && <>
                            <ArrayList
                                data={groupsURL}
                                keyExtractor={(item, index) => index}
                                numColumns={2}
                                renderItem={({ item }) => (
                                    <View style={Styles.portfolioShowcaseView}>
                                        <Image source={{ uri: item }} style={Styles.portfolioShowcaseInfo} />
                                    </View>
                                )}
                            />
                        </>}
                        {type === 'Event' && <>
                            <ArrayList
                                data={photoURL}
                                keyExtractor={(item, index) => index}
                                numColumns={2}
                                renderItem={({ item }) => (
                                    <View style={Styles.portfolioShowcaseView}>
                                        <Image source={{ uri: item }} style={Styles.portfolioShowcaseInfo} />
                                    </View>
                                )}
                            />
                        </>}
                    </View>
                </Animated.ScrollView>
            </>
        </>
    )
}
