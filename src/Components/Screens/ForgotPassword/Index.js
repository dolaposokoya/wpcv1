import React, { useState } from 'react'
import { View, Text, Dimensions, Image, TouchableOpacity, TextInput } from 'react-native'
import SharedHeader from '../../Shared/SharedHeader/SharedHeader'
import Styles from './Styles'

const { width, height } = Dimensions.get('screen')
export default function Index(props) {
    const { navigation } = props
    const [email, setemail] = useState('')

    const sendRequest = () => {
        navigation.navigate('ResetPassword')
    }
    return (
        <>
            <SharedHeader navigation={navigation} name="Forgot Password" />
            <>
                <View style={Styles.body}>
                    <View style={Styles.uploadView}>
                        <Image source={require('../../../Assets/Images/password.png')}
                            style={Styles.image}
                        />
                    </View>
                    <View style={Styles.textView}>
                        <Text style={Styles.text}>Enter the email id associated</Text>
                        <Text style={Styles.text}>with your account.</Text>
                    </View>
                    <View style={Styles.textView1}>
                        <Text style={Styles.textLight}>We will email you a link to</Text>
                        <Text style={Styles.textLight}>reset your password.</Text>
                    </View>
                    <View style={Styles.textView}>
                        <TextInput
                            placeholder="Please enter email address"
                            value={email}
                            onChangeText={text => setemail(text)}
                            style={Styles.formInput}
                        />
                    </View>
                    <TouchableOpacity style={Styles.touchView} onPress={() => sendRequest()}>
                        <Text style={Styles.textSend}>Send Request</Text>
                    </TouchableOpacity>
                </View>
            </>
        </>
    )
}
