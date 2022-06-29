import React, { useState, useEffect, useRef } from 'react'
import { View, Text, Alert, Dimensions, Image, TouchableOpacity, Pressable, Platform, StatusBar } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { apiUrl, Options, domain, defaultImage, THEME_COLOR_BACKGROUND } from '../../../Config/Config';
import Styles from './Style'
import { FETCH_USER, LOGGEDIN_USER_PHOTO } from '../../../ActionType/ActionType';
import Loader from '../../Shared/Loader/Loader';
import Animated from 'react-native-reanimated'
import { scale, moderateScale } from 'react-native-size-matters';
import BackDrop from '../../Shared/BackDrop/BackDrop';
import CustomSheet from '../../Sheets/CustomSheet/CustomSheet';
import StarRating from '../../Shared/StarRating/StarRating';
import ArrayList from '../../Shared/ArrayList/ArrayList';
import * as ImagePicker from 'expo-image-picker';
import AppStatusBar from '../../Shared/StatusBar/AppStatusBar';



const { width, height } = Dimensions.get('screen')
const MIN_HEIGHT = Platform.OS === 'ios' ? 90 : 55;

// const IMAGE_HEIGHT = height * .20;
const IMAGE_HEIGHT = scale(210);
const IMAGE_HEIGHT1 = scale(230);
const COLOR_HEIGHT = ((height * 1) - IMAGE_HEIGHT)
const headerHeight = height * 0.12;

export default function Index(props) {

    const { navigation } = props
    const [user, setuser] = useState({})
    const [userId, setuserId] = useState('')
    const [loading, setloading] = useState(false)
    const [itemId, setitemId] = useState("1")
    const [offset, setoffset] = useState(0)
    const [numPhotos, setnumPhotos] = useState(0)
    const [photoFullURL, setphotoFullURL] = useState([])
    const [photoURL, setphotoURL] = useState([])
    const [type, settype] = useState('Photo')
    const [profileImage, setprofileImage] = useState(defaultImage)

    useEffect(() => {
        getUserData()
        const unsubscribe = navigation.addListener('focus', () => {
            getUserData()
        });
        return unsubscribe;
    }, [navigation])

    const onChangeView = (id, type) => {
        setitemId(id)
        settype(type)
    }

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        Alert.alert(result);

        if (!result.cancelled) {
            setprofileImage(result.uri)
        }
    };


    const getUserData = async () => {
        try {
            setloading(true)
            const user_id = await AsyncStorage.getItem('@user_id')
            if (user_id !== null) {
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
                        setuserId(user.user_id)
                        setloading(false)
                    }
                    else {
                        user.profile_image = `${domain}${user.profile_image}`
                        setuser(user)
                        setprofileImage(user.profile_image)
                        setuserId(user.user_id)
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
            fomrData.append("num_photos_to_fetch", 10);
            const requestOptions = {
                method: 'POST',
                body: fomrData
            };
            const response = await fetch(`${apiUrl.generalUrl}`, requestOptions)
            const { photo_full_url, success, photo_url, num_photos } = await response.json();
            if (success === 1) {
                setnumPhotos(num_photos)
                setphotoFullURL(photo_full_url)
                setphotoURL(photo_url)
            }
            else {
                setnumPhotos([])
                setphotoFullURL([])
                setphotoURL([])
            }
        } catch (error) {
            Alert.alert(error.message)
        }
    }

    const editUser = () => {
        navigation.navigate('EditProfile', {
            user: user,
        })
    }

    const goToPage = (screen, item) => {
        navigation.navigate(screen, {
            item,
            screen: screen
        })
    }

    const scrolling = useRef(new Animated.Value(0)).current;

    const opacity = scrolling.interpolate({
        inputRange: [0, headerHeight],
        outputRange: [1, 0],
        extrapolate: "clamp",
    });

    const ratings = {
        ratings: 4.2,
        views: 34000
    }

    return (
        <>
            <AppStatusBar />
            {loading ? <Loader backgroundColor={THEME_COLOR_BACKGROUND} /> : <>
                <Animated.View style={[Styles.animateHeader, { opacity }]}>
                    <View style={Styles.animateView}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image source={require('../../../Assets/Images/left.png')} style={Styles.backBtn} />
                        </TouchableOpacity>
                        <CustomSheet profileContainer={Styles.profileContainer} backBtn={Styles.backBtn} navigation={navigation} editUser={editUser} />
                    </View>
                </Animated.View>
                {user && <Animated.ScrollView style={Styles.foreGround}
                    contentContainerStyle={{
                        justifyContent: 'center',
                        alignItems: "center",
                    }}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: scrolling } } }],
                        { useNativeDriver: true }
                    )}
                    scrollEventThrottle={16}
                >
                    {user && <BackDrop IMAGE_HEIGHT={IMAGE_HEIGHT} COLOR_HEIGHT={COLOR_HEIGHT} IMAGE={require('../../../Assets/Images/profile1.png')} />}
                    <View style={Styles.foreGround1}>
                        <View style={Styles.profileView}>
                            <Image source={{ uri: `${profileImage}` }}
                                style={Styles.profileImage}
                            />
                            <View style={{
                                marginLeft: moderateScale(10),
                            }}>
                                <Text style={Styles.profileName}>{user?.user_name}</Text>
                                <View style={Styles.followerView}>
                                    <StarRating ratings={ratings} />
                                </View>
                                <View style={Styles.followView}>
                                    <View style={Styles.followerView}>
                                        <TouchableOpacity onPress={() => goToPage('Following', user)}>
                                            <Text style={[Styles.userText, { paddingRight: moderateScale(10) }]}>{user.following} Following</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => goToPage('Followers', user)}>
                                            <Text style={[Styles.userText]}>{user.followers} Followers</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <TouchableOpacity onPress={() => navigation.navigate("UpgradeMembership")} style={Styles.membershipView}>
                                        <Text style={Styles.membershipText}>Membership</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={Styles.aboutView}>
                        <Text style={Styles.about}>About Me</Text>
                        <Text style={Styles.aboutText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry<TouchableOpacity><Text style={Styles.readMore}>Read More...</Text></TouchableOpacity></Text>
                    </View>
                    <View style={Styles.interest}>
                        <Text style={Styles.about}>Photography Interest</Text>
                        <View style={Styles.interestView}>
                            <Text style={Styles.userText}>Advertising</Text>
                            <View style={Styles.lineView} />
                            <Text style={Styles.userText}>Aerial</Text>
                            <View style={Styles.lineView} />
                            <Text style={Styles.userText}>Architectural</Text>
                            <View style={Styles.lineView} />
                            <Text style={Styles.userText}>Astronomical</Text>
                            <View style={Styles.lineView} />
                            <Text style={Styles.userText}>Music</Text>
                            <View style={Styles.lineView} />
                            <Text style={Styles.userText}>Event</Text>
                            <View style={Styles.lineView} />
                            <Text style={Styles.userText}>Family</Text>
                            <View style={Styles.lineView} />
                            <Text style={Styles.userText}>Fashion</Text>
                            <View style={Styles.lineView} />
                            <Text style={Styles.userText}>Food</Text>
                        </View>
                    </View>
                    <View style={[Styles.userInfo, { marginTop: 20 }]}>
                        <ArrayList
                            data={Options}
                            extraData={Options}
                            horizontal={true}
                            renderItem={({ item }) => (
                                <View>
                                    <Pressable style={Styles.userInfoDetails1} onPress={() => onChangeView(item.id, item.name)}>
                                        <Text style={[Styles.userText2, itemId === item.id && Styles.userTextActive]}>{item.name}</Text>
                                        <View style={itemId === item.id ? Styles.circle : Styles.rectangle} />
                                    </Pressable>
                                </View>
                            )}
                        />
                    </View>
                    {type === 'Photo' && <>
                        {photoFullURL.length > 0 ? <ArrayList
                            data={photoURL}
                            keyExtractor={(item) => item.id}
                            numColumns={2}
                            renderItem={({ item }) => (
                                <Image source={{ uri: item }} style={Styles.portfolioShowcaseInfo} />
                            )}
                        /> : <View style={Styles.noUpload}>
                            <View style={Styles.noMediaUploadView}>
                                <Text style={Styles.noMediaUpload}
                                >Upload your first photo</Text>
                                <Text style={Styles.noMediaText}
                                >Start contributing by importing</Text>
                                <Text style={Styles.noMediaText}
                                >photos from your camera roll</Text>
                                <Text style={[Styles.noMediaText, { marginBottom: 23, }]}
                                >or take a new photo</Text>
                            </View>
                            <Pressable style={Styles.noMediaView} onPress={() => navigation.navigate('UploadPhoto')}>
                                <Text style={Styles.noMediaText}
                                >Go to phone library</Text>
                            </Pressable>
                        </View>}
                    </>}
                    {type === 'Portfolio' && <>
                        {photoFullURL.length > 0 ? <ArrayList
                            data={photoURL}
                            keyExtractor={(item) => item.id}
                            numColumns={2}
                            renderItem={({ item }) => (
                                <Image source={{ uri: item }} style={Styles.portfolioShowcaseInfo} />
                            )}
                        /> : <View style={Styles.noMedia}>
                            <View style={Styles.noMediaImageView}>
                                <Image source={require('../../../Assets/Images/portfolio.png')} style={Styles.noMediaImage} />
                                <Text style={Styles.noMediaText}
                                >Portfolio is not availabe yet</Text>
                            </View>
                            <Pressable style={Styles.noMediaView}>
                                <Text style={Styles.noMediaText}
                                >Go to phone library</Text>
                            </Pressable>
                        </View>}
                    </>}
                    {type === 'Videos' && <>
                        {photoFullURL.length > 0 ? <ArrayList
                            data={photoURL}
                            keyExtractor={(item) => item.id}
                            numColumns={2}
                            renderItem={({ item }) => (
                                <Image source={{ uri: item }} style={Styles.portfolioShowcaseInfo} />
                            )}
                        /> :
                            <View style={Styles.noMedia}>
                                <View style={Styles.noMediaImageView}>
                                    <Image source={require('../../../Assets/Images/video.png')} style={Styles.noMediaImageVideo} />
                                    <Text style={Styles.noMediaText}
                                    >Video is not availabe yet</Text>
                                </View>
                                <Pressable style={Styles.noMediaView}>
                                    <Text style={Styles.noMediaText}
                                    >Go to phone library</Text>
                                </Pressable>
                            </View>}
                    </>}
                    {type === 'Blog' && <>
                        {photoFullURL.length > 0 ?
                            <ArrayList
                                data={photoURL}
                                keyExtractor={(item) => item.id}
                                numColumns={2}
                                renderItem={({ item }) => (
                                    <Image source={{ uri: item }} style={Styles.portfolioShowcaseInfo} />
                                )}
                            /> : <View style={Styles.noMedia}>
                                <View style={Styles.noMediaImageView}>
                                    <Image source={require('../../../Assets/Images/blog.png')} style={Styles.noMediaImage} />
                                    <Text style={Styles.noMediaText}
                                    >Blog is not availabe yet</Text>
                                </View>
                                <Pressable style={Styles.noMediaView}>
                                    <Text style={Styles.noMediaText}
                                    >Go to phone library</Text>
                                </Pressable>
                            </View>}
                    </>}
                    {type === 'Groups' && <>
                        {photoFullURL.length > 0 ?
                            <ArrayList
                                data={photoURL}
                                keyExtractor={(item) => item.id}
                                numColumns={2}
                                renderItem={({ item }) => (
                                    <Image source={{ uri: item }} style={Styles.portfolioShowcaseInfo} />
                                )}
                            /> : <View style={Styles.noMedia}>
                                <View style={Styles.noMediaImageView}>
                                    <Image source={require('../../../Assets/Images/blog.png')} style={Styles.noMediaImage} />
                                    <Text style={Styles.noMediaText}
                                    >Group is not availabe yet</Text>
                                </View>
                                <Pressable style={Styles.noMediaView}>
                                    <Text style={Styles.noMediaText}
                                    >Go to phone library</Text>
                                </Pressable>
                            </View>}
                    </>}
                    {type === 'Event' && <>
                        {photoFullURL.length > 0 ?
                            <ArrayList
                                data={photoURL}
                                keyExtractor={(item) => item.id}
                                numColumns={2}
                                renderItem={({ item }) => (
                                    <Image source={{ uri: item }} style={Styles.portfolioShowcaseInfo} />
                                )}
                            /> : <View style={Styles.noMedia}>
                                <View style={Styles.noMediaImageView}>
                                    <Image source={require('../../../Assets/Images/blog.png')} style={Styles.noMediaImage} />
                                    <Text style={Styles.noMediaText}
                                    >Event is not availabe yet</Text>
                                </View>
                                <Pressable style={Styles.noMediaView}>
                                    <Text style={Styles.noMediaText}
                                    >Go to phone library</Text>
                                </Pressable>
                            </View>}
                    </>}
                </Animated.ScrollView>}
            </>}
        </>
    )
}
