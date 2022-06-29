import React, { useEffect } from 'react'
import { View, Text, Image, Dimensions } from 'react-native'
import Styles from './Style'
// import { LinearGradient } from 'expo-linear-gradient';
// import SkeletonPlaceholder from "react-native-skeleton-placeholder";



const { width, height } = Dimensions.get('screen')

export default function CompetitonShowCase(props) {
    const { item, navigation, index, compName, compDate, compId, compType, loading } = props

    return (
        <>
            {loading ?
                <>
                    {index < 5 &&
                        <View>
                        {/* <SkeletonPlaceholder> */}
                            <View style={Styles.container} key={index} />
                        </View>
                    }
                </>
                : <>
                    {index < 5 && <View style={Styles.container} key={index}>
                        <View style={Styles.flex1}>
                            <Image source={{ uri: item }}
                                style={Styles.cardImage}
                            />
                            <View
                                // colors={["#00000000", '#00000001', '#000000']}
                                // start={{ x: 0, y: 0.3 }}
                                // end={{ x: 0, y: 1 }}
                                style={Styles.overLay} >
                                {compType[index] === true &&
                                    <Text style={Styles.competition}>{'Pro Competition'}</Text>}
                                <Text style={Styles.text}>{compName[index]}</Text>
                            </View>
                        </View>
                    </View>}
                </>
            }
        </>
    )
}
