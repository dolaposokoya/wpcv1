import React, { useState, useEffect } from 'react'
import { View, Text, Dimensions, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import SharedHeader from '../../Shared/SharedHeader/SharedHeader'
import Styles from './Styles'
import Loader from '../../Shared/Loader/Loader'
import MessageModal from '../../Shared/Modal/MessageModal'
import { apiUrl } from '../../../Config/Config'
import { RESET_PASSWORD } from '../../../ActionType/ActionType'


const { width, height } = Dimensions.get('screen')
export default function Index(props) {
    const { navigation, route } = props
    const { userEmail } = route?.params;
    const password_pattern = "[A-Za-z0-9](?=.*[@$!%*?&]){8,}";
    const [loading, setloading] = useState(false)
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [re_password, setre_password] = useState('')
    const [code, setcode] = useState('')
    const [secure, setsecure] = useState(true)

    const [message, setmessage] = useState('')
    const [errorType, seterrorType] = useState('')
    const [openModal, setopenModal] = useState(false)
    const [successMsg, setsuccessMsg] = useState('')

    useEffect(() => {
        setloading(true);
        setemail(userEmail || '')
        setTimeout(() => {
            setloading(false)
        }, 2000);
    }, [])

    const checkPassword = async (text) => {
        const validatePassword = new RegExp(password_pattern)
        const validPassword = validatePassword.test(text);
        return validPassword
    }
    const checkPasswordLength = async (text) => {
        if (text.length >= 8) {
            return true
        }
        else {
            return false
        }
    }

    const sendReset = async () => {
        setloading(true)
        try {
            const formData = new FormData()
            formData.append("actionType", RESET_PASSWORD);
            formData.append("email", email)
            formData.append("password", password)
            formData.append("verifyPassword", re_password)
            formData.append("activation_code", code)
            const requestOptions = {
                method: 'POST',
                body: formData,
                headers: apiUrl.header
            };
            const valid = await checkPassword(password)
            if (valid) {
                const passwordLength = await checkPasswordLength(password)
                if (passwordLength && password === re_password) {
                    if (email !== '' && password !== '' && re_password !== '' && code !== '') {
                        const result = await fetch(`${apiUrl.generalUrl}`, requestOptions)
                        const response = await result.json();
                        if (response && response.signupError === 'No Error' && response.success === 1) {
                            setloading(false)
                            setsuccessMsg('Please login with your new password')
                            setTimeout(() => {
                                navigation.navigate('Login')
                                setsuccessMsg('')
                            }, 4000);
                        }
                        else {
                            setloading(false)
                            setmessage(response.signupError)
                            seterrorType('warning')
                            setopenModal(true)
                        }
                    }
                    else {
                        setloading(false)
                        setmessage('Some fields are empty')
                        seterrorType('warning')
                        setopenModal(true)
                    }
                }
                else {
                    setloading(false)
                    setmessage('Password do not match with confirm password')
                    seterrorType('warning')
                    setopenModal(true)
                }
            }
            else {
                setloading(false)
                setmessage('Password should contain characters, numbers and alphabet');
                seterrorType('warning')
                setopenModal(true)
            }
        } catch (error) {
            setloading(false)
            setmessage(error.message)
            seterrorType('warning')
            setopenModal(true)
        }
    }

    const closeModal = (state) => {
        setmessage('')
        seterrorType('')
        setopenModal(state)
    }
    return (
        <>
            {loading && <Loader />}
            {openModal && <MessageModal closeModal={closeModal} message={message} errorType={errorType} />}
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
                    {successMsg !== '' && <Text style={Styles.successMsg}
                    >{successMsg}</Text>}
                    <View style={Styles.formView}>
                        <TextInput
                            placeholder="Registered email address / Username"
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
                            placeholder="Confirm Password"
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
