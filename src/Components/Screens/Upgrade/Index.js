import React from 'react'
import { View, Text, Dimensions, Image, TouchableOpacity } from 'react-native'
import SharedHeader from '../../Shared/SharedHeader/SharedHeader'
import Styles from './Styles'

const { width, height } = Dimensions.get('screen')
export default function Index(props) {
    const { navigation } = props

    return (
        <>
            <SharedHeader navigation={navigation} name="Upgrade WPC Premium" />
            <>
                <View style={Styles.body}>
                    <View style={Styles.uploadView}>
                        <View style={Styles.imageView}>
                            <Image source={require('../../../Assets/Images/badge.png')}
                                style={Styles.image}
                            />
                        </View>
                        <TouchableOpacity style={Styles.textView} onPress={() => navigation.navigate('AccountUpgrade')}>
                            <Text style={Styles.text}>Upgrade to WPC Premium</Text>
                            <Text style={Styles.text}>at just $1/Month</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={Styles.btnView}>
                    <TouchableOpacity style={Styles.touchView} onPress={() => navigation.navigate('FirstPhoto')}>
                        <Text style={[Styles.text, { textDecorationLine: 'none' }]}>Next</Text>
                    </TouchableOpacity>
                </View>
            </>
        </>
    )
}
