import React, { useState, useRef } from 'react'
import { View, Image, Dimensions, StatusBar, TouchableOpacity, Text } from 'react-native'
import { INTEREST_COLOR, LINEAR_WHITE, THEME_COLOR_BACKGROUND } from '../../../Config/Config'
import Styles from './Style'
import Animated from 'react-native-reanimated'
// import { LinearGradient } from 'expo-linear-gradient';



const { width, height } = Dimensions.get('screen');
const headerHeight = height * 0.12;
export default function Index(props) {
    const { navigation } = props

    const [imageHeight, setimageHeight] = useState(0);
    const [imageWidth, setimageWidth] = useState(0)

    // useEffect(() => {
    //     getImageSize()
    // }, [])
    const scrolling = useRef(new Animated.Value(0)).current;

    const opacity = scrolling.interpolate({
        inputRange: [0, headerHeight],
        outputRange: [1, 0],
        extrapolate: "clamp",
    });

    // const getImageSize = () => {
    //     Image.getSize(item, (width, height) => {
    //         setimageHeight(height)
    //         setimageWidth(width)
    //         console.log(width, height)
    //     });
    // }

    return (
        <>
            {/* {loading && <Loader />} */}
            <StatusBar
                hidden={true}
                backgroundColor={INTEREST_COLOR}
            />
            <Animated.View style={[Styles.animateHeader, { opacity }]}>
                <View style={Styles.animateView}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require('../../../Assets/Images/left.png')} style={Styles.backBtn} />
                    </TouchableOpacity>
                    <Text style={Styles.text}>{'Privacy Policy'}</Text>
                    <View />
                </View>
            </Animated.View>
            <Animated.ScrollView style={Styles.scrollView}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrolling } } }],
                    { useNativeDriver: true }
                )}
                scrollEventThrottle={16}
            >
                <Image
                    style={Styles.policyImage}
                    source={require('../../../Assets/Images/membership.png')}
                />
                <View style={Styles.policyContainer}>
                    <View style={Styles.policyView}>
                        <Text style={Styles.policyText}>Lorem ipsum is simply dummy text of the printing and typesetting industry. lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                    </View>
                    <View style={Styles.policyView}>
                        <Text style={Styles.policyText}>Lorem ipsum is simply dummy text of the printing and typesetting industry. lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                    </View>
                    <View style={Styles.policyView}>
                        <Text style={Styles.policyText}>Lorem ipsum is simply dummy text of the printing and typesetting industry. lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                    </View>
                    <View style={Styles.policyView}>
                        <Text style={Styles.policyText}>Lorem ipsum is simply dummy text of the printing and typesetting industry.</Text>
                    </View>
                </View>
            </Animated.ScrollView>
            <View style={Styles.gradient1} >
                <TouchableOpacity style={Styles.gradient1View}>
                    <Text style={Styles.gradient1Text}>Download PDF</Text>
                </TouchableOpacity>
            </View>
            <View
                // colors={["transparent", LINEAR_WHITE, THEME_COLOR_BACKGROUND]}
                // start={{ x: 0, y: 1 }}
                // end={{ x: 1, y: 0 }}
                style={Styles.gradient} />
        </>
    )
}
