import React, { useState } from 'react'
import { View, Text, Dimensions, Image, TouchableOpacity } from 'react-native'
import SharedHeader from '../../Shared/SharedHeader/SharedHeader'
import Styles from './Styles'
import { connect } from 'react-redux';
import { GetCookieAction, DeleteCookieAction } from '../../../Actions/CookieAction'
import Loader from '../../Shared/Loader/Loader'
import Animated from 'react-native-reanimated'
import ArrayList from '../../Shared/ArrayList/ArrayList'
import { StatusBar } from 'expo-status-bar';


const { width, height } = Dimensions.get('screen')

function Index(props) {
    const { navigation } = props

    const interestOptions = [
        {
            id: "1",
            name: "Terms of Service",
            screen: "PrivacyPolicy",
        },
        {
            id: "2",
            name: "Privacy Policy",
            screen: "PrivacyPolicy"
        },
    ]

    const [data, setdata] = useState(interestOptions)
    const [loading, setloading] = useState(false)

    const goToScreen = (screen) => {
        navigation.navigate(screen)
    }


    const interest = ({ item, index }) => {
        return (
            <TouchableOpacity style={Styles.interestContainer} onPress={() => goToScreen(item.screen)}>
                <View style={Styles.textView}>
                    <Text style={Styles.interest}>{item.name}</Text>
                </View>
                <TouchableOpacity style={Styles.imageView} onPress={() => goToScreen(item.screen)}>
                    <Image source={require('../../../Assets/Images/uparrow.png')} style={Styles.image} />
                </TouchableOpacity>
            </TouchableOpacity>
        )
    }

    return (
        <>
            <StatusBar
                StatusBarAnimation='slide'
                StatusBarStyle='auto'
            />
            {loading && <Loader />}
            <SharedHeader navigation={navigation} name="About WPC" />
            <Animated.ScrollView style={Styles.scrollView}>
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