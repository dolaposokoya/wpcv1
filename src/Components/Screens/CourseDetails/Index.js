import React from 'react'
import { View, Text, ScrollView, Dimensions, StatusBar } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import { courses, coursesInfo, WHITE } from '../../../Config/Config'
import CourseInfo from '../../Shared/CourseInfo/CourseInfo'
import ArrayList from '../../Shared/ArrayList/ArrayList'
import CourseTable from '../../Shared/CourseTable/CourseTable'
import Styles from './Style'
import CourseHeader from '../../Shared/CourseHeader/CourseHeader'


const { height, width } = Dimensions.get('window')
export default function Index(props) {
    const { navigation, route } = props
    const { item } = route.params;

    return (
        <>
            <StatusBar
                backgroundColor={WHITE}
                barStyle={'dark-content'}
            />
            <CourseHeader back={true} name={"What You'll Learn"} color={WHITE} navigation={navigation} />
            <ScrollView
                style={Styles.scrollView}
                contentContainerStyle={Styles.contentContainerStyle}
            >
                <View style={Styles.container}>
                    <ArrayList
                        bounces={false}
                        data={courses}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => <CourseTable item={item} />}
                    />
                    <View style={Styles.about}>
                        <Text style={Styles.aboutText}>Course Information</Text>
                    </View>
                    <ArrayList
                        style={{
                            marginBottom: moderateScale(30)
                        }}
                        bounces={false}
                        data={coursesInfo}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => <CourseInfo item={item} />}
                    />
                </View>
            </ScrollView>
        </>
    )
}
