import React, { useState } from 'react'
import { View, TouchableOpacity, Image, Pressable } from 'react-native'
import Styles from './Styles'
import AddPop from './AddPop'

export default function BottomTabs(props) {

    const { focused, navigation } = props

    const [focus, setfocus] = useState(focused);
    const [state, setstate] = useState(false)
    return (
        <>
            {state && <AddPop state={state} />}
            <View style={Styles.tabView}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Image
                        source={
                            focused === 'home'
                                ? require("../../../Assets/Images/homeactive.png")
                                : require("../../../Assets/Images/home.png")
                        }
                        style={Styles.tabImage}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('CompetitionStack')}>
                    <Image
                        source={
                            focused === 'competition'
                                ? require("../../../Assets/Images/trophyactive.png")
                                : require("../../../Assets/Images/trophy.png")
                        }
                        style={Styles.tabImage}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <View style={Styles.fakeImage} />
                <Pressable style={Styles.addView} onPress={() => setstate(!state)}>
                    {/* <TouchableOpacity onPress={() => navigation.navigate('Home')}> */}
                    <Image
                        source={
                            state
                                ? require("../../../Assets/Images/cross.png")
                                : require("../../../Assets/Images/open.png")
                        }
                        style={Styles.addImage}
                        resizeMode="contain"
                    />
                </Pressable>
                {/* <TouchableOpacity onPress={() => navigation.navigate('LearnStack')}>
                    <Image
                        source={
                            focused === 'learn'
                                ? require("../../../Assets/Images/letteractive.png")
                                : require("../../../Assets/Images/letter.png")
                            // ? require("../../../Assets/Images/briefcaseactive.png")
                            // : require("../../../Assets/Images/briefcase.png")
                        }
                        style={Styles.tabImage}
                        resizeMode="contain"
                    />
                </TouchableOpacity> */}
                <TouchableOpacity onPress={() => navigation.navigate('Articles')}>
                    <Image
                        source={
                            focused === 'article'
                                ? require("../../../Assets/Images/letteractive.png")
                                : require("../../../Assets/Images/letter.png")
                            // ? require("../../../Assets/Images/briefcaseactive.png")
                            // : require("../../../Assets/Images/briefcase.png")
                        }
                        style={Styles.tabImage}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('ProfileStack')}>
                    {/* <TouchableOpacity onPress={() => navigation.navigate('Projects')}> */}
                    <Image
                        source={
                            focused === 'project'
                                ? require("../../../Assets/Images/user.png")
                                : require("../../../Assets/Images/useractive.png")
                            // ? require("../../../Assets/Images/imageactive.png")
                            // : require("../../../Assets/Images/image.png")
                        }
                        style={Styles.tabImage}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>
        </>
    )
}
