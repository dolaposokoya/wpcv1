import React, { createRef } from "react";
import { View, Text, Image, TouchableOpacity, Dimensions,ScrollView } from 'react-native'
import ActionSheet from "react-native-actions-sheet";
import { BLACK, UPGRADE_BLACK1, WHITE, CARD_COLOR, } from "../../../Config/Config";
import Style from './Style';
// import { LinearGradient } from 'expo-linear-gradient';
import ArrayList from "../../Shared/ArrayList/ArrayList";

const { width, height } = Dimensions.get('screen')
const actionSheetRef = createRef();
export default function BlackSheet(props) {
    const { card, text2, text3, text4, navigation, } = props

    const navigateToPage = (screen) => {
        navigation.navigate(screen)
    }
    const options = [
        { id: "1", name: 'Unlimited Photos' },
        { id: "2", name: 'Unlimited Blogs' },
        { id: "3", name: 'Unlimited Videos' },
        { id: "4", name: 'Unlimited Groups' },
        { id: "5", name: 'Unlimited Portfolios' },
        { id: "6", name: 'Unlimited Clubs' },
        { id: "7", name: '100 Enteries to Paid & Unlimited Entries To Free Competitions' },
        { id: "8", name: 'Advanced Stats' },
        { id: "9", name: 'Apply In Unlimited Projects' },
        { id: "10", name: '7 Online Courses Free' },
        { id: "11", name: 'Invitation To Special Events' },
    ]
    return (
        <>
            <View
                style={card}
                // colors={[BLACK, UPGRADE_BLACK1]}
                // start={{ x: 1, y: 0 }}
                // end={{ x: 1, y: 0.5 }}
            >
                <TouchableOpacity onPress={() => actionSheetRef.current?.setModalVisible()}>
                    <Text style={text2}>Black</Text>
                    <Text style={text3}>Rs.1,999/$29.99</Text>
                    <Text style={text4}>Unlimited Competitions + 7 Courses</Text>
                </TouchableOpacity>
            </View>
            <ActionSheet ref={actionSheetRef} extraScroll={5}
                headerAlwaysVisible={true}
                openAnimationSpeed={50}
                bounceOnOpen={true}
                indicatorColor={WHITE}
                containerStyle={{
                    display: 'flex',
                    width: width,
                    bottom: -(height * 0.045),
                    backgroundColor: 'transparent',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                animated={true}
            >
                <ScrollView contentContainerStyle={Style.sheet}>
                    <View style={Style.sheetOptions}>
                        <Text style={Style.sheetOptionsHeaderText}>Black</Text>
                        <Text style={Style.sheetOptionstText}>{'Rs1,999/$29.99 Or >250,000 WPC Points'}</Text>
                    </View>
                    <View style={{
                        alignItems: 'center'
                    }}>
                        <View style={Style.sheetOptions1}>
                            <Text style={Style.sheetOptionstText1}>2X Points</Text>
                        </View>
                    </View>
                    <ArrayList
                        data={options}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <View style={{
                                alignItems: 'center'
                            }}>
                                <View style={Style.optionsView}>
                                    <Image source={require('../../../Assets/Images/mark.png')} style={Style.optionsViewImage} />
                                    <Text style={Style.optionsViewText} >{item.name}</Text>
                                </View>
                            </View>
                        )}
                    />
                    <View style={{
                        alignItems: 'center'
                    }}>
                        <TouchableOpacity style={Style.upgradeBtn}>
                            <View
                                style={Style.linearBtn}
                                // colors={[WHITE, CARD_COLOR]}
                                // start={{ x: 1, y: 0 }}
                                // end={{ x: 1, y: 0.5 }}
                            >
                                <Text style={Style.sheetOptionstText2}>Upgrade Now</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </ActionSheet>
        </>
    )
}
