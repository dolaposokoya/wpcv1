import React from 'react'
import { View, Text, ScrollView, Image, Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import BottomTabs from '../../Shared/BottomTabs/BottomTabs';
import Header from '../../Shared/Header/Header'
import Styles from './Style.js'

const { width, height } = Dimensions.get('screen');
export default function Index(props) {
    const { item, navigation } = props
    return (
        <>
            <Header navigation={navigation}>
                <Text style={Styles.headerText}>Projects</Text>
            </Header>
            <ScrollView
                // styles={Styles.scrollView}
                contentContainerStyle={Styles.contentContainerStyle}
            >
                <View style={Styles.body}>
                    <View style={Styles.gradientView}>
                        <Image source={require('../../../Assets/Images/appintro.png')} style={Styles.gradientImage} />
                    </View>
                    <View style={{
                        width,
                    }}>
                        <Text style={Styles.list}>Amazing Light Painting Examples</Text>
                        <Text style={Styles.list1}>Capture 10 amazing examples of light painting in a series of photos to inspire people to use long exposures...</Text>
                    </View>
                    <View style={Styles.flexRow}>
                        <Text style={Styles.list2}>#Technique</Text>
                        <Text style={Styles.list2}>#Technical</Text>
                        <Text style={Styles.list2}>#Light Painting</Text>
                    </View>
                    <View style={Styles.flexRow}>
                        <Text style={Styles.deadLine}>Deadline - </Text>
                        <Text style={Styles.deadLineDate}> 24th September, 2021</Text>
                    </View>
                    <View style={Styles.flexRow}>
                        <Text style={Styles.premium}>Premium User Gets - </Text>
                        <Text style={Styles.premiumPrice}> Rs1000 or $15</Text>
                    </View>
                    <View style={Styles.flexRow1}>
                        <TouchableOpacity style={Styles.infoView}>
                            <Text style={Styles.infoViewText}>Information</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.infoView1}>
                            <Text style={Styles.infoViewText}>Apply Now</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={Styles.flexRow}>
                        <Text style={Styles.checkOut}>Checkout Previous Project Submissions</Text>
                    </View>
                    <View style={Styles.gradientView}>
                        <Image source={require('../../../Assets/Images/appintro.png')} style={Styles.gradientImage} />
                    </View>
                </View>
            </ScrollView>
            <BottomTabs navigation={navigation} focused="project" />
        </>
    )
}
