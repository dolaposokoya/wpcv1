import React, { useEffect, useState } from 'react'
import { View, Text, Dimensions, Image, TouchableOpacity, ScrollView, StatusBar, TextInput } from 'react-native'
import { INPUT_TEXT, INTEREST_COLOR } from '../../../Config/Config'
import UploadHeader from '../../Shared/SharedHeader/UploadHeader';
import Styles from './Styles';
import { connect } from 'react-redux';
import { UserAction } from '../../../Actions/UserAction';
import Loader from '../../Shared/Loader/Loader';
import MessageModal from '../../Shared/Modal/MessageModal'
import DeleteSheet from '../../Sheets/DeleteSheet/DeleteSheet';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppStatusBar from '../../Shared/StatusBar/AppStatusBar';

const { width, height } = Dimensions.get('screen')
function Index(props) {
    const { navigation, UserAction } = props;
    const [username, setusername] = useState()
    const [loading, setloading] = useState(false)
    const [message, setmessage] = useState('')
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
    const goToScreen = (screen) => {
        navigation.navigate(screen)
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
            <UploadHeader navigation={navigation} name="Account" backgroundColor={INTEREST_COLOR} option={'Save'} page={'payment'} goBack={goBack} />
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
                        <View style={Styles.paymentView}>
                            <Text style={Styles.paymentText}>User Name</Text>
                            <TextInput
                                style={Styles.inpuText}
                                placeholder="Please enter username"
                                placeholderTextColor={INPUT_TEXT}
                                value={username}
                                onChangeText={(text) => setusername(text)}
                            />
                        </View>
                        <TouchableOpacity onPress={() => goToScreen('Email')} style={Styles.paymentView1}>
                            <View>
                                <Text style={Styles.paymentViewText}>Email ID</Text>
                                <Text style={Styles.paymentViewText1}>{username}</Text>
                            </View>
                            <Image source={require('../../../Assets/Images/uparrow.png')}
                                style={Styles.paymentViewImage}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => goToScreen('ChangePassword')} style={Styles.paymentView1} >
                            <Text style={Styles.paymentViewText}>Change Password</Text>
                            <Image source={require('../../../Assets/Images/uparrow.png')}
                                style={Styles.paymentViewImage}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => goToScreen('LinkedAccount')} style={Styles.paymentView1}>
                            <Text style={Styles.paymentViewText}>Linked Accounts</Text>
                            <Image source={require('../../../Assets/Images/uparrow.png')}
                                style={Styles.paymentViewImage}
                            />
                        </TouchableOpacity>
                        <DeleteSheet paymentView={Styles.paymentView} paymentText={Styles.paymentText} paymentText1={Styles.paymentText1} paymentText2={Styles.paymentText2} />
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