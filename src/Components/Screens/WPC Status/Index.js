import React, { useState } from 'react'
import { View, Text, Dimensions, Image, TouchableOpacity, ScrollView, StatusBar } from 'react-native'
import { fonts, INTEREST_COLOR, PLUS_COLOR, THEME_COLOR, THEME_COLOR_BACKGROUND } from '../../../Config/Config'
import SharedHeader from '../../Shared/SharedHeader/SharedHeader'
import StarRating from '../../Shared/StarRating/StarRating'
import Styles from './Styles'

const { width, height } = Dimensions.get('screen')
export default function Index(props) {
    const { navigation } = props
    const [selectInterest, setselectInterest] = useState('')
    const ratings = {
        ratings: 4.2,
        views: 34000
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
            <SharedHeader navigation={navigation} name="WPC Status" backgroundColor={INTEREST_COLOR} />
            <ScrollView
                style={Styles.scrollView}
                contentContainerStyle={{
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <View style={Styles.body}>
                    <View style={Styles.statusView}>
                        <Text style={Styles.statusText}>Your WPC Score</Text>
                        <Text style={Styles.statusText1}>53.0</Text>
                    </View>
                    <View style={Styles.statusView}>
                        <Text style={Styles.statusText}>Your Level</Text>
                        <StarRating ratings={ratings} />
                        <Text style={Styles.statusText1}>Beginner</Text>
                        <Text style={Styles.statusText2}>Current Plan FREEDB</Text>
                    </View>
                    <View style={Styles.statusView}>
                        <Text style={Styles.statusText}>Redemable Money</Text>
                        <Text style={Styles.statusText1}>$ 0.05</Text>
                        <Text style={Styles.statusText3}>Option to redeem your money would appear here when you reach $25</Text>
                    </View>
                </View>
            </ScrollView>
        </>
    )
}
