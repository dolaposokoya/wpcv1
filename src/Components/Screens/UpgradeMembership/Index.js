import React, { useState } from 'react'
import { View, Text, ScrollView, StatusBar, Dimensions, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import { BLACK, UPGRADE_BLACK1, UPGRADE_GOLD, UPGRADE_GOLD1, UPGRADE_RED, UPGRADE_RED1, WHITE } from '../../../Config/Config'
import Style from './Style'
import BackDrop from '../../Shared/BackDrop/BackDrop'
import { moderateScale } from 'react-native-size-matters';
import GoldSheet from '../../Sheets/GoldSheet/GoldSheet'
import BlackSheet from '../../Sheets/BlackSheet/BlackSheet'
import RedSheet from '../../Sheets/RedSheet/RedSheet'


const { width, height } = Dimensions.get('screen')
const IMAGE_HEIGHT = height * .6;
const COLOR_HEIGHT = height * .4
export default function Index(props) {
    const { navigation } = props
    const [options, setoptions] = useState('')

    const setOption = (option) => {
        setoptions(option)
    }
    return (
        <>
            <StatusBar
                hidden={true}
                barStyle={'light-content'}
            />
            <BackDrop IMAGE_HEIGHT={IMAGE_HEIGHT} COLOR_HEIGHT={COLOR_HEIGHT} IMAGE={require('../../../Assets/Images/membership.png')} />
            <ScrollView style={Style.scrollview}
                contentContainerStyle={{
                    alignItems: 'center'
                }}>
                <View style={Style.container}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={Style.closeView}>
                        <Image source={require('../../../Assets/Images/crosswhite.png')} style={Style.closeViewImage} />
                    </TouchableOpacity>
                    <View style={Style.upgradeView}>
                        <Text style={Style.text}>Upgrade Membership</Text>
                    </View>
                    <View style={Style.upgradeViewNull} />
                </View>
                <View style={Style.textView}>
                    <Text style={Style.text1}>Upgrade now & enjoy industries best features at your finger tips.</Text>
                </View>
                {/* <GoldSheet card={Style.card} text2={Style.text2} text3={Style.text3} text4={Style.text4} />
                <BlackSheet card={Style.card} text2={Style.text2} text3={Style.text3} text4={Style.text4} /> */}
                <RedSheet card={Style.card} text2={Style.text2} text3={Style.text3} text4={Style.text4} />
            </ScrollView>
        </>
    )
}
