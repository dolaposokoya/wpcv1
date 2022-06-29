import React from 'react'
import { View, Text, Image, TouchableOpacity, Dimensions, Alert } from 'react-native'
import Styles from './Style';
import CustomSheet from '../../Sheets/CustomSheet/CustomSheet';
import PhotoSheet from '../../Sheets/PhotoSheet/PhotoSheet';
import {  moderateScale } from 'react-native-size-matters';

const { width, height } = Dimensions.get('screen')
export default function SharedHeader(props) {
    const { back, name, children, navigation, profile, user_info, topPhoto, editProfile, saveDetails, editUser, option, backgroundColor } = props
    return (
        <>
            {!profile ? (editProfile ? <View style={Styles.headerView}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../../../Assets/Images/left.png')} style={Styles.backBtn} />
                </TouchableOpacity>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={Styles.text}>{name}</Text>
                </View>
                {option ? <TouchableOpacity onPress={saveDetails} style={Styles.saveBtnContainer}>
                    <Text style={Styles.saveBtnContainerText}>{option}</Text>
                </TouchableOpacity> : <TouchableOpacity onPress={saveDetails} style={[Styles.saveBtnContainer, { opacity: 0.56 }]}>
                    <Text style={Styles.saveBtnContainerText}>{'Save'}</Text>
                </TouchableOpacity>}
            </View> : <View
                style={Styles.headerViewMain}
            >
                <View style={[Styles.headerView, { backgroundColor: backgroundColor && backgroundColor }]}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={Styles.backBtnContainer}>
                        <Image source={require('../../../Assets/Images/left.png')} style={Styles.backBtn} />
                    </TouchableOpacity>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={Styles.text}>{name}</Text>
                    </View>
                    <View style={Styles.backBtn} />
                </View>
            </View>)
                : <View style={{
                    width: width * 0.97,
                    height: moderateScale(height * 0.10),
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    alignSelf: 'center',
                    // backgroundColor: 'red'
                }}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={Styles.profileContainer}>
                        <Image source={require('../../../Assets/Images/left.png')} style={Styles.backBtn} />
                    </TouchableOpacity>

                    {topPhoto ? <PhotoSheet profileContainer={Styles.profileContainer} backBtn={Styles.backBtn} navigation={navigation} user_info={user_info} /> : <CustomSheet profileContainer={Styles.profileContainer} backBtn={Styles.backBtn} navigation={navigation} editUser={editUser} />}
                </View>}
        </>
    )
}
