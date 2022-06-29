import React from 'react'
import { View, Text, Image, Dimensions, } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import Styles from './Style'

const { height, width } = Dimensions.get('window')
export default function CourseTable(props) {
    const { item } = props
    return (
        <>
            <View style={Styles.learnTable}>
                <View style={[Styles.learnTextContainer, { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }]}>
                    <Text style={Styles.learnText1}>{item.topic}</Text>
                    <View style={Styles.padlock}>
                        <Image source={require('../../../Assets/Images/padlock.png')} style={Styles.learnImage} />
                        <Text style={[Styles.learnText, { fontSize: moderateScale(12), paddingBottom: 0 }]}>Play</Text>
                    </View>
                </View>
                <View style={Styles.learnTextContainer}>
                    <View style={Styles.learnTableHeader}>
                        <Text style={Styles.learnHeader}>Lesson</Text>
                        <Text style={Styles.learnText}>1</Text>
                    </View>
                    <View style={Styles.learnTableHeader}>
                        <Text style={Styles.learnHeader}>Title</Text>
                        <Text style={Styles.learnText}>{item.topic}</Text>
                    </View>
                    <View style={Styles.learnTableHeader1}>
                        <Text style={Styles.learnHeader1}>Description</Text>
                        <Text style={Styles.learnText}>{item.content}</Text>
                    </View>
                </View>
            </View>
            <View style={Styles.lineThrough} />
        </>
    )
}
