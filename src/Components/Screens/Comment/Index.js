import React, { useState, useEffect } from 'react'
import { View, Text, Dimensions, Image, TouchableOpacity, ScrollView, StatusBar, Platform, TextInput, Alert, ActivityIndicator, RefreshControl } from 'react-native'
import { INTEREST_COLOR, domain, defaultImage, THEME_COLOR } from '../../../Config/Config'
import SharedHeader from '../../Shared/SharedHeader/SharedHeader'
import Styles from './Styles'
import { FlexRow } from '../../../Assets/Styles/Customized/Styled'
import Clipboard from '@react-native-community/clipboard';
import ProfileSheet from '../../Sheets/ProfileSheet/ProfileSheet'
import { moderateScale } from 'react-native-size-matters'
import AsyncStorage from '@react-native-async-storage/async-storage'
import uuid from 'react-native-uuid';
import ArrayList from '../../Shared/ArrayList/ArrayList'
import MessageModal from '../../Shared/Modal/MessageModal'

const { width, height } = Dimensions.get('screen')
export default function Index(props) {
    const { navigation, route } = props
    const { index, item, photoView, photoLikes, photoFullUrl, parent, comment } = route.params;
    // console.log('parent', parent[index], 'item', item)
    const [yourComment, setyourComment] = useState('')
    const [loading, setloading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [userComment, setuserComment] = useState([]);

    const [message, setmessage] = useState('')
    const [errorType, seterrorType] = useState('')
    const [openModal, setopenModal] = useState(false)

    useEffect(() => {
        getComment()
        return () => getComment()
    }, [navigation])

    const getComment = async () => {
        try {
            setloading(false);
            const jsonValue = await AsyncStorage.getItem('@user_comment');
            const value = JSON.parse(jsonValue);
            if (value !== null) {
                setuserComment(value)
                setloading(false);
            }
            else {
                setuserComment([])
                setloading(false);
            }
        } catch (error) {
            Alert.alert(error.message)
            setloading(false);
        }
    };

    const addComment = async (comments) => {
        try {
            const jsonValue = JSON.stringify(comments)
            await AsyncStorage.setItem('@user_comment', jsonValue);
            await getComment()
        } catch (error) {
            Alert.alert(error.message)
        }
    };

    const saveUserComment = async () => {
        try {
            const Comments = await AsyncStorage.getItem('@user_comment');
            const user_id = await AsyncStorage.getItem('@user_id');
            if (Comments === null) {
                if (yourComment !== '') {
                    const newComment = {
                        id: uuid.v4(),
                        name: `${user_id}`,
                        image: defaultImage,
                        time: new Date().getMinutes(),
                        comment: yourComment
                    }
                    const user_comment = []
                    user_comment.push(newComment)
                    // newComment.image = user.profile_image.includes('https') ? user.profile_image : `${domain}${user.profile_image}`
                    setyourComment('')
                    await addComment(user_comment)
                }
                else {
                    return false
                }
            }
            else {
                const newComment = {
                    id: uuid.v4(),
                    name: 'Matthew Wade',
                    image: defaultImage,
                    time: new Date().getMinutes(),
                    comment: yourComment
                }
                const user_comment = JSON.parse(Comments)
                user_comment.push(newComment)
                // newComment.image = user.profile_image.includes('https') ? user.profile_image : `${domain}${user.profile_image}`
                setyourComment('')
                await addComment(user_comment)
            }
        } catch (error) {
            Alert.alert(error.message)
        }
    };

    const deleteComment = async (index) => {
        try {
            const Comments = await AsyncStorage.getItem('@user_comment');
            let user = await AsyncStorage.getItem('@user');
            user = JSON.parse(user)
            if (Comments === null) {
                setmessage('No comment selected')
                seterrorType('warning')
                setopenModal(true)
            }
            else {
                const allComments = JSON.parse(Comments)
                console.log('Old Comment', allComments.length)
                const filteredItems = allComments.filter(item => item.id !== index)
                setyourComment('')
                await addComment(filteredItems)
            }
        } catch (error) {
            setmessage(`${error.message}`)
            seterrorType(`error`)
            setopenModal(true)
        }
    };

    const copyLInk = () => {
        const link = `${domain}photo/${photoFullUrl[index]}`;
        Clipboard.setString(link)
        if (Platform.OS === 'android') {
        }
        else {
        }
    }

    const onRefresh = async () => {
        setRefreshing(true)
        await getComment();
        setTimeout(() => {
            setRefreshing(false)
        }, 3000);
    }

    const closeModal = (state) => {
        setmessage('')
        seterrorType('')
        setopenModal(state)
    }

    return (
        <>
            <StatusBar
                hidden={true}
                animated={true}
                barStyle='light-content'
                backgroundColor={INTEREST_COLOR}
            />

            {openModal && <MessageModal closeModal={closeModal} message={message} errorType={errorType} />}
            <SharedHeader navigation={navigation} name="Photo" />
            <ScrollView
                style={Styles.scrollView}
                contentContainerStyle={{
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            >
                <View style={Styles.body}>
                    <View style={Styles.card}>
                        <FlexRow>
                            <FlexRow>
                                <Image
                                    source={{ uri: item }}
                                    style={Styles.profileImage}
                                />
                                <TouchableOpacity
                                    style={{
                                        marginLeft: '3%',
                                    }}>
                                    <Text style={Styles.text}>{parent[index] === '' ? 'Null' : parent[index]}</Text>
                                    <Text style={Styles.profileText}>Professional Photographer</Text>
                                </TouchableOpacity>
                            </FlexRow>
                            <FlexRow>
                                <Text style={Styles.profileDate}>12i July, 2021</Text>
                                <ProfileSheet copyLInk={copyLInk} />
                            </FlexRow>
                        </FlexRow>
                        <View style={Styles.profileImageView}>
                            <Image
                                source={{ uri: item }}
                                style={Styles.profileImageViewImg}
                            />
                        </View>
                        <View style={Styles.commentView}>
                            <Text style={Styles.commentText}>lorem ipsum is simply dummy text of the printing and typesetting industry...</Text>
                            <View style={Styles.likes}>
                                <Text style={Styles.like}>{photoLikes[index]} likes</Text>
                                <Text style={Styles.like}>{comment && comment[index]} comments</Text>
                            </View>
                            <Text style={[Styles.commentText, { opacity: 0.57, marginTop: moderateScale(5) }]}>Show previous comments</Text>
                        </View>
                        {(loading || refreshing) ? <ActivityIndicator size="large" color={THEME_COLOR} style={{
                            marginTop: moderateScale(22)
                        }} /> :
                            <View
                                style={{
                                    paddingBottom: moderateScale(65),
                                }}
                            >
                                <ArrayList
                                    data={userComment}
                                    keyExtractor={(item) => item.id}
                                    bounces={false}
                                    renderItem={({ item }) => (
                                        <View
                                            key={item.id}
                                            style={{
                                                marginLeft: width * 0.025,
                                            }}>
                                            <View style={Styles.prevComments}>
                                                <View style={Styles.commentViewImg}>
                                                    <Image
                                                        source={{ uri: item.image }}
                                                        style={Styles.commentImg}
                                                    />
                                                    <TouchableOpacity
                                                        style={{
                                                            marginLeft: '3%',
                                                        }}>
                                                        <Text style={Styles.text}>{item.name}</Text>
                                                        <Text style={Styles.profileText}>{item.time} minute ago</Text>
                                                    </TouchableOpacity>
                                                </View>
                                                <View style={{
                                                    flexDirection: 'row',
                                                    paddingLeft: moderateScale(10),
                                                    paddingRight: moderateScale(10),
                                                    justifyContent: 'space-between'
                                                }}>
                                                    <TouchableOpacity>
                                                        <Image
                                                            source={require('../../../Assets/Images/pointer.png')}
                                                            style={Styles.pointerImg}
                                                        />
                                                    </TouchableOpacity>
                                                    <TouchableOpacity onPress={() => deleteComment(item.id)}>
                                                        <Image
                                                            source={require('../../../Assets/Images/bin.png')}
                                                            style={Styles.binImg}
                                                        />
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                            <View style={Styles.prevCommentView}>
                                                <Text style={Styles.prevCommentViewText}>{item.comment}</Text>
                                            </View>
                                        </View>
                                    )}
                                />
                            </View>
                        }
                    </View>
                </View>
            </ScrollView>
            <View style={Styles.inputView}>
                <TextInput
                    style={Styles.textInput}
                    placeholderTextColor={'#4D515C'}
                    placeholder="Your Comment"
                    value={yourComment}
                    onChangeText={(text) => setyourComment(text)}
                />
                <TouchableOpacity style={Styles.sendBtn} onPress={() => saveUserComment()}>
                    <Text style={Styles.sendBtnText}>Send</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}
