import React from 'react'
import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native'
import Styles from './Style'

const { height, width } = Dimensions.get('window')
export default function ClosedInfo(props) {
    const { item, navigation } = props
    return (
        <>
            <View style={Styles.closedTable}>
                <Image
                    source={require('../../../Assets/Images/closed.png')}
                    style={Styles.closedImage}
                />
                <View style={Styles.closedContainer}>
                    <Text style={Styles.closedText}>{item.name}</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Abstract')}>
                        <Text style={Styles.closedText1}>{item.result}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={Styles.lineThrough} />
        </>
    )
}
