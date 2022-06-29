import React, { useState,useEffect } from 'react'
import { View, Text, Dimensions, Image, TouchableOpacity } from 'react-native'
import { INTEREST_COLOR } from '../../../Config/Config'
import SharedHeader from '../../Shared/SharedHeader/SharedHeader'
import Styles from './Styles'
import { connect } from 'react-redux';
import { GetCookieAction, DeleteCookieAction } from '../../../Actions/CookieAction'
import Loader from '../../Shared/Loader/Loader'
import Animated from 'react-native-reanimated'
import ArrayList from '../../Shared/ArrayList/ArrayList'


const { width, height } = Dimensions.get('screen')

function Index(props) {
    const { navigation } = props
    const helpfeedbackList = [
        {
            id: "1",
            name: "FAQ",
        },
        {
            id: "2",
            name: "Contact Support",
        },
        {
            id: "3",
            name: "Rate us on App Store",
        },
    ]
    const [data, setdata] = useState()

    useEffect(() => {
        setdata(helpfeedbackList)
    }, [])

    const goToScreen = (screen) => {
        navigation.navigate(screen)
    }

    const interest = ({ item }) => {
        return (
            <TouchableOpacity style={Styles.paymentView1} >
                <Text style={Styles.paymentViewText}>{item.name}</Text>
                <Image source={require('../../../Assets/Images/uparrow.png')}
                    style={Styles.paymentViewImage}
                />
            </TouchableOpacity>
        )
    }

    return (
        <>
            <SharedHeader navigation={navigation} name="Help & Feedback" />
            <Animated.ScrollView style={Styles.scrollView}>
                <View style={Styles.body}>
                    <ArrayList
                        data={data}
                        keyExtractor={(item) => item.id}
                        renderItem={interest}
                    />
                </View>
            </Animated.ScrollView>
        </>
    )
}


const mapStateToProps = state => {
    const { cookie } = state.CookieReducer;
    return {
        cookie
    };
};

const HelpAndFeedback = connect(
    mapStateToProps,
    { GetCookieAction, DeleteCookieAction },
)(Index);
export default HelpAndFeedback;