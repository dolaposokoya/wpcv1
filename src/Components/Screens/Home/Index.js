import React, { useState, useEffect, useRef } from 'react'
import { View, Text, Image, Dimensions, ScrollView, TouchableOpacity, RefreshControl, Alert, ActivityIndicator, BackHandler } from 'react-native'
import { THEME_COLOR, apiUrl, blog_base_url, headers } from '../../../Config/Config'
import Styles from './Style'
import Header from '../../Shared/Header/Header'
import Loader from '../../Shared/Loader/Loader'
import ShowCase from '../../Shared/ShowCase/ShowCase'
import Articles from '../../Shared/Articles/Articles'
import Courses from '../../Shared/Courses/Courses'
import RecentPhotos from '../../Shared/RecentPhotos/RecentPhotos';
import { ARTICLES, RECOMMENDED_PHOTOGRAPHERS, TOP_PHOTOS } from '../../../ActionType/ActionType'
import AsyncStorage from '@react-native-async-storage/async-storage'
import CompetitonShowCase from '../../Shared/CompetitonShowCase/CompetitonShowCase'
import { connect } from 'react-redux';
import { CompetitionAction } from '../../../Actions/CompetitionsAction'
import { CourseAction } from '../../../Actions/CoursesAction'
import { StatusBar } from 'expo-status-bar';
import { moderateScale } from 'react-native-size-matters';
import BottomTabs from '../../Shared/BottomTabs/BottomTabs'
import MessageModal from '../../Shared/Modal/MessageModal'
import ArrayList from '../../Shared/ArrayList/ArrayList'
import AppStatusBar from '../../Shared/StatusBar/AppStatusBar'

const { width, height } = Dimensions.get('screen')
const SPACING = width * 0.5;
const AVATAR_SIZE = moderateScale(45);
function Index(props) {

    const { navigation, cookie } = props
    const [loading, setloading] = useState(true);
    const [offset, setoffset] = useState(0)
    const [refreshing, setRefreshing] = useState(false);
    const [topPhotos, settopPhotos] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [morePhotos, setmorePhotos] = useState(false);
    const [photoView, setphotoView] = useState([])
    const [photoLikes, setphotoLikes] = useState([])
    const [photoFullUrl, setphotoFullUrl] = useState([])
    const [parents, setparents] = useState([])
    const [courseName, setcourseName] = useState([])
    const [courseImage, setcourseImage] = useState([])
    const [articelUrl, setarticelUrl] = useState([])
    const [articleTitle, setarticleTitle] = useState([])
    const [articleOffset, setarticleOffset] = useState(1)
    const [createdAt, setcreatedAt] = useState('')
    const [comment, setcomment] = useState([])
    const [page, setpage] = useState('Home')
    const [image1, setimage1] = useState([])
    const [image2, setimage2] = useState([])
    const [photoNum, setphotoNum] = useState([])
    const [userName, setuserName] = useState([])
    const [userId, setuserId] = useState([])
    const [following, setfollowing] = useState([])
    const [profileImage, setprofileImage] = useState([])
    const [loggedId, setloggedId] = useState('')
    const [loggedUser, setloggedUser] = useState('')
    const [competitionData, setcompetitionData] = useState([])
    const [compName, setcompName] = useState([])
    const [compDate, setcompDate] = useState([])
    const [compId, setcompId] = useState([])
    const [compType, setcompType] = useState([])
    const [parentname, setparentname] = useState([])
    const [photo_created_on, setphoto_created_on] = useState([])
    const [description, setdescription] = useState([])

    const [message, setmessage] = useState('')
    const [errorType, seterrorType] = useState('')
    const [openModal, setopenModal] = useState(false)

    useEffect(() => {
        loadPageData()
    }, [])

    const backAction = () => {
        if (!navigation.isFocused()) {
            return false
        }
        else {
            Alert.alert("Hold on!", "Are you sure you want to go back?", [
                {
                    text: "Cancel",
                    onPress: () => null,
                    style: "cancel"
                },
                { text: "YES", onPress: () => BackHandler.exitApp() }
            ]);
            return true;
        }
    };

    useEffect(() => {
        const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);
        return () => backHandler.remove();
    }, []);

    const loadPageData = async () => {
        try {
            setloading(true)
            const loggedInUserName = await AsyncStorage.getItem('@user_name')
            setloggedUser(loggedInUserName)
            await getTopPhotos()
            // await getArticles()
            await getCourses()
            await getRecommendedPhotographers()
            await getCompetitionData()
            setloading(false)
        } catch (error) {
            setloading(false)
            seterrorType('error')
            setmessage(error.message)
            setopenModal(true)
        }
    }


    const onRefresh = async () => {
        await loadPageData();
    }

    const getCompetitionData = async () => {
        // try {
        await props.CompetitionAction(data => {
            const { error, success, message } = data
            if (error === false && success === 1) {
                const { comp_id, comp_name, comp_photo_full_url, comp_date, if_pro_comp } = data.data
                setcompetitionData(comp_photo_full_url)
                setcompName(comp_name)
                setcompDate(comp_date)
                setcompId(comp_id)
                setcompType(if_pro_comp)
                setloading(false)
            }
            else {
                // Alert.alert(message);
            }
        });
        // } catch (error) {
        //     setloading(false)
        // }
    }

    const getTopPhotos = async () => {
        setoffset(0)
        const fomrData = new FormData();
        fomrData.append("actionType", TOP_PHOTOS);
        fomrData.append("offset", offset)
        fomrData.append("num_photos_to_fetch", 10)

        const requestOptions = {
            method: 'POST',
            body: fomrData,
            headers: headers,
            redirect: 'follow'
        };
        const response = await fetch(`${apiUrl.generalUrl}`, requestOptions)
        const { photo_url, views, likes, success, photo_full_url, parent, num_comments, description, photo_created_on } = await response.json();
        if (success === 1) {
            settopPhotos(photo_url)
            setphotoView(views)
            setphotoLikes(likes)
            setphotoFullUrl(photo_full_url)
            setparents(parent)
            setcomment(num_comments)
            setdescription(description)
            setphoto_created_on(photo_created_on)
        }
        else {
            settopPhotos([])
            setphotoView([])
            setphotoLikes([])
        }
    }

    const getRecommendedPhotographers = async () => {
        const user_id = await AsyncStorage.getItem('@user_id')
        const fomrData = new FormData()
        fomrData.append("actionType", RECOMMENDED_PHOTOGRAPHERS);
        fomrData.append("offset", 0)
        fomrData.append("me_id", user_id)
        const requestOptions = {
            method: 'POST',
            body: fomrData,
            headers: headers
        };
        const response = await fetch(`${apiUrl.generalUrl}`, requestOptions)
        const { image_1, num_photos, image_2, success, user_name, userid, is_following_me, profile_image } = await response.json();
        // console.log('response.json()',)
        if (success === 1) {
            const userProfile = []
            profile_image.filter(item => {
                if (!item.includes('https')) {
                    item = `https://www.worldphotographersclub.com${item}`
                    userProfile.push(item)
                }
                else {
                    userProfile.push(item)
                }
            })
            setloggedId(user_id)
            setimage1(image_1)
            setimage2(image_2)
            setphotoNum(num_photos)
            setuserName(user_name)
            setuserId(userid)
            setfollowing(is_following_me)
            setprofileImage(userProfile)
        }
        else {
            setimage1([])
            setimage2([])
        }
    }

    const getArticles = async () => {
        try {
            setarticleOffset(1)
            const fomrData = new FormData()
            fomrData.append("actionType", ARTICLES);
            fomrData.append("offset", articleOffset)
            fomrData.append("num_photos_to_fetch", 15)
            const requestOptions = {
                method: 'POST',
                body: fomrData
            };
            const response = await fetch(`${blog_base_url}`, requestOptions)
            const { parent, views, likes, blog_cover_url, blog_full_url, parent_name, parent_pic, success, created, title } = await response.json();
            if (success === 1) {
                setarticelUrl(blog_cover_url)
                setarticleTitle(title)
                setcreatedAt(created)
                setparentname(parent_name)
            }
            else {
                setarticelUrl([])
                setarticleTitle([])
                setcreatedAt([])
            }
        } catch (error) {
            setarticelUrl([])
            setarticleTitle([])
            setcreatedAt([])
            seterrorType('error')
            setmessage(error.message)
            console.log('Artice;', error)
            setopenModal(true)
        }
    }

    const getCourses = async () => {
        await props.CourseAction(data => {
            const { error, success, message } = data
            if (error === false && success === 1) {
                const { course_id, course_photo_full_url, course_name } = data.data
                setcourseName(course_name)
                setcourseImage(course_photo_full_url)
            }
            else {
                setcourseName(courseName)
                setcourseImage(courseImage)
            }
        });
    }

    const viewAllTopPhotos = async () => {
        try {
            navigation.navigate('TopPhotos', {
                topPhotosUrl: topPhotos,
                views: photoView,
                likes: photoLikes,
                photo_full_url: photoFullUrl,
                parent: parents,
                comment: comment
            })
        } catch (error) {
            seterrorType('error')
            setmessage(error.message)
            setopenModal(true)
        }
    }

    const RenderLoader = () => {
        return (
            isLoading ?
                <View style={Styles.loaderStyle}>
                    <ActivityIndicator size="large" color={THEME_COLOR} />
                </View> : null
        );
    };

    const loadMore = async () => {
        try {
            setIsLoading(true);
            setmorePhotos(true);
            setoffset((previousState) => {
                console.log('previousState', previousState)
                return previousState + 1
            })
            const fomrData = new FormData()
            fomrData.append("actionType", TOP_PHOTOS);
            fomrData.append("offset", offset)
            fomrData.append("num_photos_to_fetch", 10)
            const requestOptions = {
                method: 'POST',
                body: fomrData,
                headers: headers,
                redirect: 'follow'
            };
            const response = await fetch(`${apiUrl.generalUrl}`, requestOptions)
            const { photo_url, views, likes, success, photo_full_url, parent } = await response.json();
            if (success === 1) {
                const urlLink = [...topPhotos, ...photo_url]
                settopPhotos(urlLink);
                setphotoView([...photoView, ...views]);
                setphotoLikes([...photoLikes, ...likes])
                setphotoFullUrl([...photoFullUrl, ...photo_full_url])
                setparents([...parents, ...parent])
                setIsLoading(false);
            }
            else {
                settopPhotos(topPhotos)
                setphotoView(photoView);
                setphotoLikes(photoLikes)
                setphotoFullUrl(photoFullUrl)
                setparents(parents)
                setIsLoading(false);
            }
        } catch (error) {
            setIsLoading(false);
            seterrorType('error')
            setmessage(error.message)
            setopenModal(true)
        }
    }

    const commentPhoto = (index, item) => {
        navigation.navigate('Comment', {
            index: index,
            item: item,
            topPhotos: topPhotos,
            photoView: photoView,
            photoLikes: photoLikes,
            photoFullUrl: photoFullUrl,
            parent: parents,
            comment: comment
        })
    }

    const closeModal = (state) => {
        setmessage('')
        seterrorType('')
        setopenModal(state)
    }

    return (
        <>
            {openModal && <MessageModal closeModal={closeModal} message={message} errorType={errorType} />}
            <AppStatusBar />
            <Header navigation={navigation}>
                <TouchableOpacity style={[Styles.introPageContainer, page === 'Home' && { backgroundColor: THEME_COLOR }]} onPress={() => setpage('Home')}>
                    <Text style={Styles.text}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[Styles.introPageContainer1, page === 'Explore' && { backgroundColor: THEME_COLOR }]} onPress={() => setpage('Explore')}>
                    <Text style={Styles.text}>Explore</Text>
                </TouchableOpacity>
            </Header>
            {loading ? <Loader /> : <>
                {page === 'Home' && <View style={Styles.welcomeContainer}>
                    <Image source={require('../../../Assets/Images/palm.png')} style={Styles.welcomeImage} />
                    <Text style={Styles.welcomeText}>Hi {loggedUser && loggedUser}</Text>
                </View>}
                <ScrollView
                    style={Styles.scrollView}
                    scrollEventThrottle={16}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }>
                    <View>
                        <>
                            {page !== 'Home' && <View style={{
                                marginBottom: height * 0.08
                            }}>
                                <View style={Styles.showCase}>
                                    <Text style={Styles.headingText}>Top Photographer</Text>
                                    {!loading && <TouchableOpacity onPress={() => viewAllTopPhotos()}>
                                        <Text style={Styles.textUnderLine}>View all</Text>
                                    </TouchableOpacity>}
                                </View>
                                <ArrayList
                                    decelerationRate="fast"
                                    data={image1}
                                    keyExtractor={(item, index) => index}
                                    horizontal={true}
                                    renderItem={({ item, index }) => <ShowCase item={item} navigation={navigation} photoNum={photoNum} image2={image2} userName={userName} profileImage={profileImage} following={following} userId={userId} loggedId={loggedId} index={index} getRecommendedPhotographers={getRecommendedPhotographers} loading={loading} />}
                                />
                                <View style={Styles.showCase}>
                                    <Text style={Styles.headingText}>Competitions</Text>
                                    {!loading && <TouchableOpacity onPress={() => navigation.navigate('CompetitionStack')}>
                                        <Text style={Styles.textUnderLine}>View all</Text>
                                    </TouchableOpacity>}
                                </View>
                                <ArrayList
                                    data={competitionData}
                                    keyExtractor={(item, index) => index}
                                    horizontal={true}
                                    decelerationRate="fast"
                                    renderItem={({ item, index }) => <CompetitonShowCase item={item} navigation={navigation} index={index} compName={compName} compDate={compDate} compId={compId} compType={compType} loading={loading} />}
                                />
                                {/* <View style={Styles.showCase}>
                                <Text style={Styles.headingText}>Courses</Text>
                                {!loading && <TouchableOpacity onPress={() => navigation.navigate('Learn')}>
                                    <Text style={Styles.textUnderLine}>View all</Text>
                                </TouchableOpacity>}
                            </View>
                            <View style={{
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <ArrayList
                                    numColumns={2}
                                    bounces={false}
                                    data={courseImage}
                                    keyExtractor={(item, index) => index}
                                    renderItem={({ item, index }) => <Courses item={item} navigation={navigation} courseName={courseName} index={index} loading={loading} />}
                                />
                            </View> */}
                                <View style={Styles.showCase}>
                                    <Text style={Styles.headingText}>Articles</Text>
                                    {!loading && <TouchableOpacity onPress={() => navigation.navigate('Articles')}>
                                        <Text style={Styles.textUnderLine}>View all</Text>
                                    </TouchableOpacity>}
                                </View>
                                <ArrayList
                                    data={articelUrl}
                                    keyExtractor={(item, index) => index}
                                    horizontal={true}
                                    renderItem={({ item, index }) => <Articles item={item} index={index} articleTitle={articleTitle} createdAt={createdAt} parentName={parentname} loading={loading} />}
                                />
                            </View>}

                            {page === 'Home' && <View style={{
                                marginBottom: morePhotos ? moderateScale(100) : moderateScale(20),
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                {topPhotos &&
                                    <>
                                        <ArrayList
                                            data={topPhotos}
                                            keyExtractor={(item, index) => index}
                                            renderItem={({ item, index }) => {
                                                return (
                                                    <RecentPhotos item={item} topPhotos={topPhotos} index={index} photoView={photoView} photoLikes={photoLikes} photoFullUrl={photoFullUrl} parents={parents} comment={comment}
                                                        description={description}
                                                        createdAt={photo_created_on}
                                                        loading={loading} useRef={useRef} navigation={navigation}
                                                        commentPhoto={commentPhoto}
                                                    />
                                                )
                                            }}
                                            ListFooterComponent={Loader}
                                        />
                                        {(!isLoading && !loading) && <TouchableOpacity onPress={() => loadMore()}
                                            style={Styles.loadMore}
                                        >
                                            <Image source={require('../../../Assets/Images/down.png')} style={Styles.loadMoreText} />
                                        </TouchableOpacity>}
                                        {morePhotos && <RenderLoader />}
                                    </>
                                }
                            </View>}
                        </>
                    </View>
                </ScrollView>
            </>
            }
            <BottomTabs focused="home" navigation={navigation} />
        </>
    )
}

const mapStateToProps = state => {
    const { competitionData } = state.CompetitionReducer;
    const { courseData } = state.CoursesReducer;
    const { cookie } = state.CookieReducer;
    return {
        competitionData,
        courseData,
        cookie
    };
};

const Home = connect(
    mapStateToProps,
    { CompetitionAction, CourseAction },
)(Index);
export default Home;