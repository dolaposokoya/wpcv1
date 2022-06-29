import React, { useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Learn from '../Components/Screens/Learn/Index'
import CourseDetails from '../Components/Screens/CourseDetails/Index'
import RegisterNow from '../Components/Screens/RegisterNow/Index'
import Course from '../Components/Screens/Course/Index'
import { Dimensions, } from 'react-native';


const Stack = createNativeStackNavigator();
const { width, height } = Dimensions.get('screen')

function LearnStack({ navigation, route }) {
    return (
        <>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen name="Learn" component={Learn} />
                <Stack.Screen name="Course" component={Course} />
                <Stack.Screen name="RegisterNow" component={RegisterNow} />
                <Stack.Screen name="CourseDetails" component={CourseDetails} />
            </Stack.Navigator>
        </>
    );
}
export default LearnStack