import React from 'react'
import { View, Text, Image, TouchableOpacity, Dimensions, Alert, StatusBar } from 'react-native'
import Styles from './Style';
import CustomSheet from '../../Sheets/CustomSheet/CustomSheet';
import PhotoSheet from '../../Sheets/PhotoSheet/PhotoSheet';
import Animated from 'react-native-reanimated'
import { scale, moderateScale } from 'react-native-size-matters';

const { width, height } = Dimensions.get('screen')
export default function ProfileHeader(props) {
    const { navigation, editUser } = props
    return (
        <>
            <View style={{
                width: width,
                height: moderateScale(height * 0.10),
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={Styles.profileContainer}>
                    <Image source={require('../../../Assets/Images/left.png')} style={Styles.backBtn} />
                </TouchableOpacity>

                <CustomSheet profileContainer={Styles.profileContainer} backBtn={Styles.backBtn} navigation={navigation} editUser={editUser} />
            </View>
        </>
    )
}
