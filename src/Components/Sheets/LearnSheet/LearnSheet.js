import React, { useRef, useState, createRef } from "react";
import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import Styles from './Styles'
import ActionSheet from "react-native-actions-sheet";


const actionSheetRef = createRef();
const { width, height } = Dimensions.get('screen')
export default function LearnSheet(props) {

    const { teachView, teach } = props
    const [open, setopen] = useState(false)
    const refRBSheet = useRef();

    const openSheet = () => {
        actionSheetRef.current?.setModalVisible();
    }

    return (
        <View>
            <TouchableOpacity onPress={() => openSheet()} style={teachView}>
                <Text style={teach}>Teach & Earn Rs.25,000</Text>
            </TouchableOpacity>
            <ActionSheet
                ref={actionSheetRef}
                gestureEnabled={true}
                bounceOnOpen={true}>
                <View style={Styles.sheetView}>
                    <TouchableOpacity onPress={() => openSheet()}>
                        <Image source={require('../../../Assets/Images/close1.png')} style={Styles.image} />
                    </TouchableOpacity>
                    <Text style={Styles.bottomtext}>Host A Course</Text>
                    <Text style={Styles.bottomtext1}>Please email us at admin@worldphotographersclub.com with the course details and your contact information.</Text>
                </View>
            </ActionSheet>
        </View>
    );
}