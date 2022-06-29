import React from 'react'
import { View, StatusBar, Image, TouchableOpacity, Text } from 'react-native'
import Styles from './Style';
import { INTEREST_COLOR, WHITE } from '../../../Config/Config';



export default function CourseHeader(props) {
    const { navigation, animate, name, back, color } = props

    return (
        <>
            <StatusBar
                hidden={false}
                backgroundColor={back ? color : INTEREST_COLOR}
            />
            <View style={[Styles.header, animate, { backgroundColor: back ? WHITE : INTEREST_COLOR }]}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={Styles.headerMenu}>
                    <Image source={back ? require('../../../Assets/Images/arrow.png') : require('../../../Assets/Images/left.png')} style={Styles.menus} />
                </TouchableOpacity>
                {!back ? <View style={Styles.headerMenu1}>
                    <Text style={Styles.headerText}>{`${name}`} </Text>
                </View> : <View style={Styles.headerMenu1}>
                    <Text style={Styles.headerText1}>{`${name}`} </Text>
                </View>}
                {!back ? <View style={Styles.headerMenu2}>
                    <TouchableOpacity>
                        <Image source={require('../../../Assets/Images/pointerwhite.png')} style={Styles.menus} />
                    </TouchableOpacity>
                </View> : <View style={Styles.headerMenu2} />}
            </View>
        </>
    )
}
