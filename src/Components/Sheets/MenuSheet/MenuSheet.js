import React, { useRef, useState, createRef } from "react";
import { View, Text, TouchableOpacity, Image, Dimensions, ScrollView } from "react-native";
import { THEME_COLOR } from "../../../Config/Config";
import Styles from './Styles'
import ActionSheet from "react-native-actions-sheet";

const actionSheetRef = createRef();
const { width, height } = Dimensions.get('screen')
export default function MenuSheet(props) {

    const { logOut, children } = props
    const [open, setopen] = useState(false)
    const refRBSheet = useRef();

    const openSheet = () => {
        // setopen(!open)
        // refRBSheet.current.open()
        actionSheetRef.current?.setModalVisible();
    }

    return (
        <View>
            <TouchableOpacity onPress={() => openSheet()} style={Styles.touch}>
                <Image source={require('../../../Assets/Images/more.png')}
                    style={Styles.editImage}
                />
            </TouchableOpacity>
            <ActionSheet ref={actionSheetRef}
                gestureEnabled={true}
                bounceOnOpen={true}
                indicatorColor={THEME_COLOR}
            >
                <ScrollView style={{
                    padding: 10,
                    // height: '100%',
                }}>
                    {/* {children} */}
                    <Text style={Styles.bottomtext}>WPC Score and World Wide Rank</Text>
                    <Text style={Styles.bottomtext}>WPC Points Status</Text>
                    <Text style={Styles.bottomtext}>Links to go to My Ideabook, My Courses, My Projects, My Events</Text>
                    <Text style={Styles.bottomtext}>Upgrade to Premium</Text>
                    <Text style={Styles.bottomtext}>Account Settings</Text>
                    <Text style={Styles.bottomtext}>Invite Friends</Text>
                    <Text style={Styles.bottomtext}>Support</Text>
                    <TouchableOpacity onPress={logOut} style={Styles.logout}>
                        <Text style={Styles.bottomtext}>Sign Out</Text>
                        <Image source={require('../../../Assets/Images/logout.png')} style={Styles.menus} />
                    </TouchableOpacity>
                </ScrollView>
            </ActionSheet>
        </View>
    );
}