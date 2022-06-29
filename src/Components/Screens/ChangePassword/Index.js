import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react'
import { View, Text, Dimensions, Image, TouchableOpacity, ScrollView, StatusBar, TextInput, Alert } from 'react-native'
import { INTEREST_COLOR, LINE_COLOR } from '../../../Config/Config'
import UploadHeader from '../../Shared/SharedHeader/UploadHeader';
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
    const [password, setpassword] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');
    const [loading, setloading] = useState(false)
    const [message, setmessage] = useState('')
    const [secure, setsecure] = useState(true)
    const [secure1, setsecure1] = useState(true)
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
            <UploadHeader navigation={navigation} name="Change Password" backgroundColor={INTEREST_COLOR} option={'Save'} page={'payment'} goBack={goBack} />
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
                        <Text style={Styles.paymentText}>Old Password</Text>
                        <View style={Styles.paymentView}>
                            <TextInput
                                style={Styles.inpuText}
                                placeholder="Enter Password"
                                placeholderTextColor={LINE_COLOR}
                                value={oldPassword}
                                secureTextEntry={true}
                                onChangeText={(text) => setOldPassword(text)}
                            />
                        </View>
                        <Text style={[Styles.paymentText, { paddingTop: moderateScale(35) }]}>New Password</Text>
                        <View style={Styles.paymentView}>
                            <TextInput
                                style={Styles.inpuText}
                                placeholder="Enter Password"
                                placeholderTextColor={LINE_COLOR}
                                value={password}
                                secureTextEntry={secure}
                                onChangeText={(text) => setpassword(text)}
                            />
                            <TouchableOpacity onPress={() => setsecure(!secure)} style={{
                                position: 'absolute',
                                right: 0,
                            }}>
                                <Image source={require('../../../Assets/Images/view.png')} style={Styles.paymentViewImage} />
                            </TouchableOpacity>
                        </View>
                        <Text style={[Styles.paymentText, { paddingTop: moderateScale(35) }]}>Confirm Password</Text>
                        <View style={Styles.paymentView}>
                            <TextInput
                                style={Styles.inpuText}
                                placeholder="Enter Password"
                                placeholderTextColor={LINE_COLOR}
                                value={confirmPassword}
                                secureTextEntry={secure1}
                                onChangeText={(text) => setconfirmPassword(text)}
                            />
                            <TouchableOpacity onPress={() => setsecure1(!secure1)} style={{
                                position: 'absolute',
                                right: 0,
                            }}>
                                <Image source={require('../../../Assets/Images/hidden.png')} style={Styles.paymentViewImage} />
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

const Account = connect(
    mapStateToProps,
    { UserAction },
)(Index);
export default Account;