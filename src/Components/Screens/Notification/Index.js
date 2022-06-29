import React, { useState, useEffect } from 'react'
import { View, Text, Dimensions, Image, TouchableOpacity, StatusBar, ScrollView, RefreshControl } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import { INTEREST_COLOR, PLUS_COLOR, SEARCH_COLOR, THEME_COLOR, THEME_COLOR_BACKGROUND } from '../../../Config/Config'
import SharedHeader from '../../Shared/SharedHeader/SharedHeader'
import Loader from '../../Shared/Loader/Loader'
import Styles from './Styles';
import ArrayList from '../../Shared/ArrayList/ArrayList'


const { width, height } = Dimensions.get('screen');
const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}
export default function Index(props) {

    const { navigation } = props
    const [loading, setloading] = useState(true)
    const [selected, setselected] = useState('');
    const [data, setdata] = useState([])
    const [refreshing, setRefreshing] = useState(false);

    const Notification = [
        {
            id: '1',
            name: 'Belinda Vakarewa',
            image: require('../../../Assets/Images/people.png'),
            title: "Hey, I'm From #New Delhi",
            message: "Hey Zaib, I like to invite you to join the party. It will be happy moment if you attend the party. So don't be late. Thanks.",
            time: '15 minutes ago'
        },
        {
            id: '2',
            name: 'Georgia Wareham',
            image: require('../../../Assets/Images/people.png'),
            title: 'Lorem Ipsum Is Simply Dummy',
            message: '',
            time: '15 minutes ago'
        },
        {
            id: '3',
            name: 'Riley Meredith',
            image: require('../../../Assets/Images/login_image.png'),
            title: 'Lorem Ipsum Is Simply Dummy',
            message: '',
            time: '15 minutes ago'
        },
        {
            id: '4',
            name: 'Delissa Kimmince',
            image: require('../../../Assets/Images/login_image.png'),
            title: 'Lorem Ipsum Is Simply Dummy',
            message: '',
            time: '15 minutes ago'
        },
        {
            id: '5',
            name: 'Jason Behrendorff',
            image: require('../../../Assets/Images/useractive.png'),
            title: 'Lorem Ipsum Is Simply Dummy',
            message: "Hey Zaib, I like to invite you to join the party. It will be happy moment if you attend the party. So don't be late. Thanks.",
            time: '15 minutes ago'
        },
        {
            id: '6',
            name: 'Georgia Redmayne',
            image: require('../../../Assets/Images/user.png'),
            title: 'Lorem Ipsum Is Simply Dummy',
            message: "Hey Zaib, I like to invite you to join the party. It will be happy moment if you attend the party. So don't be late. Thanks.",
            time: '15 minutes ago'
        },
        {
            id: '7',
            name: 'Peter Handscomb',
            image: require('../../../Assets/Images/people.png'),
            title: 'Lorem Ipsum Is Simply Dummy',
            message: "Hey Zaib, I like to invite you to join the party. It will be happy moment if you attend the party. So don't be late. Thanks.",
            time: '15 minutes ago'
        },
    ];

    const onRefresh = React.useCallback(() => {
        setdata([]);
        setRefreshing(true);
        wait(2000).then(() => {
            setRefreshing(false);
            setdata(Notification);
        });
    }, []);

    useEffect(() => {
        loadNotification()
        return () => loadNotification()
    }, [navigation]);

    const loadNotification = () => {
        setTimeout(() => {
            setloading(false)
            setdata(Notification)
        }, 3000);
    }
    const deleteNotification = (id) => {
        const newNotification = data.filter(item => {
            return item.id !== id
        })
        setdata(newNotification)
        setselected('')
    }

    return (
        <>
            <SharedHeader navigation={navigation} name="Notification" />
            {loading && <Loader />}
            <ScrollView style={Styles.scrollView}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            >
                <View style={Styles.body}>
                    <ArrayList
                        style={{
                            marginBottom: moderateScale(25)
                        }}
                        data={data}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <View style={[Styles.notificationView, { borderBottomWidth: Notification.length === parseInt(item.id) ? 0 : 1 }]}>
                                <Image source={item.image} style={Styles.notificationImage} />
                                <View style={{
                                    flexShrink: 1
                                }}>
                                    <TouchableOpacity onPress={() => setselected(item.id)}>
                                        <Text style={Styles.notificationName}>{item.name}</Text>
                                    </TouchableOpacity>
                                    <Text style={Styles.notificationTitle}>{selected === item.id ? item.message : item.title}</Text>
                                    <Text style={Styles.notificationTime}>{item.time}</Text>
                                    {selected === item.id && <TouchableOpacity style={Styles.notificationBtnView} onPress={() => deleteNotification(item.id)}>
                                        <Text style={Styles.notificationBtnText}>DELETE</Text>
                                    </TouchableOpacity>}
                                </View>
                            </View>
                        )}
                    />
                </View>
            </ScrollView>
        </>
    )
}
