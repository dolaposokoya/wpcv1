import React from 'react'
import { View, Dimensions, Image, TouchableOpacity } from 'react-native'
import { THEME_COLOR_BACKGROUND } from '../../../Config/Config'
import Styles from './Styles'
import ArrayList from '../../Shared/ArrayList/ArrayList'
import { moderateScale } from 'react-native-size-matters'

const { width, height } = Dimensions.get('screen')
export default function Index(props) {
    const { navigation, photos, saveUserImage } = props

    return (
        <View style={{
            height,
            width,
            backgroundColor: THEME_COLOR_BACKGROUND
        }}>
            <ArrayList
                bounces={false}
                data={photos}
                numColumns={3}
                keyExtractor={(item, index) => index}
                renderItem={({ item, index }) => (
                    <TouchableOpacity style={{
                        width: '33%',
                        height: moderateScale(150),
                    }}
                        onPress={() => saveUserImage(item.node.image.uri)}
                    >
                        <Image
                            key={index}
                            style={{
                                width: '100%',
                                height: moderateScale(150),
                            }}
                            source={{ uri: item.node.image.uri }}
                        />
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}
