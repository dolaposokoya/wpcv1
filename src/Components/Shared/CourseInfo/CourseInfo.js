import React from 'react'
import { View, Text, ScrollView, SafeAreaView, Image, Dimensions, TouchableOpacity, Pressable } from 'react-native'
import { BLACK, courses, images, LIGHT_GRAY, THEME_COLOR } from '../../../Config/Config'
import Styles from './Style'

const { height, width } = Dimensions.get('window')
export default function CourseInfo(props) {
    const { item } = props
    return (
        <>
            <View style={Styles.learnTable}>
                <View style={[Styles.learnTextContainer, { alignItems: 'flex-start', width: width * 0.9 }]}>
                    <Text style={[Styles.learnText]}>{item.topic}</Text>
                    <Text style={Styles.learnText1}>{item.content}</Text>
                </View>
            </View>
            <View style={Styles.lineThrough}></View>
        </>
    )
}
