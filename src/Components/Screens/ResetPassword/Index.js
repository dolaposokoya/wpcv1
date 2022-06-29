import React, { useState } from 'react'
import { View, Text, Dimensions, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import SharedHeader from '../../Shared/SharedHeader/SharedHeader'
import Styles from './Styles'


const { width, height } = Dimensions.get('screen')
export default function Index(props) {
    const { navigation } = props
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [re_password, setre_password] = useState('')
    const [code, setcode] = useState('')
    const [secure, setsecure] = useState(true)

    const sendReset = () => {
        navigation.navigate('Login')
    }
    return (
        <>
            <SharedHeader navigation={navigation} name="Reset Password" />
            <ScrollView>
                <View style={Styles.body}>
                    <View style={Styles.uploadView}>
                        <Image source={require('../../../Assets/Images/reset.png')}
                            style={Styles.image}
                        />
                    </View>
                    <View style={Styles.textView}>
                        <Text style={Styles.text}>Please enter activation</Text>
                        <Text style={Styles.text}>code sent to your email and </Text>
                        <Text style={Styles.text}>your new password</Text>
                    </View>
                    <View style={Styles.formView}>
                        <TextInput
                            placeholder="Registered email address"
                            value={email}
                            onChangeText={text => setemail(text)}
                            style={Styles.formInput}
                        />
                        <TextInput
                            placeholder="Activation Code"
                            value={code}
                            onChangeText={text => setcode(text)}
                            style={Styles.formInput}
                        />
                        <View>
                            <TextInput
                                placeholder="Enter Password"
                                secureTextEntry={secure}
                                value={password}
                                onChangeText={text => setpassword(text)}
                                style={Styles.formInput}
                                onFocus={() => console.log('Focued')}
                                onBlur={() => setsecure(true)}
                            />
                        </View>
                        <TextInput
                            placeholder="Re-enter Password"
                            value={re_password}
                            secureTextEntry={true}
                            onChangeText={text => setre_password(text)}
                            style={Styles.formInput}
                        />
                    </View>
                    <TouchableOpacity style={Styles.touchView} onPress={() => sendReset()}>
                        <Text style={Styles.touchViewText}>Reset Password</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </>
    )
}
