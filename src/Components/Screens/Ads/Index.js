import React, { useState } from 'react'
import { View, Text, Dimensions, Image, TouchableOpacity, ScrollView, StatusBar } from 'react-native'
import { INTEREST_COLOR } from '../../../Config/Config'
import SharedHeader from '../../Shared/SharedHeader/SharedHeader'
import Styles from './Styles'

const { width, height } = Dimensions.get('screen')
// const screenHeight = height - '85@msr';
const screenHeight = height - (height * 0.12);
export default function Index(props) {
    const { navigation } = props
    const [data, setdata] = useState('')




    return (
        <>
            <StatusBar
                hidden={false}
                animated={true}
                barStyle='light-content'
                showHideTransition="slide"
                backgroundColor={INTEREST_COLOR}
            />
            <SharedHeader navigation={navigation} name={`My Ads`} />
            <View style={Styles.body}>
                {!data ?
                    <View style={{
                        marginTop: height * 0.1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Image
                            source={require('../../../Assets/Images/smile.png')}
                            style={Styles.smileImage}
                        />
                        <Text style={Styles.smileText}>No requests yet.</Text>
                    </View>
                    :
                    <ScrollView style={Styles.scrollView}>
                        {/* <ArrayList
                            bounces={false}
                            data={data}
                            keyExtractor={(item) => item.id}
                            renderItem={interest}
                        /> */}
                        <View style={Styles.btnView}>
                            <TouchableOpacity style={Styles.nextBtn} onPress={() => goToUpload()}>
                                <Text style={Styles.nextBtnText}>Next</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                }

            </View>
        </>
    )
}
