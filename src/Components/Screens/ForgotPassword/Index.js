import React, { useState } from 'react'
import { View, Text, Dimensions, Image, TouchableOpacity, TextInput } from 'react-native'
import { RESET_PASSWORD_EMAIL } from '../../../ActionType/ActionType'
import { apiUrl } from '../../../Config/Config'
import Loader from '../../Shared/Loader/Loader'
import MessageModal from '../../Shared/Modal/MessageModal'
import SharedHeader from '../../Shared/SharedHeader/SharedHeader'
import Styles from './Styles'
apiUrl

const { width, height } = Dimensions.get('screen')
export default function Index(props) {
    const { navigation } = props
    const [email, setemail] = useState('')
    const [loading, setloading] = useState(false)

    const [message, setmessage] = useState('')
    const [errorType, seterrorType] = useState('')
    const [openModal, setopenModal] = useState(false)
    const [successMsg, setsuccessMsg] = useState('')

    const sendRequest = async () => {
        setloading(true)
        try {
            const formData = new FormData()
            formData.append("actionType", RESET_PASSWORD_EMAIL);
            formData.append("email", email)
            const requestOptions = {
                method: 'POST',
                body: formData,
                headers: apiUrl.header
            };
            if (email !== '') {
                const result = await fetch(`${apiUrl.generalUrl}`, requestOptions)
                const response = await result.json();
                if (response && response.signupError === 'No Error' && response.success === 1) {
                    setloading(false)
                    setsuccessMsg('Please check your email for the code')
                    setTimeout(() => {
                        navigation.navigate('ResetPassword', {
                            userEmail: email
                        })
                        setemail('')
                        setsuccessMsg('')
                    }, 4000);
                }
                else {
                    setloading(false)
                    setmessage('Request not processed')
                    seterrorType('warning')
                    setopenModal(true)
                }
            }
            else {
                setloading(false)
                setmessage('Email field is empty')
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
            {openModal && <MessageModal closeModal={closeModal} message={message} errorType={errorType} />}
            {loading && <Loader />}
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
                        {successMsg !== '' && <Text style={Styles.successMsg}
                        >{successMsg}</Text>}
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
