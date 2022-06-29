import React from 'react'
import { View, Text, Dimensions, Image, TouchableOpacity, ScrollView, StatusBar, TextInput } from 'react-native'
import { INTEREST_COLOR } from '../../../Config/Config'
import SharedHeader from '../../Shared/SharedHeader/SharedHeader'
import Styles from './Styles'

const { width, height } = Dimensions.get('screen')
export default function Index(props) {
    const { navigation } = props


    return (
        <>
            <StatusBar
                hidden={false}
                animated={true}
                barStyle='light-content'
                backgroundColor={INTEREST_COLOR}
            />
            <SharedHeader navigation={navigation} name="Hire Me" />
            <ScrollView
                style={Styles.scrollView}
                contentContainerStyle={{
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <View style={Styles.body}>
                    <View style={Styles.introView}>
                        <Image source={require('../../../Assets/Images/hire.png')} style={Styles.hireImg} />
                        <Text style={Styles.introText}>Send user an email with </Text>
                        <Text style={Styles.introText}>your requirements</Text>
                    </View>
                    <>
                        <View style={{
                            justifyContent: 'center',
                        }}>
                            <Text style={Styles.inputText}>Message</Text>
                            <TextInput
                                style={Styles.formInputEmail}
                                placeholder="Type Here..."
                                numberOfLines={7}
                                multiline={true}
                            />
                        </View>
                        <View>
                            <Text style={Styles.inputText}>Your Email</Text>
                            <TextInput
                                style={Styles.formInputEmail}
                                placeholder="Enter your email address"
                            />
                        </View>
                        <View>
                            <Text style={Styles.inputText}>Contact Number</Text>
                            <TextInput
                                style={Styles.formInputEmail}
                                placeholder="Enter your contact number"
                            />
                        </View>
                    </>
                    <View style={Styles.btnView}>
                        <TouchableOpacity style={Styles.nextBtn} onPress={() => goToUpload()}>
                            <Text style={Styles.nextBtnText}>Send Mail</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </>
    )
}
