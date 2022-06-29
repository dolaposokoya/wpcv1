import React from 'react'
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native'
import Styles from './Style';
// import SkeletonPlaceholder from "react-native-skeleton-placeholder";


const { width, height } = Dimensions.get('screen')
export default function CompetitionInfo(props) {

    const { loading, item, navigation, index, compName, compDate, compId, compType, compCode } = props


    const goToCompetitonDetails = (data, index) => {
        console.log('compCode', compCode[index])
        navigation.navigate('CompetitionDetails', {
            item: data,
            name: compName[index],
            date: compDate[index],
            id: compId[index],
            type: compType[index],
            compCode: compCode[index]
        })
    }
    return (
        <View style={{
            margin: 10,
        }}>
            {loading ?
                <>
                    <View>
                        {/* <SkeletonPlaceholder> */}
                        <View style={{ alignItems: "center", justifyContent: 'center' }}>
                            <View style={[Styles.textInputcontainer, { marginBottom: -5, }]}>
                                <View style={Styles.imageCompetition} />
                            </View>
                        </View>
                    </View>
                </>
                :
                <TouchableOpacity style={[Styles.textInputcontainer, { marginBottom: -5 }]} onPress={() => goToCompetitonDetails(item, index)} key={compId[index]}>
                    <Image source={{ uri: item }} style={Styles.imageCompetition} />
                    <View style={Styles.overlay}>
                        <View style={Styles.down}>
                            {compType[index] === true && <View style={Styles.pro}>
                                <Text style={Styles.proText}>{'Pro Competition'}</Text>
                            </View>}
                            <View style={Styles.down1}>
                                <Text style={Styles.down2Text}>{compName[index]}</Text>
                            </View>
                            <View style={Styles.down1}>
                                <Text style={Styles.proText}>Win 4TB Hard Drive</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            }
        </View>
    )
}
