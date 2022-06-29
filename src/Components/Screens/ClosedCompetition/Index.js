import React from 'react'
import { View, Text, ScrollView, Dimensions, StatusBar } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import { ClosedComp, WHITE } from '../../../Config/Config'
import ArrayList from '../../Shared/ArrayList/ArrayList';
import Styles from './Style'
import CourseHeader from '../../Shared/CourseHeader/CourseHeader'
import ClosedInfo from '../../Shared/ClosedInfo/ClosedInfo'


const { height, width } = Dimensions.get('window')
export default function Index(props) {
    const { navigation, route } = props

    return (
        <>
            <StatusBar
                backgroundColor={WHITE}
                barStyle={'dark-content'}
            />
            <CourseHeader back={true} name={"Closed Competitions"} color={WHITE} navigation={navigation} />
            <ScrollView
                style={Styles.scrollView}
                contentContainerStyle={Styles.contentContainerStyle}
            >
                <View style={Styles.container}>
                    <ArrayList
                        style={{
                            marginBottom: moderateScale(30)
                        }}
                        data={ClosedComp}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => <ClosedInfo item={item} navigation={navigation} />}
                    />
                </View>
            </ScrollView>
        </>
    )
}
