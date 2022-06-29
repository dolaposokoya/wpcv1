import React, { useState } from 'react'
import { View, Text, ScrollView, StatusBar, Dimensions, Image, TextInput, TouchableOpacity } from 'react-native'
import { CARD_COLOR, THEME_COLOR_BACKGROUND, UPGRADE_BLACK, UPGRADE_GOLD, UPGRADE_RED, WHITE } from '../../../Config/Config'
import Style from './Style'


const { width, height } = Dimensions.get('screen')
export default function Index(props) {
    const { navigation } = props
    const [options, setoptions] = useState('')

    const setOption = (option) => {
        setoptions(option)
    }

    const closePage = () => {
        // navigation.goBack()
        navigation.navigate('UpgradeMembership')
    }
    return (
        <>
            <StatusBar
                barStyle={'dark-content'}
                backgroundColor={WHITE}
            />
            <ScrollView style={Style.scrollview}
                contentContainerStyle={{
                    alignItems: 'center'
                }}
            >
                <>
                    <TouchableOpacity onPress={() => closePage()} style={Style.closeView}>
                        <Image source={require('../../../Assets/Images/closeicon.png')} style={{
                            width: 30,
                            height: 30
                        }} />
                    </TouchableOpacity>
                    <View style={Style.container}>
                        <Text style={Style.text}>Upgrade Account Now</Text>
                        <View style={Style.textView}>
                            <Text style={Style.text1}>And take your photography to the next level with WPC premium accounts</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={[Style.card, { backgroundColor: options === 'Red' ? UPGRADE_RED : CARD_COLOR }]} onPress={() => setOption('Red')}>
                        <Text style={[Style.text2, { color: options === 'Red' ? WHITE : THEME_COLOR_BACKGROUND }]}>Red</Text>
                        <Text style={[Style.text3, { color: options === 'Red' ? WHITE : THEME_COLOR_BACKGROUND }]}>Rs.999/Year Or $14.99/Year</Text>
                        <Text style={[Style.text4, { color: options === 'Red' ? WHITE : THEME_COLOR_BACKGROUND }]}>Unlimited projects, 3 courses & more...</Text>
                        <Text style={[Style.text4, { textDecorationLine: 'underline', color: options === 'Red' ? WHITE : THEME_COLOR_BACKGROUND }]}>Check out all features</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[Style.card, { backgroundColor: options === 'Black' ? UPGRADE_BLACK : CARD_COLOR }]} onPress={() => setOption('Black')}>
                        <Text style={[Style.text2, { color: options === 'Black' ? WHITE : THEME_COLOR_BACKGROUND }]}>Black</Text>
                        <Text style={[Style.text3, { color: options === 'Black' ? WHITE : THEME_COLOR_BACKGROUND }]}>Rs.1,999/Year Or $29.99/Year</Text>
                        <Text style={[Style.text4, { color: options === 'Black' ? WHITE : THEME_COLOR_BACKGROUND }]}>Unlimited projects, 7 courses & more...</Text>
                        <Text style={[Style.text4, { textDecorationLine: 'underline', color: options === 'Black' ? WHITE : THEME_COLOR_BACKGROUND }]}>Check out all features</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[Style.card, { backgroundColor: options === 'Gold' ? UPGRADE_GOLD : CARD_COLOR }]} onPress={() => setOption('Gold')}>
                        <Text style={[Style.text2, { color: options === 'Gold' ? WHITE : THEME_COLOR_BACKGROUND }]}>Gold</Text>
                        <Text style={[Style.text3, { color: options === 'Gold' ? WHITE : THEME_COLOR_BACKGROUND }]}>Rs.9,999/Year Or $14.99/Year</Text>
                        <Text style={[Style.text4, { color: options === 'Gold' ? WHITE : THEME_COLOR_BACKGROUND }]}>Everything Unlimited</Text>
                        <Text style={[Style.text4, { textDecorationLine: 'underline', color: options === 'Gold' ? WHITE : THEME_COLOR_BACKGROUND }]}>Check out all features</Text>
                    </TouchableOpacity>
                    <View style={Style.inputView}>
                        <TextInput
                            placeholder="Name"
                            style={Style.formInput}
                        />
                        <TextInput
                            placeholder="Email"
                            style={Style.formInput}
                        />
                        <TextInput
                            placeholder="Phone Number"
                            style={Style.formInput}
                        />
                        <TextInput
                            placeholder="City"
                            style={Style.formInput}
                        />
                        <TextInput
                            placeholder="State"
                            style={Style.formInput}
                        />
                        <TextInput
                            placeholder="Select Country"
                            style={Style.formInput}
                        />
                    </View>
                    <View style={Style.buttonContainer}>
                        <Text
                            style={Style.termsCondition}
                        >By clicking login you agree to</Text>
                        <Text
                            style={Style.termsCondition1}
                        >The Terms & Conditions</Text>
                    </View>
                    <TouchableOpacity style={Style.nextBtn}>
                        <Text style={[Style.interest]}>Continue</Text>
                    </TouchableOpacity>
                </>
            </ScrollView>
        </>
    )
}
