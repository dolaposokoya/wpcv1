import React, { createRef, useState } from "react";
import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import { BLACK, fonts, GRAY, LIGHT_GRAY, THEME_COLOR, WHITE } from "../../../Config/Config";
import Styles from './Styles'
import ActionSheet from "react-native-actions-sheet";

const actionSheetRef = createRef();
const { width, height } = Dimensions.get('screen')
export default function ProfileSheet(props) {

    const [report, setreport] = useState(false)
    const { copyLInk } = props

    // const linkCopied = () => {
    //     copyLInk()
    //     Toast.show({
    //         title: 'Copy Link',
    //         status: "success",
    //         description: "Link copied.",
    //         duration: 4000,
    //     });
    // }

    const closeAction = (value) => {
        if (value === false) setreport(false)
        actionSheetRef.current?.setModalVisible(value)
    }

    return (
        <>
            <TouchableOpacity onPress={() => closeAction(true)}>
                <Image source={require('../../../Assets/Images/more.png')} style={Styles.more} />
            </TouchableOpacity>
            <ActionSheet ref={actionSheetRef} extraScroll={5}
                headerAlwaysVisible={true}
                openAnimationSpeed={50}
                CustomHeaderComponent
                bounceOnOpen={true}
                indicatorColor={THEME_COLOR}
                containerStyle={{
                    display: 'flex',
                    width: width,
                    backgroundColor: 'transparent',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                animated={true}
            >
                <View style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    {report ? <View style={Styles.sheet}>
                        <TouchableOpacity style={Styles.sheetOptions}>
                            <Text style={Styles.sheetOptionstText}>Nudity</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.sheetOptions}>
                            <Text style={Styles.sheetOptionstText}>Copyright</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.sheetOptions2}>
                            <Text style={Styles.sheetOptionstText}>Terms of service</Text>
                        </TouchableOpacity>
                    </View>
                        :
                        <View style={Styles.sheet}>
                            <TouchableOpacity style={Styles.sheetOptions}>
                                <Text style={Styles.sheetOptionstText}>Share</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={Styles.sheetOptions2} onPress={() => setreport(true)}>
                                <Text style={Styles.sheetOptionstText}>Report this photo</Text>
                            </TouchableOpacity>
                        </View>}
                </View>
                <View style={Styles.sheetBottom}>
                    <TouchableOpacity style={Styles.sheetOptions1} onPress={() => closeAction(false)}>
                        <Text style={[Styles.sheetOptionstText, { fontFamily: 'bold' }]}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </ActionSheet>
        </>
    );
}