import React, { useRef, useState, createRef } from "react";
import { View, Text, TouchableOpacity, Image, Dimensions, ScrollView } from "react-native";
import Styles from './Styles'
import ActionSheet from "react-native-actions-sheet";
import ArrayList from '../../Shared/ArrayList/ArrayList';
import { moderateScale } from "react-native-size-matters";


const actionSheetRef = createRef();
const { width, height } = Dimensions.get('screen')
export default function DateSheet(props) {

    const { date } = props
    const refRBSheet = useRef();

    const openSheet = () => {
        // setopen(!open)
        // refRBSheet.current.open()
        actionSheetRef.current?.setModalVisible();
    }

    return (
        <View>
            <TouchableOpacity onPress={() => openSheet()}>
                <Image source={require('../../../Assets/Images/calendar.png')}
                    style={Styles.editImage}
                />
            </TouchableOpacity>
            <ActionSheet ref={actionSheetRef}
                gestureEnabled={true}
                bounceOnOpen={true}>
                <>
                    <View style={Styles.dateContainer}>
                        <TouchableOpacity onPress={() => openSheet()} style={Styles.closeView}>
                            <Image source={require('../../../Assets/Images/close1.png')}
                                style={Styles.closeImage}
                            />
                        </TouchableOpacity>
                        <ArrayList
                            data={date}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <View style={[Styles.dateCard, { borderBottomWidth: item.id === date.length.toString() ? 0 : moderateScale(1) }]}>
                                    <Text style={Styles.bottomtext}>{item.text}</Text>
                                    <Text style={Styles.dateCardText}>{item.date}</Text>
                                </View>
                            )}
                        />
                    </View>
                </>
            </ActionSheet>
        </View>
    );
}