import React, { useEffect } from 'react'
import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native'
import { BLACK, OFF_WHITE, THEME_COLOR, WHITE } from '../../../Config/Config'
import Styles from './Style'
// import { LinearGradient } from 'expo-linear-gradient';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";


const { width, height } = Dimensions.get('screen')
export default function Courses(props) {

    const { navigation, courseName, item, index, loading } = props
    return (
        <>
            {loading ?
                <>
                    {(index <= 3 &&
                        <SkeletonPlaceholder>
                            <View style={{
                                height: height * 0.23, width: width * 0.47,
                                margin: 3
                            }} key={index}>
                                <View style={Styles.skeletonView} key={index} />
                            </View>
                        </SkeletonPlaceholder>
                    )}
                </>
                : <>
                    {(index <= 3 &&
                        <View style={{
                            height: height * 0.23, width: width * 0.49,
                            margin: 3
                        }} key={index}>
                            <View style={Styles.flex1}>
                                <View style={Styles.touchable}>
                                    <Image source={{ uri: item }}
                                        style={Styles.cardImage}
                                    />
                                    <View style={Styles.overLay}
                                        // colors={['#00000000', '#00000000', BLACK]}
                                    >
                                        <Text style={Styles.text}>{courseName[index]}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    )}
                </>
            }
        </>
    )
}
