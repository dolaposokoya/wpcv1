import React, { useState } from 'react'
import { View, Text, Dimensions, Image, TouchableOpacity, ScrollView, StatusBar } from 'react-native'
import { INTEREST_COLOR, PLUS_COLOR, THEME_COLOR } from '../../../Config/Config'
import ArrayList from '../../Shared/ArrayList/ArrayList'
import SharedHeader from '../../Shared/SharedHeader/SharedHeader'
import Styles from './Styles'

const { width, height } = Dimensions.get('screen')
export default function Index(props) {
    const { navigation, route } = props
    const { item, screen } = route.params;

    const interestOptions = [
        {
            id: "1",
            name: "Darcie Brown",
            text: 'Lorem Ipsum Is Simply Dummy',
            selected: false
        },
        {
            id: "2",
            name: "Tahlia Mcgrath",
            text: 'Lorem Ipsum Is Simply Dummy',
            selected: false
        },
        {
            id: "3",
            name: "Riley Meredith",
            text: 'Lorem Ipsum Is Simply Dummy',
            selected: false
        },
        {
            id: "4",
            name: "Tayla Vlaeminck",
            text: 'Lorem Ipsum Is Simply Dummy',
            selected: false
        },
        {
            id: "5",
            name: "Jason Behrendorff",
            text: 'Lorem Ipsum Is Simply Dummy',
            selected: false
        },
        {
            id: "6",
            name: "Jess Jonassen",
            text: 'Lorem Ipsum Is Simply Dummy',
            selected: false
        },
        {
            id: "7",
            name: "Peter Handscomb",
            text: 'Lorem Ipsum Is Simply Dummy',
            selected: false
        },
        {
            id: "8",
            name: "Beth Mooney",
            text: 'Lorem Ipsum Is Simply Dummy',
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

    const length = interestOptions.length - 1

    const People = ({ item, index }) => {
        return (
            <View style={[Styles.interestContainer, { borderBottomWidth: index !== length ? 1 : 0 }]}>
                <View style={Styles.peopleView}>
                    <Image source={require('../../../Assets/Images/people.png')} style={Styles.peopleImage} />
                    <View>
                        <Text style={Styles.interest}>{item.name}</Text>
                        <Text style={Styles.interestText}>{item.text}</Text>
                    </View>
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
                animated={true}
                barStyle='light-content'
                showHideTransition="slide"
                backgroundColor={INTEREST_COLOR}
            />
            <SharedHeader navigation={navigation} name={`${interestOptions.length} ${screen}`} />
            <ScrollView
                contentContainerStyle={Styles.contentContainerStyle}
            >
                <View style={Styles.body}>
                    <ArrayList
                        data={data}
                        keyExtractor={(item) => item.id}
                        renderItem={People}
                    />
                </View>
            </ScrollView>
        </>
    )
}
