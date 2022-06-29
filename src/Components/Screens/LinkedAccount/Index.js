import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react'
import { View, Text, Dimensions, Image, TouchableOpacity, ScrollView, StatusBar, TextInput, Alert } from 'react-native'
import { INTEREST_COLOR } from '../../../Config/Config'
import SharedHeader from '../../Shared/SharedHeader/SharedHeader';
import Styles from './Styles';
import { connect } from 'react-redux';
import { UserAction } from '../../../Actions/UserAction';
import Loader from '../../Shared/Loader/Loader';
import MessageModal from '../../Shared/Modal/MessageModal'
import { moderateScale } from 'react-native-size-matters';

const { width, height } = Dimensions.get('screen')
function Index(props) {
    const { navigation, UserAction } = props;
    const [username, setusername] = useState('');
    const [loading, setloading] = useState(false)
    const [message, setmessage] = useState('')
    const [apple, setApple] = useState(true)
    const [facebook, setfacebook] = useState(false)
    const [openModal, setopenModal] = useState(false)
    const [errorType, seterrorType] = useState('');

    useEffect(() => {
        getUser()
        // return () => {
        //     cleanup
        // }
    }, [navigation])

    const goBack = () => {
        navigation.goBack()
    }

    const getUser = async () => {
        try {
            setloading(true)
            const user_id = await AsyncStorage.getItem('@user_id');
            UserAction(user_id, response => {
                if (!response && response.success !== 1) {
                    setloading(false)
                    seterrorType('warning')
                    setmessage(response.message)
                    setopenModal(true)
                    return false;
                }
                const { data } = response
                setusername(data.user_name);
                setloading(false)
            })
        } catch (error) {
            setloading(false)
            seterrorType('error')
            setmessage(error.message)
            setopenModal(true)
        }
    }

    const closeModal = (state) => {
        setmessage('')
        seterrorType('')
        setopenModal(state)
    }

    return (
        <>
            {loading && <Loader />}
            {openModal && <MessageModal closeModal={closeModal} message={message} errorType={errorType} />}
            <StatusBar
                hidden={false}
                animated={true}
                barStyle='light-content'
                showHideTransition="slide"
                backgroundColor={INTEREST_COLOR}
            />
            <SharedHeader navigation={navigation} name="Linked Accounts" backgroundColor={INTEREST_COLOR} goBack={goBack} />
            <ScrollView
                style={Styles.scrollView}
                contentContainerStyle={{
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <View style={Styles.body}>
                    <View style={{
                        marginTop: height * 0.03
                    }}>
                        <Text style={Styles.accountText}>Connect your accounts in order to log in with them to WPC.</Text>
                        <View style={[Styles.accountView, { marginTop: moderateScale(27) }]}>
                            <Text style={Styles.accountText1}>Apple</Text>
                            <TouchableOpacity onPress={() => setApple(!apple)}>
                                <Image source={apple ? require('../../../Assets/Images/onswitch.png') : require('../../../Assets/Images/offswitch.png')} style={Styles.accountImage} />
                            </TouchableOpacity>
                        </View>
                        <View style={Styles.accountView}>
                            <Text style={Styles.accountText1}>Facebook</Text>
                            <TouchableOpacity onPress={() => setfacebook(!facebook)}>
                                <Image source={facebook ? require('../../../Assets/Images/onswitch.png') : require('../../../Assets/Images/offswitch.png')} style={Styles.accountImage} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </>
    )
}


const mapStateToProps = state => {
    const { userData } = state.UserReducer;
    return {
        userData
    };
};

const LinkedAccount = connect(
    mapStateToProps,
    { UserAction },
)(Index);
export default LinkedAccount;