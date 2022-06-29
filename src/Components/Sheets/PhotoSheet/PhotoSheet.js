import React, { createRef } from "react";
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native'
import ActionSheet from "react-native-actions-sheet";
import { fonts, THEME_COLOR } from "../../../Config/Config";
import Style from './Style'

const { width, height } = Dimensions.get('screen')
const actionSheetRef = createRef();
export default function PhotoSheet(props) {
    const { profileContainer, backBtn, navigation, user_info, editUser } = props

    const navigateToPage = (screen) => {
        navigation.navigate(screen,{
            user_info: user_info
        })
    }
    return (
        <>
            <TouchableOpacity onPress={() => actionSheetRef.current?.setModalVisible()}>
                <Image source={require('../../../Assets/Images/more.png')} style={backBtn} />
            </TouchableOpacity>
            <>
                <ActionSheet ref={actionSheetRef}
                    // extraScroll={5}
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
                        alignItems: 'center',
                        bottom: -(height * 0.04)
                    }}
                    animated={true}
                >
                    <View style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <View style={Style.sheet}>
                            <TouchableOpacity style={Style.sheetOptions} onPress={() => navigateToPage('Award')}>
                                <Text style={Style.sheetOptionstText}>Award</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={Style.sheetOptions} onPress={() => navigateToPage('HireMe')}>
                                <Text style={Style.sheetOptionstText}>Hire Me</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={Style.sheetOptions} onPress={() => navigateToPage('OtherStats')}>
                                <Text style={Style.sheetOptionstText}>{user_info.username} Stats</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={Style.sheetOptions} onPress={() => navigateToPage('AccountSettings')}>
                                <Text style={Style.sheetOptionstText}>Share Profile</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[Style.sheetOptions, { borderBottomWidth: 0 }]} onPress={() => navigateToPage('RatePhotographer')}>
                                <Text style={Style.sheetOptionstText}>Add Rating</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={Style.sheetBottom}>
                        <TouchableOpacity style={Style.sheetOptions1} onPress={() => actionSheetRef.current?.setModalVisible(false)}>
                            <Text style={[Style.sheetOptionstText, { fontFamily: 'bold' }]}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </ActionSheet>
            </>
        </>
    )
}
