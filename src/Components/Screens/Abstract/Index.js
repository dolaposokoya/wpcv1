import React, { useState, useEffect, useRef } from 'react'
import { View, Image, Dimensions, StatusBar, TouchableOpacity, Text } from 'react-native'
import { INTEREST_COLOR } from '../../../Config/Config'
import Loader from '../../Shared/Loader/Loader'
import Styles from './Style'
import Animated from 'react-native-reanimated'
import { moderateScale } from 'react-native-size-matters'
import DateSheet from '../../Sheets/DateSheet/DateSheet'



const { width, height } = Dimensions.get('screen');
const headerHeight = height * 0.12;
export default function Index(props) {
    const { navigation } = props

    const [imageHeight, setimageHeight] = useState(0);
    const [imageWidth, setimageWidth] = useState(0)
    const [loading, setloading] = useState(false)

    useEffect(() => {
        setloading(true);
        setTimeout(() => {
            setloading(false)
        }, 3000);
    }, [])
    const scrolling = useRef(new Animated.Value(0)).current;

    const opacity = scrolling.interpolate({
        inputRange: [0, headerHeight],
        outputRange: [1, 0],
        extrapolate: "clamp",
    });

    const abDate = [
        {
            id: '1',
            text: "Start Date",
            date: '10, June 2021',
        },
        {
            id: '2',
            text: "Submission Close",
            date: '10, August 2021',
        },
        {
            id: '3',
            text: "Judging Start",
            date: '16, August 2021',
        },
        {
            id: '4',
            text: "Contest Results",
            date: '25, August 2021',
        },
    ];

    return (
        <>
            {loading && <Loader />}
            <StatusBar
                hidden={true}
                backgroundColor={INTEREST_COLOR}
            />
            <Animated.View style={[Styles.animateHeader, { opacity }]}>
                <View style={Styles.animateView}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require('../../../Assets/Images/left.png')} style={Styles.backBtn} />
                    </TouchableOpacity>
                    <Text style={Styles.text}>{'Abstract'}</Text>
                    <View style={Styles.calenderImage}>
                        <DateSheet date={abDate} />
                    </View>
                </View>
            </Animated.View>
            <Animated.ScrollView style={Styles.scrollView}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrolling } } }],
                    { useNativeDriver: true }
                )}
                scrollEventThrottle={16}
            >
                <View>
                    <Image
                        style={Styles.firstImage}
                        source={require('../../../Assets/Images/abstract.png')}
                    />
                    <View style={Styles.absoluteView}>
                        <Text style={Styles.abText}>Take photos from a different perspective and submit to win amazing prizes</Text>
                        <Image
                            style={Styles.award}
                            source={require('../../../Assets/Images/award.png')}
                        />
                        <Text style={Styles.congrat}>Congratulations to all the winners!!!</Text>
                        <Text style={Styles.abText}>Prizes Sponsored By World Photographers Club</Text>
                        <View style={Styles.prizeData}>
                            <View style={Styles.prizeInfo1}>
                                <Image
                                    style={Styles.prizeImage}
                                    source={require('../../../Assets/Images/trophyplain.png')}
                                />
                            </View>
                            <View style={Styles.prizeInfo}>
                                <Text style={Styles.prizeInfoText}>1St Prize</Text>
                                <Text style={Styles.prizeInfoText1}>Fundamentals Of Photography Course + Winning Certificate + 5000 WPC Points</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <>
                    <View>
                        <Image
                            style={Styles.prizeImage1}
                            source={require('../../../Assets/Images/first.png')}
                        />
                        <View style={Styles.absoluteView1}>
                            <View style={Styles.innerView}>
                                <Text style={Styles.innerViewText}>HAMID MOHAMMAD HOSSEIN ZA</Text>
                            </View>
                        </View>
                    </View>
                    <View style={Styles.innerContainer}>
                        <View style={Styles.prizeData}>
                            <View style={Styles.prizeInfo1}>
                                <Image
                                    style={Styles.prizeImage}
                                    source={require('../../../Assets/Images/trophyplain.png')}
                                />
                            </View>
                            <View style={Styles.prizeInfo}>
                                <Text style={Styles.prizeInfoText}>2nd Prize</Text>
                                <Text style={[Styles.prizeInfoText1, { paddingBottom: moderateScale(9) }]}>Fundamentals Of Photography Course + Winning Certificate + 2500 WPC Points</Text>
                            </View>
                        </View>
                        <Image
                            style={Styles.prizeImage1}
                            source={require('../../../Assets/Images/second.png')}
                        />
                        <View style={Styles.absoluteView1}>
                            <View style={Styles.innerView}>
                                <Text style={Styles.innerViewText}>MOHAMMAD DADSETAN</Text>
                            </View>
                        </View>
                    </View>
                    <View style={[Styles.innerContainer, { marginBottom: moderateScale(20) }]}>
                        <View style={Styles.prizeData}>
                            <View style={Styles.prizeInfo1}>
                                <Image
                                    style={Styles.prizeImage}
                                    source={require('../../../Assets/Images/trophyplain.png')}
                                />
                            </View>
                            <View style={Styles.prizeInfo}>
                                <Text style={Styles.prizeInfoText}>3rd Prize</Text>
                                <Text style={[Styles.prizeInfoText1, { paddingBottom: moderateScale(9) }]}>Fundamentals Of Photography Course + Winning Certificate + 1000 WPC Points</Text>
                            </View>
                        </View>
                        <Image
                            style={Styles.prizeImage1}
                            source={require('../../../Assets/Images/third.png')}
                        />
                        <View style={Styles.absoluteView1}>
                            <View style={Styles.innerView}>
                                <Text style={Styles.innerViewText}>DEBARSHI MUKHERJEE</Text>
                            </View>
                        </View>
                    </View>
                </>
            </Animated.ScrollView>
        </>
    )
}
