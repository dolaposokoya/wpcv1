import React, { createRef } from "react";
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native'
import ActionSheet from "react-native-actions-sheet";
import { fonts, THEME_COLOR } from "../../../Config/Config";
import Style from './Style'

const { width, height } = Dimensions.get('screen')
const actionSheetRef = createRef();
export default function CustomSheet(props) {
    const { profileContainer, backBtn, navigation, editUser } = props

    const navigateScreen = (screen) => {
        actionSheetRef.current?.setModalVisible();
        navigation.navigate(screen)
    }
    return (
        <>
            <TouchableOpacity onPress={() => actionSheetRef.current?.setModalVisible()}>
                <Image source={require('../../../Assets/Images/more.png')} style={backBtn} />
            </TouchableOpacity>
            <>
                <ActionSheet ref={actionSheetRef} extraScroll={5}
                    headerAlwaysVisible={true}
                    openAnimationSpeed={50}
                    CustomHeaderComponent
                    // bounceOnOpen={true}
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
                        <View style={Style.sheet}>
                            <TouchableOpacity style={Style.sheetOptions} onPress={() => editUser()}>
                                <Text style={Style.sheetOptionstText}>Edit Profile</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={Style.sheetOptions} onPress={() => navigateScreen('Interest')}>
                                <Text style={Style.sheetOptionstText}>Your Photograpgy Interests</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={Style.sheetOptions} onPress={() => navigateScreen('AccountSettings')}>
                                <Text style={Style.sheetOptionstText}>Account Settings</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={Style.sheetOptions} onPress={() => navigateScreen('My Stats')}>
                                <Text style={Style.sheetOptionstText}>My Stats</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={Style.sheetOptions}>
                                <Text style={Style.sheetOptionstText}>Invite Friends</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={Style.sheetOptions}>
                                <Text style={Style.sheetOptionstText}>Liked</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[Style.sheetOptions, { borderBottomWidth: 0 }]}>
                                <Text style={Style.sheetOptionstText}>Share Profile</Text>
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
