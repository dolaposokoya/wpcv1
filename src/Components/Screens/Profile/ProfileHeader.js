import React, { useState, useEffect, useRef } from 'react'
import { View, Dimensions, Image, TouchableOpacity } from 'react-native'
import Styles from './Style'
import Animated from 'react-native-reanimated'
import { scale, moderateScale } from 'react-native-size-matters';
import CustomSheet from '../../Sheets/CustomSheet/CustomSheet';


const { width, height } = Dimensions.get('screen')
const IMAGE_HEIGHT = scale(210);
const headerHeight = height * 0.12;

export default function Index(props) {

    const { navigation } = props
    const [user, setuser] = useState({})
    const editUser = () => {
        navigation.navigate('EditProfile', {
            user: user,
        })
    }

    const scrolling = useRef(new Animated.Value(0)).current;

    const opacity = scrolling.interpolate({
        inputRange: [0, headerHeight],
        outputRange: [1, 0],
        extrapolate: "clamp",
    });

    return (
        <>
            <Animated.View style={[Styles.animateHeader, { opacity }]}>
                <View style={Styles.animateView}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require('../../../Assets/Images/left.png')} style={Styles.backBtn} />
                    </TouchableOpacity>
                    <CustomSheet profileContainer={Styles.profileContainer} backBtn={Styles.backBtn} navigation={navigation} editUser={editUser} />
                </View>
            </Animated.View>
        </>
    )
}
