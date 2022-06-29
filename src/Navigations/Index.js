import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './StackNavigation';

const Navigations = () => {
    return (
        <NavigationContainer>
            <StackNavigation />
        </NavigationContainer>
    );
};


export default Navigations;