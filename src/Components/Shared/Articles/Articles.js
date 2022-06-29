import React from 'react'
import { View, Text, Image, Dimensions,TouchableOpacity } from 'react-native'
import { BLACK, OFF_WHITE, WHITE } from '../../../Config/Config'
import Styles from './Style'
import Card from '../../Shared/Card/Card'
// import SkeletonPlaceholder from "react-native-skeleton-placeholder";


const { width, height } = Dimensions.get('screen')
export default function Articles(props) {

    const { navigation, articleTitle, createdAt, index, item, parentName, loading } = props
    return (
        <>
            {loading ?
                <View>
                {/* <SkeletonPlaceholder> */}
                    <View key={index} style={Styles.card}>
                        <View style={Styles.skelentonImage} />
                        <View style={Styles.skelentonOverLay}>
                            <View style={Styles.skeletonView} />
                            <View style={Styles.skeletonView} />
                            <View style={Styles.skeletonView1} />
                        </View>
                    </View>
                </View>
                :
                <TouchableOpacity key={index} style={Styles.card}>
                    <Image source={{ uri: item }}
                        style={Styles.mainImage}
                    />
                    <View style={Styles.overLay}>
                        <Text style={Styles.text}>{articleTitle[index]}</Text>
                        <Text style={Styles.text1}>{parentName[index]} | {createdAt[index]}</Text>
                        <Text style={Styles.text2}>{'Read More...'}</Text>
                    </View>
                </TouchableOpacity>
            }
        </>
    )
}
