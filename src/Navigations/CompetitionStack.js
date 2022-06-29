import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Competition from '../Components/Screens/Competition/Index'
import CompetitionDetails from '../Components/Screens/CompetitionDetails/Index'
import ClosedCompetition from '../Components/Screens/ClosedCompetition/Index'
import Abstract from '../Components/Screens/Abstract/Index'
import UploadPhoto from '../Components/Screens/UploadPhoto/Index'

const Stack = createNativeStackNavigator();

function CompetitionStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="CompetitionPage" component={Competition} />
            <Stack.Screen name="CompetitionDetails" component={CompetitionDetails} />
            <Stack.Screen name="ClosedCompetition" component={ClosedCompetition} />
            <Stack.Screen name="Abstract" component={Abstract} />
            <Stack.Screen name="UploadPhoto" component={UploadPhoto} />
        </Stack.Navigator>
    );
}

export default CompetitionStack;