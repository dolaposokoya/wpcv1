import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import Styles from './Style';
import { HEADER_COLOR, THEME_COLOR, WHITE } from '../../../Config/Config';
import DateSheet from '../../Sheets/DateSheet/DateSheet';
import { moderateScale } from 'react-native-size-matters';
import { StatusBar } from 'expo-status-bar';

export default function Header(props) {
    const { page, children, navigation, animate, date } = props

    return (
        <>
          <StatusBar
               StatusBarAnimation='slide'
               StatusBarStyle='auto'
            />
            {page !== 'comp' ? <View style={[Styles.header, animate]}>
                <TouchableOpacity onPress={() => navigation.navigate('Search')} style={Styles.headerMenu}>
                    <Image source={require('../../../Assets/Images/search.png')} style={Styles.menus} />
                </TouchableOpacity>
                <View style={Styles.headerMenu1}>
                    {children}
                </View>
                <View style={Styles.headerMenu2}>
                    <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
                        {/* <TouchableOpacity onPress={() => navigation.navigate('Notification')}> */}
                        <Image source={require('../../../Assets/Images/bell.png')} style={Styles.menus} />
                        <View style={Styles.notification} />
                    </TouchableOpacity>
                    {/* <TouchableOpacity onPress={() => navigation.navigate('ProfileStack', { screen: 'ProfilePage' })}>
                        <Image source={require('../../../Assets/Images/user.png')} style={Styles.menus} />
                    </TouchableOpacity> */}
                </View>
            </View> : <View style={[Styles.header, { paddingLeft: moderateScale(15), paddingRight: moderateScale(15) }]}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={Styles.headerMenu}>
                    <Image source={require('../../../Assets/Images/left.png')} style={Styles.menus} />
                </TouchableOpacity>
                <View style={Styles.headerMenu1}>
                    {children}
                </View>
                <View style={Styles.headerMenu2}>
                    <DateSheet date={date} />
                    <TouchableOpacity>
                        <Image source={require('../../../Assets/Images/forward.png')} style={Styles.menus} />
                    </TouchableOpacity>
                </View>
            </View>}
        </>
    )
}
