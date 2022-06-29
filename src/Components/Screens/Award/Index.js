import React, { useState } from 'react'
import { View, Text, Dimensions, Image, TouchableOpacity, ScrollView, StatusBar } from 'react-native'
import { INTEREST_COLOR } from '../../../Config/Config'
import ArrayList from '../../Shared/ArrayList/ArrayList'
import SharedHeader from '../../Shared/SharedHeader/SharedHeader'
import Styles from './Styles'

const { width, height } = Dimensions.get('screen')
export default function Index(props) {
    const { navigation } = props
    const [selectInterest, setselectInterest] = useState('')

    const trophyCabinet = [
        {
            id: "1",
            name: "Simple Awesome",
            selected: false
        },
        {
            id: "2",
            name: "Jaw Dropping",
            selected: false
        },
        {
            id: "3",
            name: "World Class",
            selected: false
        },
        {
            id: "4",
            name: "Beautiful Composition",
            selected: true
        },
        {
            id: "5",
            name: "Piece of Arts",
            selected: false
        },
        {
            id: "6",
            name: "Truly Inspirational",
            selected: false
        },
    ]
    const [data, setdata] = useState(trophyCabinet)

    const goToUpload = () => {
    }

    const interest = ({ item, index }) => {
        return (
            <View style={Styles.interestContainer}>
                <View>
                    <Image source={item.selected === true ? require('../../../Assets/Images/trophygold.png') : require('../../../Assets/Images/trophyplain.png')} style={Styles.trophyImg} />
                </View>
                <View style={Styles.textView}>
                    <Text style={item.selected === true ? Styles.trophyNameActive : Styles.trophyName}>{item.name}</Text>
                </View>
            </View>
        )
    }
    return (
        <>
            <StatusBar
                hidden={true}
                animated={true}
                barStyle='light-content'
                backgroundColor={INTEREST_COLOR}
            />
            <SharedHeader navigation={navigation} name="Award" />
            <ScrollView
                style={Styles.scrollView}
                contentContainerStyle={{
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <View style={Styles.body}>
                    <View style={Styles.cabView}>
                        <Text style={Styles.cabText}>Think of this as your trophy cabinet</Text>
                        <Text style={Styles.cabText1}>Attract awards by joining contest,</Text>
                        <Text style={Styles.cabText1}>uploading more photos and following other</Text>
                        <Text style={Styles.cabText1}>community members.</Text>
                    </View>
                    <ArrayList
                        data={data}
                        keyExtractor={(item) => item.id}
                        renderItem={interest}
                        // horizontal={true}
                        numColumns={2}
                    />
                    <View style={Styles.btnView}>
                        <TouchableOpacity style={Styles.nextBtn} onPress={() => goToUpload()}>
                            <Text style={Styles.nextBtnText}>Award</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </>
    )
}
