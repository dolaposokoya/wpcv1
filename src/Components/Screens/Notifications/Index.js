import React, { useState, useEffect } from 'react'
import { View, Text, Dimensions, Image, Pressable, StatusBar, ScrollView } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import { INTEREST_COLOR } from '../../../Config/Config'
import SharedHeader from '../../Shared/SharedHeader/SharedHeader'
import Loader from '../../Shared/Loader/Loader'
import Styles from './Styles';
import ArrayList from '../../Shared/ArrayList/ArrayList'
import AsyncStorage from '@react-native-async-storage/async-storage'
import MessageModal from '../../Shared/Modal/MessageModal'



const { width, height } = Dimensions.get('screen');

export default function Index(props) {

    const { navigation } = props
    const [loading, setloading] = useState(false)
    const [pushNotifications, setpushNotifications] = useState([])
    const [email, setemail] = useState([]);
    const [errorType, seterrorType] = useState('')
    const [openModal, setopenModal] = useState(false)
    const [message, setmessage] = useState('')

    const PushNotification = [
        {
            id: '1',
            name: 'Likes on your photo',
            status: true
        },
        {
            id: '2',
            name: 'Comments on your photo',
            status: true
        },
        {
            id: '3',
            name: 'New Followers',
            status: true
        },
        {
            id: '4',
            name: 'A Friend joins WPC',
            status: true
        },
        {
            id: '5',
            name: 'Someone mentioned you',
            status: true
        },
        {
            id: '6',
            name: 'Community Updates',
            status: true
        },
    ];

    const Email = [
        {
            id: '1',
            name: 'Likes on your photo',
            status: true
        },
        {
            id: '2',
            name: 'Comments on your photo',
            status: true
        },
        {
            id: '3',
            name: 'New Followers',
            status: true
        },
        {
            id: '4',
            name: 'A Friend joins WPC',
            status: true
        },
        {
            id: '5',
            name: 'Someone mentioned you',
            status: true
        },
        {
            id: '6',
            name: 'Community Updates',
            status: false
        },
    ];


    useEffect(() => {
        loadPageData(true);
    }, [navigation]);

    const closeModal = (state) => {
        setmessage('')
        seterrorType('')
        setopenModal(state)
    }

    const loadPageData = async (loading) => {
        try {
            setloading(loading);
            const pushValue = await AsyncStorage.getItem('@notificationSettings')
            const emailValue = await AsyncStorage.getItem('@emailSettings')
            if (emailValue !== null && pushValue !== null) {
                setpushNotifications(JSON.parse(pushValue))
                setemail(JSON.parse(emailValue))
                setloading(false);
            }
            else {
                const notificationSettings = JSON.stringify(PushNotification)
                const emailSettings = JSON.stringify(Email)
                await AsyncStorage.setItem('@notificationSettings', notificationSettings)
                await AsyncStorage.setItem('@emailSettings', emailSettings)
                setloading(false);
            }
        } catch (error) {
            setloading(false);
            seterrorType('warning')
            setmessage(error.message)
            setopenModal(true)
        }
    }

    const changePushStatus = async (id, status) => {
        try {
            const pushValue = await AsyncStorage.getItem('@notificationSettings')
            if (pushValue !== null) {
                const newValue = JSON.parse(pushValue);
                const data = newValue.filter(item => {
                    if (item.id === id) {
                        item.status = !status
                    }
                    return item;
                })
                await AsyncStorage.setItem('@notificationSettings', JSON.stringify(data))
                loadPageData(false);
            }
            else {
                await AsyncStorage.setItem('@notificationSettings', pushValue)
                loadPageData(false);
            }
        } catch (error) {
            seterrorType('warning')
            setmessage(error.message)
            setopenModal(true)
        }
    }
    const changeEmailStatus = async (id, status) => {
        try {
            const emailValue = await AsyncStorage.getItem('@emailSettings')
            if (emailValue !== null) {
                const newValue = JSON.parse(emailValue);
                const data = newValue.filter(item => {
                    if (item.id === id) {
                        item.status = !status
                    }
                    return item;
                })
                await AsyncStorage.setItem('@emailSettings', JSON.stringify(data))
                loadPageData(false);
            }
            else {
                await AsyncStorage.setItem('@emailSettings', emailValue)
                loadPageData(false);
            }
        } catch (error) {
            seterrorType('warning')
            setmessage(error.message)
            setopenModal(true)
        }
    }

    return (
        <>
            <StatusBar
                hidden={false}
                animated={true}
                barStyle='light-content'
                showHideTransition="slide"
                backgroundColor={INTEREST_COLOR}
            />
            {loading && <Loader />}
            {openModal && <MessageModal closeModal={closeModal} message={message} errorType={errorType} />}
            <SharedHeader navigation={navigation} name="Notifications" />
            <ScrollView style={Styles.scrollView}
                contentContainerStyle={Styles.contentContainerStyle}
            >
                <View style={Styles.body}>
                    <Text style={Styles.settingsName}>PUSH NOTIFICATIONS</Text>
                    <View style={Styles.underLine} />
                    <>
                        <ArrayList
                            style={{
                                marginBottom: moderateScale(25)
                            }}
                            data={pushNotifications}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <View style={Styles.notificationView}>
                                    <Text style={Styles.typeName}>{item.name}</Text>
                                    <Pressable
                                        onPress={() => changePushStatus(item.id, item.status)}
                                    >
                                        <Image style={Styles.switch} source={item.status === true ? require('../../../Assets/Images/onswitch.png') : require('../../../Assets/Images/offswitch.png')} />
                                    </Pressable>
                                </View>
                            )}
                        />
                    </>
                    <Text style={[Styles.settingsName, { marginTop: moderateScale(25) }]}>EMAILS</Text>
                    <View style={Styles.underLine} />
                    <>
                        <ArrayList
                            style={{
                                marginBottom: moderateScale(25)
                            }}
                            data={email}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <View style={Styles.notificationView}>
                                    <Text style={Styles.typeName}>{item.name}</Text>
                                    <Pressable
                                        onPress={() => changeEmailStatus(item.id, item.status)}
                                    >
                                        <Image style={Styles.switch} source={item.status === true ? require('../../../Assets/Images/onswitch.png') : require('../../../Assets/Images/offswitch.png')} />
                                    </Pressable>
                                </View>
                            )}
                        />
                    </>
                </View>
            </ScrollView>
        </>
    )
}
