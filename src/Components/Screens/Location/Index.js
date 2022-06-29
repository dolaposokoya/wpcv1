import React, { useState } from 'react'
import { View, Dimensions, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import { SEARCH_COLOR, THEME_COLOR_BACKGROUND } from '../../../Config/Config'
import Styles from './Styles';
import UploadHeader from '../../Shared/SharedHeader/UploadHeader'

const { width, height } = Dimensions.get('screen')
export default function Index(props) {
    const { navigation } = props
    const [search, setsearch] = useState('')


    return (
        <>
            <UploadHeader background={THEME_COLOR_BACKGROUND} navigation={navigation} name="Location" option={'Cancel'} saveDetails={() => navigation.goBack()} />
            <ScrollView>
                <View style={Styles.body}>
                    <View style={Styles.uploadView}>
                        <TextInput
                            placeholder="Location"
                            value={search}
                            onChangeText={text => setsearch(text)}
                            style={Styles.formInput}
                            placeholderTextColor={SEARCH_COLOR}
                        />
                        <TouchableOpacity style={Styles.passwordView} onPress={() => setsecure(!secure)}>
                            <Image source={require('../../../Assets/Images/search.png')}
                                style={Styles.passwordHide}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.passwordView1} onPress={() => setsecure(!secure)}>
                            <Image source={require('../../../Assets/Images/crosswhiteblue.png')}
                                style={Styles.passwordHide}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </>
    )
}
