import React, { useEffect, useState } from 'react'
import { View, Text, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import Styles from './Style'
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import AsyncStorage from '@react-native-async-storage/async-storage';


const { width, height } = Dimensions.get('screen')
export default function ShowCase(props) {

    const { navigation, userId, loggedId, item, index, photoNum, image2, userName, profileImage, following, loading } = props

    const goToPhotoGraphersPage = async (data, index) => {
        await AsyncStorage.setItem('@userId', userId[index])
        navigation.setParams({
            userId: userId[index],
        });
        console.log('Indexdv  dvd', userId[index])
        navigation.navigate('PhotographerDetails', {
            item: data,
            userId: userId[index],
            loggedId,
            index,
            photoNum,
            image2,
            userName,
            profileImage,
            following
        })
    }

    return (
        <>
            {loading ? <ScrollView>
                <SkeletonPlaceholder>
                    <View key={index} style={Styles.container}>
                        <View style={Styles.skeletonFlexRow}>
                            <View style={Styles.skeletonImage} />
                            <View>
                                <View style={Styles.skeletonText} />
                                <View style={Styles.skeletonTextProfile} />
                            </View>
                        </View>
                        <View style={Styles.skeletonFlex}>
                            <View style={Styles.skeletonClearImage} />
                            <View style={Styles.blurImageContainer}>
                                <View style={Styles.skeletonBlurImage} />
                            </View>
                        </View>
                    </View>
                </SkeletonPlaceholder>
            </ScrollView>
                :
                <View key={index} style={Styles.container}>
                    <View style={Styles.flexRow}>
                        <Image source={{ uri: profileImage[index] }}
                            style={Styles.circleImage}
                        />
                        <TouchableOpacity onPress={() => goToPhotoGraphersPage(item, index)}>
                            <Text style={Styles.professionalText}>{userName[index]}</Text>
                            <Text style={Styles.text}>Professional Photographer</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={Styles.flexImage}>
                        <Image source={{ uri: item }}
                            style={Styles.clearImage}
                        />
                        <View style={Styles.blurImageContainer}>
                            <Image source={{ uri: image2[index] }}
                                style={Styles.blurImage}
                            />
                            <View style={Styles.overLay}>
                                <Text style={Styles.overLayText}>+{photoNum[index]} More</Text>
                            </View>
                        </View>
                    </View>
                </View>}
        </>
    )
}
