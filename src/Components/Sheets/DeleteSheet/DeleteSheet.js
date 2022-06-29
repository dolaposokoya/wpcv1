import React, { createRef, useState } from "react";
import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import { THEME_COLOR } from "../../../Config/Config";
import Styles from './Styles'
import ActionSheet from "react-native-actions-sheet";
import { moderateScale } from "react-native-size-matters";

const actionSheetRef = createRef();
const { width, height } = Dimensions.get('screen')
export default function DeleteSheet(props) {

    const [report, setreport] = useState(false)
    const { paymentView, paymentText, paymentText1, paymentText2 } = props


    const closeAction = (value) => {
        actionSheetRef.current?.setModalVisible(value)
    }

    return (
        <>
            <TouchableOpacity onPress={() => closeAction(true)} style={paymentView}>
                <Text style={paymentText}>Delete Account</Text>
                <Text style={paymentText1}>This will delete your account and all content from WPC permanently.</Text>
                <Text style={paymentText2}>THIS CANNOT BE UNDONE.</Text>
            </TouchableOpacity>
            <ActionSheet ref={actionSheetRef} extraScroll={5}
                headerAlwaysVisible={true}
                openAnimationSpeed={50}
                CustomHeaderComponent
                bounceOnOpen={true}
                indicatorColor={THEME_COLOR}
                containerStyle={{
                    position: 'absolute',
                    display: 'flex',
                    width: width,
                    backgroundColor: 'transparent',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: moderateScale(240),
                    bottom: -(height * 0.028)
                }}
                animated={true}
            >
                <View style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <View style={Styles.sheet}>
                        <View style={Styles.sheetOptions}>
                            <Text style={Styles.sheetOptionstText}>Delete Account</Text>
                        </View>
                        <Text style={Styles.sheetOptionstText1}>All photos & data will be permanently deleted.</Text>
                        <TouchableOpacity onPress={() => closeAction(false)} style={Styles.sheetOptions2}>
                            <Text style={Styles.sheetOptionstText2}>Consider hiding your account</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => closeAction(false)} style={Styles.sheetOptions}>
                            <Text style={Styles.sheetOptionstText2}>No, still want to delete my account.</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={Styles.sheetBottom}>
                    <TouchableOpacity style={Styles.sheetOptions1} onPress={() => closeAction(false)}>
                        <Text style={Styles.sheetOptionstText3}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </ActionSheet>
        </>
    );
}