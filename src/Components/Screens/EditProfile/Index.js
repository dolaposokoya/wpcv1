import React, { useState } from 'react'
import { View, Text, Dimensions, Image, ScrollView, PermissionsAndroid, Platform, Alert, StatusBar, TextInput } from 'react-native'
import { INTEREST_COLOR, THEME_COLOR_BACKGROUND } from '../../../Config/Config'
import SharedHeader from '../../Shared/SharedHeader/SharedHeader'
import Styles from './Styles'
import * as ImagePicker from 'expo-image-picker';


const { width, height } = Dimensions.get('screen')
export default function Index(props) {
    const { navigation, route } = props
    const { user } = route.params;
    const [coverPhoto, setcoverPhoto] = useState()
    const [profileImage, setprofileImage] = useState()
    const [aboutMe, setAboutMe] = useState(user.user_name)
    const [open, setopen] = useState(false)

    // console.log('Uswr', user)
    async function hasAndroidPermission() {
        const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

        const hasPermission = await PermissionsAndroid.check(permission);
        if (hasPermission) {
            return true;
        }

        const status = await PermissionsAndroid.request(permission);
        return status === 'granted';
    }

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        Alert.alert(result);

        if (!result.cancelled) {
            Alert.alert(result.uri)
        }
    };

    async function uploadImageFromLibrary() {
        if (Platform.OS === "android" && !(await hasAndroidPermission())) {
            return;
        }
        const options = {
            mediaType: 'photo'
        }
        await pickImage();
    };

    const askPermission = async (type) => {
        if (Platform.OS === 'android') {
            const result = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                {
                    title: 'Access to device photo',
                    message: 'World Photographers Club would like to gain access to your image(s)',
                },
            );
            if (result !== 'granted') {
                Alert.alert('Access to pictures was denied');
                return;
            } else {
                setopen(!open)
                await uploadImageFromLibrary(type);
            }
        } else {
            await uploadImageFromLibrary(type);
        }
    };

    const saveUser = () => {
        navigation.goBack()
    }
    return (
        <>
            <SharedHeader navigation={navigation} name="Edit Profile" open={true} editProfile={true} saveDetails={saveUser} />
            <ScrollView
                style={{
                    backgroundColor: THEME_COLOR_BACKGROUND,
                }}
                contentContainerStyle={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <View>
                    <View style={Styles.editProfile}>
                        <View style={{
                            width: '45%',
                        }}>
                            <Image source={{ uri: user.profile_image }} style={Styles.profileImage} />
                        </View>
                        <View style={{
                            width: '50%',
                        }}>
                            <Text style={Styles.coverText}>Change Cover Photo </Text>
                            <Text style={Styles.coverText1}>Browse Photo </Text>
                        </View>
                    </View>
                    <View style={Styles.editProfile}>
                        <View style={{
                            width: '45%',
                        }}>
                            <Image source={{ uri: user.profile_image }} style={Styles.profileImage} />
                        </View>
                        <View style={{
                            width: '50%',
                        }}>
                            <Text style={Styles.coverText}>Profile Photo </Text>
                            <Text style={Styles.coverText1}>Browse Photo </Text>
                        </View>
                    </View>
                    <View style={Styles.nameProfile}>
                        <Text style={Styles.coverName}>Name</Text>
                        <View style={Styles.lineColor} />
                        <Text style={Styles.coverName1}>{user?.user_name}</Text>
                        <View style={Styles.lineColor} />
                        <Text style={Styles.coverAbout}>About Me</Text>
                        <View style={Styles.lineColor} />
                        <View style={[Styles.aboutMeLIne]}>
                            {user && <>
                                {/* {user?.about && <> */}
                                <TextInput
                                    style={[Styles.aboutMeInput]}
                                    placeholder="About Me"
                                    multiline={true}
                                    value={aboutMe}
                                    numberOfLines={10}
                                    maxLength={4000}
                                    onChangeText={(text) => setAboutMe(text)}
                                />
                                {/* <Text style={[Styles.coverName1, { fontSize: 15 }]}>{user.user_name}</Text> */}
                            </>}
                        </View>

                    </View>
                </View>
            </ScrollView>
        </>
    )
}
