import React, { useEffect, useState } from 'react'
import { View, Text, Dimensions, ScrollView, Alert } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import { THEME_COLOR } from '../../../Config/Config'
import SharedHeader from '../../Shared/SharedHeader/SharedHeader'
import Styles from './Styles'
import ArrayList from '../../Shared/ArrayList/ArrayList'
import { UserQuotaAction } from '../../../Actions/UserAction';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../../Shared/Loader/Loader'
import MessageModal from '../../Shared/Modal/MessageModal'


const { width, height } = Dimensions.get('screen')
function Index(props) {
    const { navigation, UserQuotaAction } = props;
    const [data, setData] = useState({})
    const [quotaDetails, setquotaDetails] = useState([])
    const [loading, setloading] = useState(false)
    const [message, setmessage] = useState('')
    const [openModal, setopenModal] = useState(false)
    const [errorType, seterrorType] = useState('');
    useEffect(() => {
        getUserQuota();
    }, [])


    const getUserQuota = async () => {
        setloading(true)
        try {
            const user_id = await AsyncStorage.getItem('@user_id');
            await UserQuotaAction(user_id, response => {
                if (response) {
                    const { success, data, message } = response
                    if (success === 1) {
                        setData(data)
                        setquotaDetails(Quota)
                        setTimeout(() => {
                            setloading(false);
                        }, 3000);
                    }
                    else {
                        setloading(false)
                        seterrorType('warning')
                        setmessage(message)
                        setopenModal(true)
                    }
                }
                else {
                    setloading(false)
                    seterrorType('warning')
                    setmessage('Something went wrong')
                    setopenModal(true)
                }
            })
        } catch (error) {
            setloading(false)
            seterrorType('error')
            setmessage(error.message)
            setopenModal(true)

        }
    }

    const Quota = [
        {
            id: "1",
            feature: "Multiplication Factor",
            limit: "-",
            used: data && data.multiplication_factor_quota
        },
        {
            id: "2",
            feature: "Photos",
            limit: data && data.photos_quota,
            used: data && data.photos_used
        },
        {
            id: "3",
            feature: "Blogs",
            limit: data && data.blogs_quota,
            used: data && data.blogs_used
        },
        {
            id: "4",
            feature: "Groups",
            limit: data && data.groups_quota,
            used: data && data.groups_used
        },
        {
            id: "5",
            feature: "Videos",
            limit: data && data.videos_quota,
            used: data && data.videos_used
        },
        {
            id: "6",
            feature: "Portfolios",
            limit: data && data.portfolios_quota,
            used: data && data.portfolios_used
        },
        // {
        //     id: "7",
        //     feature: "Clubs",
        //     limit: data,
        //     used: data
        // },
        {
            id: "8",
            feature: "Free Entry to Competitions",
            limit: data && data.free_entry_to_comps_quota,
            used: data && data.free_entry_to_comps_used
        },
        // {
        //     id: "9",
        //     feature: "Free Portfolio Reviews",
        //     limit: data,
        //     used: data
        // },
        // {
        //     id: "10",
        //     feature: "Free Projects Quota",
        //     limit: data,
        //     used: data
        // },
        // {
        //     id: "11",
        //     feature: "Free Courses Quota",
        //     limit: data,
        //     used: data
        // },
    ];


    const closeModal = (state) => {
        setmessage('')
        seterrorType('')
        setopenModal(state)
    }

    return (
        <>
            {loading && <Loader />}
            {openModal && <MessageModal closeModal={closeModal} message={message} errorType={errorType} />}
            <SharedHeader navigation={navigation} name={`Quota Details`} />
            <ScrollView style={Styles.scrollView}
                contentContainerStyle={Styles.contentContainerStyle}
            >
                <View style={Styles.userStatView1}>
                    <Text style={[Styles.userStatViewText, { fontFamily: 'bold', color: THEME_COLOR }]}>FEATURE</Text>
                    <Text style={[Styles.userStatViewText, { fontFamily: 'bold', color: THEME_COLOR }]}>LIMIT</Text>
                    <Text style={[Styles.userStatViewText, { fontFamily: 'bold', color: THEME_COLOR }]}>USED</Text>
                </View>
                <ArrayList
                    style={{
                        paddingBottom: moderateScale(30),
                    }}
                    data={quotaDetails}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={[Styles.userStatView]} key={item.id}>
                            <View style={Styles.quotaData}>
                                <Text style={Styles.userStatViewText}>{item.feature}</Text>
                            </View>
                            <View style={Styles.quotaData1}>
                                <Text style={Styles.userStatViewText}>{item.limit}</Text>
                            </View>
                            <View style={Styles.quotaData2}>
                                <Text style={Styles.userStatViewText}>{item.used}</Text>
                            </View>
                        </View>
                    )}
                />
            </ScrollView>
        </>
    )
}

const mapStateToProps = state => {
    const { userQuota } = state.UserReducer;
    return {
        userQuota
    };
};

const UserQuota = connect(
    mapStateToProps,
    { UserQuotaAction },
)(Index);
export default UserQuota;
// 