import React, { useState } from 'react'
import { View, Text, Dimensions, Image, TouchableOpacity, StatusBar, Alert } from 'react-native'
import { INTEREST_COLOR } from '../../../Config/Config'
import LogOut from '../../Shared/Modal/LogOut'
import SharedHeader from '../../Shared/SharedHeader/SharedHeader'
import Styles from './Styles'
import { connect } from 'react-redux';
import { GetCookieAction, DeleteCookieAction } from '../../../Actions/CookieAction'
import Loader from '../../Shared/Loader/Loader'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Animated from 'react-native-reanimated'
import ArrayList from '../../Shared/ArrayList/ArrayList'


const { width, height } = Dimensions.get('screen')

function Index(props) {
    const { navigation, cookie, DeleteCookieAction } = props
    const interestOptions = [
        {
            id: "1",
            name: "WPC Status",
        },
        {
            id: "2",
            name: "Quota Details",
        },
        {
            id: "3",
            name: "Account",
        },
        {
            id: "4",
            name: "Contact Info",
        },
        {
            id: "5",
            name: "Payment Info",
        },
        {
            id: "6",
            name: "Payment Status",
        },
        {
            id: "7",
            name: "My Ads",
        },
        {
            id: "8",
            name: "Privacy Options",
        },
        {
            id: "9",
            name: "Help & Feedback",
        },
        {
            id: "10",
            name: "Log Out",
        },
    ]
    const [data, setdata] = useState(interestOptions)
    const [openModal, setopenModal] = useState(false)
    const [loading, setloading] = useState(false)

    const goToScreen = (screen) => {
        console.log('Screen', screen)
        if (screen === 'Log Out') {
            setopenModal(true)
        }
        else {
            navigation.navigate(screen)
        }
    }

    const logOut = async () => {
        try {
            await AsyncStorage.removeItem('@basicAuth')
            await DeleteCookieAction(response => {
                console.log('Account', response)
                const { data, success } = response
                if (success === true && data === null) {
                    setopenModal(!openModal)
                    setloading(true)
                    setTimeout(() => {
                        navigation.navigate('IntroPage')
                    }, 2000);
                }
                else {
                    setopenModal(!openModal)
                    setloading(true)
                    setTimeout(() => {
                        navigation.navigate('Login')
                    }, 2000);
                }
            })
        } catch (error) {
            setloading(false)
            Alert.alert(error.message)
        }
    }

    const interest = ({ item, index }) => {
        return (
            <TouchableOpacity style={Styles.interestContainer} onPress={() => goToScreen(item.name)}>
                <View style={Styles.textView}>
                    <Text style={Styles.interest}>{item.name}</Text>
                </View>
                {item.name !== 'Log Out' && <TouchableOpacity style={Styles.imageView} onPress={() => goToScreen(item.name)}>
                    <Image source={require('../../../Assets/Images/uparrow.png')} style={Styles.image} />
                </TouchableOpacity>}
            </TouchableOpacity>
        )
    }
    return (
        <>
            {loading && <Loader />}
            <SharedHeader navigation={navigation} name="Account Settings" />
            <Animated.ScrollView style={Styles.scrollView}>
                {openModal && <LogOut openModal={openModal} setopenModal={setopenModal} logOut={logOut} />}
                <View style={Styles.body}>
                    <ArrayList
                        data={data}
                        keyExtractor={(item) => item.id}
                        renderItem={interest}
                    />
                </View>
            </Animated.ScrollView>
        </>
    )
}


const mapStateToProps = state => {
    const { cookie } = state.CookieReducer;
    return {
        cookie
    };
};

const AccountSettings = connect(
    mapStateToProps,
    { GetCookieAction, DeleteCookieAction },
)(Index);
export default AccountSettings;