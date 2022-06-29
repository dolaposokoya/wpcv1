import React, { useState } from 'react'
import { View, Text, Dimensions, Image, ScrollView, StatusBar, TextInput } from 'react-native'
import { INPUT_TEXT, INTEREST_COLOR } from '../../../Config/Config'
import UploadHeader from '../../Shared/SharedHeader/UploadHeader';
import Styles from './Styles'

const { width, height } = Dimensions.get('screen')
export default function Index(props) {
    const { navigation } = props
    const [email, setemail] = useState('')
    const ratings = {
        ratings: 4.2,
        views: 34000
    }

    const goBack = () => {
        navigation.goBack()
    }

    const saveEmail = () => {
        goBack()
    }
    return (
        <>
            <StatusBar
                hidden={false}
                animated={true}
                barStyle='light-content'
                showHideTransition="slide"
                backgroundColor={INTEREST_COLOR}
            />
            <UploadHeader navigation={navigation} name="Payment Info" backgroundColor={INTEREST_COLOR} option={'Save'} page={'payment'} goBack={goBack} saveDetails={saveEmail} />
            <ScrollView
                style={Styles.scrollView}
                contentContainerStyle={{
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <View style={Styles.body}>
                    <Image source={require('../../../Assets/Images/paypal.png')} style={Styles.paymentImage} />
                    <View style={Styles.paymentView}>
                        <Text style={Styles.paymentText}>Paypal Email ID</Text>
                        <TextInput
                            value={email}
                            style={Styles.inpuText}
                            placeholder="Please enter your paypal Email ID"
                            placeholderTextColor={INPUT_TEXT}
                            onChangeText={(text) => setemail(text)}
                        />
                    </View>
                </View>
            </ScrollView>
        </>
    )
}
