import React from 'react'
import { View, Text, Dimensions, ScrollView, StatusBar } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import { INTEREST_COLOR } from '../../../Config/Config'
import SharedHeader from '../../Shared/SharedHeader/SharedHeader'
import Styles from './Styles'


const { width, height } = Dimensions.get('screen')
export default function Index(props) {
    const { navigation } = props;

    return (
        <>
            <StatusBar
                hidden={false}
                animated={true}
                barStyle='light-content'
                showHideTransition="slide"
                backgroundColor={INTEREST_COLOR}
            />
            <SharedHeader navigation={navigation} name={`Register Now`} />
            <ScrollView style={Styles.scrollView}
                contentContainerStyle={Styles.contentContainerStyle}
            >
                <View style={{
                    marginBottom: moderateScale(90),
                }}>
                    <View>
                        <Text>MOBILE PHOTOGRAPHY COURSE PAYMENT</Text>
                    </View>
                    <Text>Total Course Cost</Text>
                </View>
            </ScrollView>
        </>
    )
}
