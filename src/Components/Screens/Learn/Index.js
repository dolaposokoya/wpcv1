import React from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
// import { LinearGradient } from 'expo-linear-gradient';
import { moderateScale } from 'react-native-size-matters';
import { LINEAR_BLUE, LINEAR_WHITE, THEME_COLOR_BACKGROUND, imageList, Masters } from '../../../Config/Config';
import ArrayList from '../../Shared/ArrayList/ArrayList';
import BottomTabs from '../../Shared/BottomTabs/BottomTabs';
import Header from '../../Shared/Header/Header'
import LearnSheet from '../../Sheets/LearnSheet/LearnSheet';
import Styles from './Style.js'


export default function Index(props) {
    const { navigation } = props

    const goToCourseDetails = (item) => {
        navigation.navigate('Course', {
            item: item
        })
    }
    return (
        <>
            <Header navigation={navigation} page="Learn">
                <Text style={Styles.headerText}>Learn</Text>
            </Header>
            <ScrollView
                style={{
                    flex: 1
                }}
                contentContainerStyle={Styles.contentContainerStyle}
            >
                <Text style={Styles.list}>Course List</Text>
                <ArrayList
                    data={imageList}
                    keyExtractor={(item) => item.id}
                    horizontal={true}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={Styles.gradientView} onPress={() => goToCourseDetails(item)}>
                            <Image source={item.image} style={Styles.gradientImage} />
                            <View
                                // colors={[LINEAR_WHITE, LINEAR_BLUE]}
                                // start={{ x: 0.8, y: 0.2 }}
                                // end={{ x: 0.1, y: 0.9 }}
                                style={Styles.gradient}>
                                <Text style={Styles.gradientText}>{item.name}</Text>
                            </View>
                            <View>
                                <Text style={Styles.gradientText}>{item.name}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
                <View style={Styles.infoView}>
                    <Text style={Styles.infoViewText}>Recently launched courses, <Text style={Styles.infoViewText2}>use code</Text> <Text style={Styles.infoViewText1}>WPCNEW50</Text> <Text style={Styles.infoViewText2}> and</Text> <Text style={Styles.infoViewText3}> Get 50% OFF</Text></Text>
                </View>
                <ArrayList
                    data={imageList}
                    keyExtractor={(item) => item.id}
                    horizontal={true}
                    renderItem={({ item }) => (
                        <View style={Styles.gradientView1}>
                            <Image source={item.image} style={Styles.gradientImage1} />
                            <View
                                // colors={[LINEAR_WHITE, THEME_COLOR_BACKGROUND]}
                                //start={{ x: 0.8, y: 0.2 }} end={{ x: 0.1, y: 0.9 }}
                                style={Styles.gradient1}>
                                <Text style={Styles.gradientText1}>{item.name} Photography</Text>
                                <Text style={Styles.gradientText2}>With Nobert VON Niman</Text>
                            </View>
                            <View
                                // colors={[LINEAR_WHITE, THEME_COLOR_BACKGROUND]}
                                //start={{ x: 0.8, y: 0.2 }} end={{ x: 0.1, y: 0.9 }}
                                style={Styles.gradient1}>
                                <Text style={Styles.gradientText1}>{item.name} Photography</Text>
                                <Text style={Styles.gradientText2}>With Nobert VON Niman</Text>
                            </View>
                        </View>
                    )}
                />
                <View>
                    <Text style={Styles.list}>Meet our amazing masters</Text>
                    <ArrayList
                        data={Masters}
                        keyExtractor={(item) => item.id}
                        horizontal={true}
                        renderItem={({ item }) => (
                            <View style={[Styles.masterView, { marginLeft: item.id === Masters.length ? 0 : moderateScale(15) }]}>
                                <Image source={item.image} style={Styles.masterImage} />
                                <View style={Styles.masterDetails}>
                                    <Text style={Styles.masterText}>{item.name}</Text>
                                    <Text style={Styles.masterText1}>{item.course}</Text>
                                    <Text style={Styles.masterText1}>{item.country}</Text>
                                </View>
                            </View>
                        )}
                    />
                </View>
                <View style={Styles.techContainer}>
                    <LearnSheet teachView={Styles.teachView} teach={Styles.teach} />
                </View>
            </ScrollView>
            <BottomTabs focused="learn" navigation={navigation} />
        </>
    )
}
