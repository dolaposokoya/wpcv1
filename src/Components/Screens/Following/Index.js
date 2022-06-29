import React, { useState } from 'react'
import { View, Text, Dimensions, Image, TouchableOpacity, ScrollView, StatusBar } from 'react-native'
import { INTEREST_COLOR, PLUS_COLOR, THEME_COLOR } from '../../../Config/Config'
import ArrayList from '../../Shared/ArrayList/ArrayList'
import SharedHeader from '../../Shared/SharedHeader/SharedHeader'
import Styles from './Styles'

const { width, height } = Dimensions.get('screen')
// const screenHeight = height - '85@msr';
const screenHeight = height - (height * 0.12);
export default function Index(props) {
    const { navigation, route } = props
    const { item, screen } = route.params;
    const [selectInterest, setselectInterest] = useState('')

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

    const goToUpload = () => {
        const selectedInterestName = []
        const userInterest = data.filter((item) => {
            if (item.selected === true)
                selectedInterestName.push(item.name)
            return item.name
        })
        const newAfrray = selectedInterestName.join(', ')
        navigation.navigate('Upload', {
            interest: newAfrray
        })
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
    return (
        <>
            <StatusBar
                hidden={false}
                animated={true}
                barStyle='light-content'
                showHideTransition="slide"
                backgroundColor={INTEREST_COLOR}
            />
            <SharedHeader navigation={navigation} name={`${item.following} ${screen}`} />
            <View style={Styles.body}>
                {item.following <= 0 ?
                    <>
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Image
                                source={require('../../../Assets/Images/smile.png')}
                                style={Styles.smileImage}
                            />
                            <Text style={Styles.smileText}>{item.user_name} is not following anyone yet.</Text>
                        </View>
                    </>
                    :
                    <ScrollView style={Styles.scrollView}>
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
                    </ScrollView>
                }

            </View>
        </>
    )
}
