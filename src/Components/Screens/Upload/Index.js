import React, { useState } from 'react'
import { View, Text, Dimensions, Image, TouchableOpacity, StatusBar } from 'react-native'
import { INTEREST_COLOR } from '../../../Config/Config'
import SharedHeader from '../../Shared/SharedHeader/SharedHeader'
import Styles from './Styles'

const { width, height } = Dimensions.get('screen')
export default function Index(props) {
    const { navigation, route } = props
    const [photos, setphotos] = useState([])
    const [open, setopen] = useState(false)
    const { profileImage } = route.params;

    const uploadProfilePhoto = async () => {
        navigation.navigate('ProfilePhoto', {
            page: 'Profile'
        })
    };


    const goToNextPage = () => {
        // setopen(!open)
        navigation.navigate('Upgrade')
    }
    return (
        <>
            <StatusBar
                barStyle={'light-content'}
                backgroundColor={INTEREST_COLOR}
            />
            <SharedHeader navigation={navigation} name="Old Profile Photo" open={true} />
            <>
                <View>
                    <View style={Styles.body}>
                        <View style={Styles.uploadView}>
                            <Image source={require('../../../Assets/Images/profile_photo.png')}
                                style={Styles.image}
                            />
                        </View>
                        <TouchableOpacity style={Styles.textView} onPress={() => uploadProfilePhoto()}>
                            <Text style={Styles.text}>Upload Profile Photo</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={Styles.absoluteView}>
                    <TouchableOpacity onPress={goToNextPage} style={Styles.nextBtn}>
                        <Text style={Styles.next}>Next</Text>
                    </TouchableOpacity>
                </View>
            </>
        </>
    )
}
