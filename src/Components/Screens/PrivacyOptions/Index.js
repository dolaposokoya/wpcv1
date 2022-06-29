import React, { useState } from 'react'
import { View, Dimensions, ScrollView, StatusBar, Text, TouchableOpacity, Image, } from 'react-native'
import { INTEREST_COLOR, THEME_COLOR } from '../../../Config/Config'
import SharedHeader from '../../Shared/SharedHeader/SharedHeader'
import Styles from './Styles';
import SelectDropdown from 'react-native-select-dropdown'


const { width, height } = Dimensions.get('screen')
export default function Index(props) {
    const { navigation } = props;
    const [policy, setpolicy] = useState('Enabled');
    const options = [
        'Enabled',
        'Disabled',
    ]

    return (
        <>
            <StatusBar
                hidden={false}
                animated={true}
                barStyle='light-content'
                showHideTransition="slide"
                backgroundColor={INTEREST_COLOR}
            />
            <SharedHeader navigation={navigation} name={`Privacy Options`} />
            <ScrollView style={Styles.scrollView}
                contentContainerStyle={Styles.contentContainerStyle}
            >
                <View style={Styles.body}>
                    <View style={{
                        alignSelf: 'flex-start'
                    }}>
                        <Text style={Styles.rightClick}>Disable right click on all my photographs</Text>
                        <Text style={Styles.rightClickEnabled}>Currently : Right Click Is <Text style={{
                            color: THEME_COLOR
                        }}>{policy}</Text></Text>
                    </View>
                    <View style={Styles.contactView}>
                        <SelectDropdown
                            style={Styles.inputText}
                            data={options}
                            onSelect={(policy, index) => {
                                setpolicy(policy)
                            }}
                            buttonTextAfterSelection={(selectedItem, index) => {
                                return selectedItem
                            }}

                            rowTextForSelection={(item, index) => {
                                return item
                            }}
                            defaultButtonText={'Select Option'}
                            buttonTextStyle={Styles.buttonTextStyle}
                            buttonStyle={Styles.inputText}
                            dropdownIconPosition="right"
                            renderDropdownIcon={() => <TouchableOpacity><Image source={require('../../../Assets/Images/downarrow.png')} style={Styles.contactViewImage} /></TouchableOpacity>}
                        />
                    </View>

                </View>
            </ScrollView>
            <View style={Styles.updateBtnView}>
                <TouchableOpacity style={Styles.updateBtn}>
                    <Text style={Styles.updateBtnText}>Update Account</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}
