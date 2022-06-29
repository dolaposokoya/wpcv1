import React, { createRef } from "react";
import { View, Text, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
import ActionSheet from "react-native-actions-sheet";
import { WHITE, CARD_COLOR, UPGRADE_GOLD, UPGRADE_GOLD1 } from "../../../Config/Config";
import Style from './Style';
// import { LinearGradient } from 'expo-linear-gradient';
import ArrayList from "../../Shared/ArrayList/ArrayList";

const { width, height } = Dimensions.get('screen')
const actionSheetRef = createRef();
export default function GoldSheet(props) {
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
        { id: "7", name: 'Unlimited Entries To Free Competitions' },
        { id: "8", name: 'Advanced Stats' },
        { id: "9", name: 'Apply In Unlimited Projects' },
        { id: "10", name: 'Unlimited Online Courses Free' },
        { id: "11", name: 'Invitation To Special Events' },
        { id: "12", name: '1 Free Portfolio Review By WPC Expert' },
        { id: "13", name: 'Add Your Own Google Analytics Code' },
        { id: "14", name: 'Discount With WPC Partners' }
    ]
    return (
        <>
            <View
                style={card}
                // colors={[UPGRADE_GOLD, UPGRADE_GOLD1]}
                // start={{ x: 1, y: 0 }}
                // end={{ x: 1, y: 0.5 }}
            >
                <TouchableOpacity onPress={() => actionSheetRef.current?.setModalVisible()}>
                    <Text style={text2}>Gold</Text>
                    <Text style={text3}>Rs.9,999/$149.99</Text>
                    <Text style={text4}>Everything Unlimited</Text>
                </TouchableOpacity>
            </View>
            <>
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
                            <Text style={Style.sheetOptionsHeaderText}>Gold</Text>
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
        </>
    )
}
