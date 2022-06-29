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
                        <Image source={require('../../../Assets/Images/select.png')}
                            style={Styles.image}
                        />
                    </View>
                    <TouchableOpacity style={Styles.textView} onPress={() => navigation.navigate('ProfilePhoto', {
                        page: 'Upgrade'
                    })}>
                        <Text style={Styles.text}>Upload Your First Photo</Text>
                    </TouchableOpacity>
                </View>
                <View style={Styles.btnView}>
                    <TouchableOpacity style={Styles.touchView} onPress={() => navigation.navigate('Login')}>
                        <Text style={[Styles.text, { textDecorationLine: 'none' }]}>Done</Text>
                    </TouchableOpacity>
                </View>
            </>
        </>
    )
}
