import React, { useState, useEffect } from 'react'
import { View, Image, ActivityIndicator, RefreshControl, Dimensions, StatusBar, Text } from 'react-native'
import { TOP_PHOTOS } from '../../../ActionType/ActionType'
import { apiUrl, INTEREST_COLOR } from '../../../Config/Config'
import Loader from '../../Shared/Loader/Loader'
import RecentPhotos from '../../Shared/RecentPhotos/RecentPhotos'
import SharedHeader from '../../Shared/SharedHeader/SharedHeader'
import Styles from './Style'
import Animated from 'react-native-reanimated'
import { moderateScale } from 'react-native-size-matters';
import { TouchableOpacity } from 'react-native-gesture-handler'
import ArrayList from '../../Shared/ArrayList/ArrayList'
import MessageModal from '../../Shared/Modal/MessageModal'


const { width, height } = Dimensions.get('screen')
export default function Index(props) {
    const { navigation } = props
    const [offset, setoffset] = useState(5)
    const [topPhotos, settopPhotos] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [photoView, setphotoView] = useState([])
    const [photoLikes, setphotoLikes] = useState([])
    const [photoFullUrl, setphotoFullUrl] = useState([])
    const [parents, setparents] = useState([])
    const [loading, setloading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const [pictureComment, setpictureComment] = useState([])

    const [message, setmessage] = useState('')
    const [errorType, seterrorType] = useState('')
    const [openModal, setopenModal] = useState(false)

    useEffect(() => {
        setloading(true)
        loadPageData()
    }, [])


    const loadPageData = async () => {
        try {
            setloading(true)
            const fomrData = new FormData()
            fomrData.append("actionType", TOP_PHOTOS);
            fomrData.append("offset", offset)
            fomrData.append("num_photos_to_fetch", 10)
            const requestOptions = {
                method: 'POST',
                body: fomrData
            };
            const response = await fetch(`${apiUrl.generalUrl}`, requestOptions)
            const { photo_url, views, likes, success, photo_full_url, parent, num_comments } = await response.json();
            if (success === 1) {
                settopPhotos(photo_url);
                setphotoView(views);
                setphotoLikes(likes)
                setpictureComment(num_comments)
                setphotoFullUrl(photo_full_url)
                setparents(parent)
                setloading(false)
            }
            else {
                settopPhotos([])
                setloading(false)
            }
        } catch (error) {
            setloading(false)
            seterrorType('error')
            setmessage(error.message)
            setopenModal(true)
        }
    }

    const onRefresh = async () => {
        setRefreshing(true)
        await loadPageData()
        setRefreshing(false)
    }

    const loadMore = async () => {
        try {
            setIsLoading(true);
            setoffset((previousState) => {
                console.log('previousState', previousState)
                return previousState + 5
            })
            const fomrData = new FormData()
            fomrData.append("actionType", TOP_PHOTOS);
            fomrData.append("offset", offset)
            fomrData.append("num_photos_to_fetch", 10)
            const requestOptions = {
                method: 'POST',
                body: fomrData
            };
            const response = await fetch(`${apiUrl.generalUrl}`, requestOptions)
            const { photo_url, views, likes, success, photo_full_url, parent, num_comments } = await response.json();
            if (success === 1) {
                const urlLink = [...topPhotos, ...photo_url]
                settopPhotos(urlLink);
                setphotoView([...photoView, ...views]);
                setphotoLikes([...photoLikes, ...likes])
                setphotoFullUrl([...photoFullUrl, ...photo_full_url])
                setparents([...parents, ...parent])
                setpictureComment([...pictureComment, ...num_comments])
                setIsLoading(false);
            }
            else {
                settopPhotos(topPhotos)
                setIsLoading(false);
            }
        } catch (error) {
            setIsLoading(false);
            seterrorType('error')
            setmessage(error.message)
            setopenModal(true)
        }
    }

    const RenderLoader = () => {
        return (
            isLoading ?
                <View style={Styles.loaderStyle}>
                    <ActivityIndicator size="large" color={'red'} />
                </View> : null
        );
    };

    const commentPhoto = (index, item) => {
        navigation.navigate('Comment', {
            index: index,
            item: item,
            topPhotos: topPhotos,
            photoView: photoView,
            photoLikes: photoLikes,
            photoFullUrl: photoFullUrl,
            parent: parents,
            comment: pictureComment
        })
    }

    const closeModal = (state) => {
        setmessage('')
        seterrorType('')
        setopenModal(state)
    }

    return (
        <>
            {isLoading && <Loader />}
            <StatusBar
                hidden={false}
                backgroundColor={INTEREST_COLOR}
            />
            {openModal && <MessageModal closeModal={closeModal} message={message} errorType={errorType} />}
            <SharedHeader navigation={navigation} back={true} name="Top Photographer" />
            <Animated.ScrollView
                contentContainerStyle={Styles.scrollView}
                scrollEventThrottle={16}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            >
                <View
                    style={{
                        marginBottom: moderateScale(10),
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    {topPhotos && <>
                        <ArrayList
                            bounces={false}
                            data={topPhotos}
                            keyExtractor={(item, index) => index}
                            renderItem={({ item, index }) => (
                                <RecentPhotos item={item} topPhotos={topPhotos} index={index}
                                    loading={loading}
                                    photoView={photoView} photoLikes={photoLikes} photoFullUrl={photoFullUrl} parents={parents}
                                    comment={pictureComment}
                                    navigation={navigation}
                                    commentPhoto={commentPhoto}
                                />
                            )}
                        // ListFooterComponent={RenderLoader}
                        />
                        {/* {(!isLoading && !loading) && <TouchableOpacity onPress={() => loadMore()}
                            style={Styles.loadMore}
                        >
                            <Image source={require('../../../Assets/Images/down.png')} style={Styles.loadMoreText} />
                        </TouchableOpacity>} */}
                        {(!isLoading && !loading) && <TouchableOpacity onPress={() => loadMore()}
                            style={Styles.loadMore}
                        >
                            <Image source={require('../../../Assets/Images/down.png')} style={Styles.loadMoreText} />
                        </TouchableOpacity>}
                    </>}
                </View>
            </Animated.ScrollView>
        </>
    )
}
