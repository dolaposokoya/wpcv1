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
import SelectDropdown from 'react-native-select-dropdown'

const { width, height } = Dimensions.get('screen')
function Index(props) {
    const { navigation, UserAction } = props;
    const [address, setaddress] = useState('South Moti Bagh, New Delhi-110021');
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('');
    const [loading, setloading] = useState(false)
    const [message, setmessage] = useState('')
    const [secure, setsecure] = useState(true)
    const [openModal, setopenModal] = useState(false)
    const [errorType, seterrorType] = useState('');
    const [countries, setcountries] = useState([
        'India',
        'Nigeria',
        'Ghana',
        'Libya',
        'Togo',
        'Banana',
    ])

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
            <UploadHeader navigation={navigation} name="Contact Information" backgroundColor={INTEREST_COLOR} option={'Save'} page={'payment'} goBack={goBack} />
            <ScrollView
                style={Styles.scrollView}
                contentContainerStyle={{
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <View style={Styles.body}>
                    <View style={{
                        marginTop: height * 0.03,
                        marginBottom: height * 0.03,
                    }}>
                        <Text style={Styles.contactText}>Address</Text>
                        <View style={Styles.contactView}>
                            <TextInput
                                style={Styles.inputText}
                                placeholder="Enter Address"
                                placeholderTextColor={LINE_COLOR}
                                value={address}
                                onChangeText={(text) => setpassword(text)}
                            />
                        </View>
                        <Text style={[Styles.contactText, { paddingTop: moderateScale(35) }]}>Make my contact information public, currently : <Text style={{
                            color: '#E25151'
                        }}>Not Public</Text></Text>
                        <View style={Styles.contactView}>
                            <SelectDropdown
                                style={Styles.inputText}
                                data={countries}
                                onSelect={(country, index) => {
                                    console.log(country, index)
                                }}
                                buttonTextAfterSelection={(selectedItem, index) => {
                                    return selectedItem
                                }}
                                rowTextForSelection={(item, index) => {
                                    return item
                                }}
                                defaultButtonText={'Select Option'}
                                buttonTextStyle={Styles.buttonTextStyle}
                                buttonStyle={Styles.inputText}
                                dropdownIconPosition="right"
                                renderDropdownIcon={() => <TouchableOpacity><Image source={require('../../../Assets/Images/downarrow.png')} style={Styles.contactViewImage} /></TouchableOpacity>}
                            />
                        </View>
                        <Text style={[Styles.contactText, { paddingTop: moderateScale(35) }]}>Choose email settings currently : All</Text>
                        <View style={Styles.contactView}>
                            <SelectDropdown
                                style={Styles.inputText}
                                data={countries}
                                onSelect={(country, index) => {
                                    console.log(country, index)
                                }}
                                buttonTextAfterSelection={(selectedItem, index) => {
                                    return selectedItem
                                }}
                                rowTextForSelection={(item, index) => {
                                    return item
                                }}
                                defaultButtonText={'Select Option'}
                                buttonTextStyle={Styles.buttonTextStyle}
                                buttonStyle={Styles.inputText}
                                dropdownIconPosition="right"
                                renderDropdownIcon={() => <TouchableOpacity><Image source={require('../../../Assets/Images/downarrow.png')} style={Styles.contactViewImage} /></TouchableOpacity>}
                            />
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