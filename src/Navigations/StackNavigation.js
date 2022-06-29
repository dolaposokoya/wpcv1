import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IntroPage from '../Components/Screens/IntroPage/Index'
import Login from '../Components/Screens/Login/Index'
import SignUp from '../Components/Screens/SignUp/Index'
import Home from '../Components/Screens/Home/Index'
import Projects from '../Components/Screens/Projects/Index'
import CompetitionStack from './CompetitionStack'
import { NavigationContext } from '../Context/NavigationContext';
import Interest from '../Components/Screens/Interest/Index'
import Upload from '../Components/Screens/Upload/Index';
import UploadPhotos from '../Components/Screens/UploadPhotos/Index';
import ProfilePhoto from '../Components/Screens/ProfilePhoto/Index';
import Upgrade from '../Components/Screens/Upgrade/Index';
import FirstPhoto from '../Components/Screens/FirstPhoto/Index';
import ForgotPassword from '../Components/Screens/ForgotPassword/Index';
import ResetPassword from '../Components/Screens/ResetPassword/Index';
import ResendActivation from '../Components/Screens/ResendActivation/Index';
import Search from '../Components/Screens/Search/Index';
import Notification from '../Components/Screens/Notification/Index';
import Notifications from '../Components/Screens/Notifications/Index';
import UploadPhoto from '../Components/Screens/UploadPhoto/Index'
import AccountUpgrade from '../Components/Screens/AccountUpgrade/Index'
import UpgradeMembership from '../Components/Screens/UpgradeMembership/Index'
import PrivacyPolicy from '../Components/Screens/PrivacyPolicy/Index'
import About from '../Components/Screens/About/Index'
import ProfileStack from './ProfileStack'
import UserDetailsStack from './UserDetailsStack'
import LearnStack from './LearnStack'
import HomeStack from './HomeStack';
import TopPhotos from '../Components/Screens/TopPhotos/Index';
import Comment from '../Components/Screens/Comment/Index';
import PhotographerDetails from '../Components/Screens/PhotographerDetails/Index';
import RatePhotographer from '../Components/Screens/RatePhotographer/Index';
import Location from '../Components/Screens/Location/Index';
import Articles from '../Components/Screens/Articles/Index';

const Stack = createNativeStackNavigator();

function MyStack() {
  // const [page, setpage] = useContext(NavigationContext)
  return (

    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={'IntroPage'}
      >
        {/* <Stack.Screen name="Home" component={Home}
        /> */}
        <Stack.Screen name="IntroPage" component={IntroPage}
        />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="CompetitionStack" component={CompetitionStack} />
        <Stack.Screen name="Interest" component={Interest} />
        <Stack.Screen name="Upload" component={Upload} />
        <Stack.Screen name="UploadPhotos" component={UploadPhotos} />
        <Stack.Screen name="ProfilePhoto" component={ProfilePhoto} />
        <Stack.Screen name="Upgrade" component={Upgrade} />
        <Stack.Screen name="FirstPhoto" component={FirstPhoto} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="ResendActivation" component={ResendActivation} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Home" component={HomeStack} />
        <Stack.Screen name="Projects" component={Projects} />
        <Stack.Screen name="TopPhotos" component={TopPhotos} />
        <Stack.Screen name="PhotographerDetails" component={PhotographerDetails} />
        <Stack.Screen name="RatePhotographer" component={RatePhotographer} />
        <Stack.Screen name="Comment" component={Comment} />
        <Stack.Screen name="UserDetailsStack" component={UserDetailsStack} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="LearnStack" component={LearnStack} />
        <Stack.Screen name="ProfileStack" component={ProfileStack} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="UploadPhoto" component={UploadPhoto} />
        <Stack.Screen name="AccountUpgrade" component={AccountUpgrade} />
        <Stack.Screen name="Articles" component={Articles} />
        <Stack.Screen name="UpgradeMembership" component={UpgradeMembership} />
        <Stack.Screen name="Location" component={Location} />
      </Stack.Navigator>
    </>
  );
}

export default MyStack;