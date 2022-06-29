import React, { useState } from 'react'
import { View, Text, Dimensions, Image, ScrollView, StatusBar, Pressable } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import { INTEREST_COLOR, THEME_COLOR } from '../../../Config/Config'
import ArrayList from '../../Shared/ArrayList/ArrayList'
import SharedHeader from '../../Shared/SharedHeader/SharedHeader'
import Styles from './Styles'


const { width, height } = Dimensions.get('screen')
export default function Index(props) {
    const { navigation } = props
    const [type, settype] = useState('This Week');
    const [itemId, setitemId] = useState("1");

    const Week = [
        {
            id: "1",
            name: "Profile Views",
            count: 0
        },
        {
            id: "2",
            name: "User Awards",
            count: 0
        },
        {
            id: "3",
            name: "Photo Likes",
            count: 0
        },
        {
            id: "4",
            name: "Photos Comments",
            count: 0
        },
        {
            id: "5",
            name: "Photo Views",
            count: 0
        },
        {
            id: "6",
            name: "Photo Awards",
            count: 0
        },
        {
            id: "7",
            name: "New Notification",
            count: 0
        },
        {
            id: "8",
            name: "WPC Points This Week",
            count: 0
        },
    ];

    const Month = [
        {
            id: "1",
            name: "Profile Views",
            count: 25
        },
        {
            id: "2",
            name: "User Awards",
            count: 1
        },
        {
            id: "3",
            name: "Photo Likes",
            count: 23
        },
        {
            id: "4",
            name: "Photos Comments",
            count: 5
        },
        {
            id: "5",
            name: "Photo Views",
            count: 12
        },
        {
            id: "6",
            name: "Photo Awards",
            count: 3
        },
        {
            id: "7",
            name: "New Notification",
            count: 2
        },
        {
            id: "8",
            name: "WPC Points This Week",
            count: 1
        },
    ];

    const AllTime = [
        {
            id: "1",
            name: "Profile Views",
            count: 0
        },
        {
            id: "2",
            name: "User Awards",
            count: 0
        },
        {
            id: "3",
            name: "Photo Likes",
            count: 0
        },
        {
            id: "4",
            name: "Photos Comments",
            count: 0
        },
        {
            id: "5",
            name: "Photo Views",
            count: 0
        },
        {
            id: "6",
            name: "Photo Awards",
            count: 0
        },
        {
            id: "7",
            name: "New Notification",
            count: 0
        },
        {
            id: "8",
            name: "WPC Points This Week",
            count: 0
        },
    ];

    const userStats = [
        {
            id: "1",
            name: "This Week"
        },
        {
            id: "2",
            name: "Month"
        },
        {
            id: "3",
            name: "All Time"
        },
    ];


    const onChangeView = (id, type) => {
        setitemId(id)
        settype(type)
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
            <SharedHeader navigation={navigation} name={`My Stats`} />
            <ScrollView style={Styles.scrollView}
                contentContainerStyle={Styles.contentContainerStyle}
            >
                <View style={Styles.statsContainer}>
                    <View style={Styles.statsView}>
                        <Text style={Styles.statsText}>WPC Score</Text>
                        <Text style={Styles.statsText1}>53.00</Text>
                    </View>
                    <View style={Styles.statsView}>
                        <Image source={require('../../../Assets/Images/stats.png')} style={Styles.statsImage} />
                    </View>
                    <View style={Styles.statsView}>
                        <Text style={Styles.statsText}>World Rank</Text>
                        <Text style={Styles.statsText1}>#9435</Text>
                    </View>
                </View>
                <View style={Styles.statsView1}>
                    <Text style={Styles.statsText1}>Stay on top of all your stats.</Text>
                    <Text style={Styles.statsViewText1}>See who award, likes or comments on your photos.</Text>
                </View>
                <ArrayList
                    data={userStats}
                    extraData={userStats}
                    horizontal={true}
                    renderItem={({ item }) => (
                        <Pressable style={Styles.userStats} onPress={() => onChangeView(item.id, item.name)}>
                            <Text style={[Styles.statsText1Active, itemId === item.id && Styles.statsText1]}>{item.name}</Text>
                            <View style={itemId === item.id ? Styles.circle : Styles.rectangle} />
                        </Pressable>
                    )}
                />
                <View style={[Styles.userStatView, { opacity: 1, backgroundColor: 'transparent' }]}>
                    <Text style={[Styles.userStatViewText, { fontFamily: 'bold', color: THEME_COLOR }]}>INSIGHTS</Text>
                    <Text style={[Styles.userStatViewText, { fontFamily: 'bold', color: THEME_COLOR }]}>COUNT</Text>
                </View>
                {type === 'This Week' && <ArrayList
                    style={{
                        paddingBottom: moderateScale(30),
                    }}
                    data={Week}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={[Styles.userStatView]}>
                            <Text style={Styles.userStatViewText}>{item.name}</Text>
                            <Text style={Styles.userStatViewText}>{item.count}</Text>
                        </View>
                    )}
                />}
                {type === 'Month' && <ArrayList
                    style={{
                        paddingBottom: moderateScale(30),
                    }}
                    data={Month}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={[Styles.userStatView]}>
                            <Text style={Styles.userStatViewText}>{item.name}</Text>
                            <Text style={Styles.userStatViewText}>{item.count}</Text>
                        </View>
                    )}
                />}
                {type === 'All Time' && <ArrayList
                    style={{
                        paddingBottom: moderateScale(30),
                    }}
                    data={AllTime}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={[Styles.userStatView]}>
                            <Text style={Styles.userStatViewText}>{item.name}</Text>
                            <Text style={Styles.userStatViewText}>{item.count}</Text>
                        </View>
                    )}
                />}
            </ScrollView>
        </>
    )
}
