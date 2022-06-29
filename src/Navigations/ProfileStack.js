import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../Components/Screens/Profile/Index'
import EditProfile from '../Components/Screens/EditProfile/Index'
import UploadPhoto from '../Components/Screens/UploadPhoto/Index';
import ProfilePhoto from '../Components/Screens/ProfilePhoto/Index';
import AccountSettings from '../Components/Screens/AccountSettings/Index'
import HelpFeedBack from '../Components/Screens/HelpFeedBack/Index'
import Followers from '../Components/Screens/Followers/Index'
import Following from '../Components/Screens/Following/Index'
import WPCStatus from '../Components/Screens/WPC Status/Index';
import PaymentInfo from '../Components/Screens/Payment Info/Index';
import Account from '../Components/Screens/Account/Index';
import Email from '../Components/Screens/Email/Index';
import ChangePassword from '../Components/Screens/ChangePassword/Index';
import LinkedAccount from '../Components/Screens/LinkedAccount/Index';
import ContactInfo from '../Components/Screens/ContactInfo/Index';
import PaymentStatus from '../Components/Screens/PaymentStatus/Index';
import Ads from '../Components/Screens/Ads/Index';
import MyStats from '../Components/Screens/MyStats/Index';
import QuotaDetails from '../Components/Screens/QuotaDetails/Index';
import PrivacyOptions from '../Components/Screens/PrivacyOptions/Index';


const Stack = createNativeStackNavigator();

function ProfileStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="ProfilePage" component={Profile} />
            <Stack.Screen name="EditProfile" component={EditProfile} />
            <Stack.Screen name="UploadPhoto" component={UploadPhoto} />
            <Stack.Screen name="ProfilePhoto" component={ProfilePhoto} />
            <Stack.Screen name="AccountSettings" component={AccountSettings} />
            <Stack.Screen name="Help & Feedback" component={HelpFeedBack} />
            <Stack.Screen name="WPC Status" component={WPCStatus} />
            <Stack.Screen name="Payment Info" component={PaymentInfo} />
            <Stack.Screen name="Account" component={Account} />
            <Stack.Screen name="Email" component={Email} />
            <Stack.Screen name="ChangePassword" component={ChangePassword} />
            <Stack.Screen name="LinkedAccount" component={LinkedAccount} />
            <Stack.Screen name="Following" component={Following} />
            <Stack.Screen name="Contact Info" component={ContactInfo} />
            <Stack.Screen name="Payment Status" component={PaymentStatus} />
            <Stack.Screen name="My Ads" component={Ads} />
            <Stack.Screen name="My Stats" component={MyStats} />
            <Stack.Screen name="Followers" component={Followers} />
            <Stack.Screen name="Quota Details" component={QuotaDetails} />
            <Stack.Screen name="Privacy Options" component={PrivacyOptions} />
        </Stack.Navigator>
    );
}

export default ProfileStack;