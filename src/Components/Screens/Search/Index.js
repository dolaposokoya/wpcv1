import React, { useState } from 'react'
import { View, Dimensions, Image, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native'
import { SEARCH_COLOR } from '../../../Config/Config'
import SharedHeader from '../../Shared/SharedHeader/SharedHeader'
import Styles from './Styles'

const { width, height } = Dimensions.get('screen')
export default function Index(props) {
    const { navigation } = props
    const [search, setsearch] = useState('')


    return (
        <>
            <SharedHeader navigation={navigation} name="Search" />
            <ScrollView>
                <View style={Styles.body}>
                    <View style={Styles.uploadView}>
                        <TextInput
                            placeholder="Search"
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
                    </View>
                </View>
            </ScrollView>
        </>
    )
}
