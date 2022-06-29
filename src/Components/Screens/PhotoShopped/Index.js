import React from 'react'
import { Text, ScrollView } from 'react-native'
import Header from '../../Shared/Header/Header'

export default function Index(props) {
    const { item, navigation } = props
    return (
        <ScrollView>
            <Header navigation={navigation} />
            <Text>Photoshopped</Text>
        </ScrollView>
    )
}
