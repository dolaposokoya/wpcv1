import React, { useEffect, useState } from 'react'
import { View, Text, Image, Dimensions, TouchableOpacity, ImageBackground, ScrollView } from 'react-native'
import Loader from '../../Shared/Loader/Loader'
import Style from './Style'
import { connect } from 'react-redux';
import { GetCookieAction } from '../../../Actions/CookieAction'
import AsyncStorage from '@react-native-async-storage/async-storage'
import MessageModal from '../../Shared/Modal/MessageModal';
import { StatusBar } from 'expo-status-bar';
import { BLACK, WHITE } from '../../../Config/Config';



const { height, width } = Dimensions.get('screen')
function Index(props) {
    const { navigation, GetCookieAction } = props
    const [page, setpage] = useState('');
    const [checking, setchecking] = useState(false)
    const [message, setmessage] = useState('')
    const [openModal, setopenModal] = useState(false)
    const [errorType, seterrorType] = useState('');

    useEffect(() => {
        checkUser()
        const unsubscribe = navigation.addListener('focus', () => {
            checkUser()
        });
        return () => unsubscribe;
    }, [navigation])

    const checkUser = async () => {
        try {
            setchecking(true)
            const basicAuth = await AsyncStorage.getItem('@basicAuth');
            await GetCookieAction(response => {
                const { success, data } = response
                if (success === true) {
                    if (data.value === basicAuth) {
                        setpage('Home')
                        navigation.navigate('Home')
                        setTimeout(() => {
                            setchecking(false)
                        }, 2000);
                    }
                    else {
                        setpage('IntroPage')
                        setchecking(false)
                        return false
                    }
                }
                else {
                    setpage('IntroPage')
                    setchecking(false)
                    return false
                }
            })
        } catch (error) {
            setchecking(false)
            seterrorType('warning')
            setmessage(error.message)
            setopenModal(true)
        }
    }

    const closeModal = (state) => {
        setmessage('')
        seterrorType('')
        setopenModal(state)
    }
    return (
        <>
            {openModal && <MessageModal closeModal={closeModal} message={message} errorType={errorType} />}
            {checking ? <Loader />
                :
                <>
                    <StatusBar
                        StatusBarAnimation='slide'
                        StatusBarStyle='auto'
                    />
                    <ScrollView style={Style.container}>
                        <ImageBackground source={require('../../../Assets/Images/slide.png')}
                            style={Style.imageBackground}
                            resizeMode={'cover'}
                        >
                            <View style={Style.middleImageContainer}>
                                <Image source={require('../../../Assets/Images/slideintro.png')}
                                    style={Style.middleImage}
                                />
                                <Text style={Style.middleImageText}>Everyone's A Photographer</Text>
                            </View>
                        </ImageBackground>
                        <View style={Style.buttonContainer}>
                            <TouchableOpacity style={Style.button} onPress={() => navigation.navigate('Login')}>
                                <Text style={Style.buttonText}>Sign In</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[Style.button, { backgroundColor: WHITE }]} onPress={() => navigation.navigate('SignUp')}>
                                <Text style={[Style.buttonText, { color: BLACK }]}>Create an Account</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </>
            }
        </>
    )
}

const mapStateToProps = state => {
    const { cookie } = state.CookieReducer;
    return {
        cookie
    };
};

const IntroPage = connect(
    mapStateToProps,
    { GetCookieAction },
)(Index);
export default IntroPage;

