import React, { useState } from 'react'
import { View, Text, Dimensions, Image, TouchableOpacity, ScrollView, StatusBar } from 'react-native'
import { INTEREST_COLOR, PLUS_COLOR, THEME_COLOR, THEME_COLOR_BACKGROUND } from '../../../Config/Config'
import SharedHeader from '../../Shared/SharedHeader/SharedHeader'
import Styles from './Styles';
import { AddInterestAction, GetInterestAction } from '../../../Actions/InterestAction'
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MessageModal from '../../Shared/Modal/MessageModal';
import Loader from '../../Shared/Loader/Loader';
import ArrayList from '../../Shared/ArrayList/ArrayList';

const { width, height } = Dimensions.get('screen')
function Index(props) {
    const { navigation, AddInterestAction } = props
    const [selectInterest, setselectInterest] = useState('')
    const [loading, setloading] = useState(false)
    const [openModal, setopenModal] = useState(false)
    const [errorType, seterrorType] = useState('')
    const [message, setmessage] = useState('')

    const interestOptions = [
        {
            id: "1",
            name: "Advertising",
            selected: false
        },
        {
            id: "2",
            name: "Advertising",
            selected: false
        },
        {
            id: "3",
            name: "Architectural",
            selected: false
        },
        {
            id: "4",
            name: "Astronomical",
            selected: false
        },
        {
            id: "5",
            name: "Music",
            selected: false
        },
        {
            id: "6",
            name: "Event",
            selected: false
        },
        {
            id: "7",
            name: "Family",
            selected: false
        },
        {
            id: "8",
            name: "Fashion",
            selected: false
        },
        {
            id: "9",
            name: "Food",
            selected: false
        },
        {
            id: "10",
            name: "Landscape",
            selected: false
        },
        {
            id: "11",
            name: "Macro",
            selected: false
        },
        {
            id: "12",
            name: "Medical",
            selected: false
        },
        {
            id: "13",
            name: "Nature",
            selected: false
        },
        {
            id: "14",
            name: "Nude",
            selected: false
        },
        {
            id: "15",
            name: "Photojournalism",
            selected: false
        },
        {
            id: "16",
            name: "Portraits",
            selected: false
        },
        {
            id: "17",
            name: "Scientific",
            selected: false
        },
        {
            id: "18",
            name: "Sports",
            selected: false
        },
        {
            id: "19",
            name: "Street",
            selected: false
        },
        {
            id: "20",
            name: "Travel",
            selected: false
        },
        {
            id: "21",
            name: "Underwater",
            selected: false
        },
        {
            id: "22",
            name: "Vehicle",
            selected: false
        },
        {
            id: "23",
            name: "Wedding",
            selected: false
        },
        {
            id: "24",
            name: "Wildlife",
            selected: false
        },
    ]
    const [data, setdata] = useState(interestOptions)

    const selectedInterest = (index, select) => {
        const newInterest = data.filter((item) => {
            if (item.id === index) {
                item.selected = !select
                return item
            }
            else {
                return item
            }
        })
        setdata(newInterest)
    }

    const goToUpload = async () => {
        try {
            setloading(true)
            const selectedInterestName = []
            const userInterest = data.filter((item) => {
                if (!item.selected === true) {
                    return false
                }
                selectedInterestName.push(item.name)
                return item
            })
            const photoType = selectedInterestName.join(', ')
            const jsonValue = JSON.stringify(data)
            if (selectedInterestName.length <= 0) {
                setloading(false)
                setopenModal(true)
                seterrorType('warning')
                setmessage('No interest selected');
            }
            else {
                const user_id = await AsyncStorage.getItem('@user_id');
                console.log('New user_id', user_id)
                if (user_id === null) {
                    setloading(false)
                    setopenModal(true)
                    seterrorType('warning')
                    setmessage('Please verify account or login before you can proceed');
                    // navigation.navigate('Logi', {
                    //     interest: newArray
                    // })
                }
                else {
                    await AsyncStorage.setItem(`@USER_INTEREST`, jsonValue)
                    AddInterestAction(photoType, user_id, response => {
                        console.log('New response', response)
                        if (response && response.success === 1) {
                            setloading(false)
                            setopenModal(true)
                            seterrorType('success')
                            setmessage('Interest added');
                        }
                        else {
                            setloading(false)
                            setopenModal(true)
                            seterrorType('warning')
                            setmessage(response.message);
                        }
                    })
                }
            }
            // navigation.navigate('Upload', {
            //     interest: newArray
            // })
        } catch (error) {
            setloading(false)
            setopenModal(true)
            seterrorType('error')
            setmessage(error.message)
        }
    }

    const length = interestOptions.length - 1

    const interest = ({ item, index }) => {
        return (
            <View style={[Styles.interestContainer, { borderBottomWidth: index !== length ? 1 : 0 }]}>
                <View style={Styles.textView}>
                    <Text style={Styles.interest}>{item.name}</Text>
                </View>
                <TouchableOpacity style={[Styles.imageView, { backgroundColor: item.selected === true ? THEME_COLOR : PLUS_COLOR }]} onPress={() => selectedInterest(item.id, item.selected)}>
                    <Image source={item.selected === true ? require('../../../Assets/Images/check.png') : require('../../../Assets/Images/add1.png')} style={Styles.interestMark} />
                </TouchableOpacity>
            </View>
        )
    }

    const closeModal = (state) => {
        setmessage('')
        seterrorType('')
        setopenModal(state);
        navigation.navigate('Login')
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
            <SharedHeader navigation={navigation} name="Photography Interests" backgroundColor={INTEREST_COLOR} />
            <ScrollView
                style={Styles.scrollView}
                contentContainerStyle={{
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <View style={Styles.body}>
                    <ArrayList
                        data={data}
                        keyExtractor={(item) => item.id}
                        renderItem={interest}
                    />
                    <View style={Styles.btnView}>
                        <TouchableOpacity style={Styles.nextBtn} onPress={() => goToUpload()}>
                            <Text style={Styles.nextBtnText}>Next</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </>
    )
}

const mapStateToProps = state => {
    const { interestData, response } = state.InterestReducer;
    return {
        interestData,
        response
    };
};

const Interest = connect(
    mapStateToProps,
    { AddInterestAction },
)(Index);
export default Interest;
