import React, { useState, useEffect } from 'react'
import { View, Text, Dimensions, Image, TouchableOpacity, ScrollView, PermissionsAndroid, Platform, Alert, StatusBar } from 'react-native'
import { INTEREST_COLOR, OTHER_GRAY, THEME_COLOR_BACKGROUND, WHITE } from '../../../Config/Config'
import UploadHeader from '../../Shared/SharedHeader/UploadHeader'
import Styles from './Styles'
import { Camera, CameraType } from 'expo-camera';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import ShowPhotos from '../Upload/ShowPhotos'
import uuid from 'react-native-uuid';
import AppStatusBar from '../../Shared/StatusBar/AppStatusBar'


const { width, height } = Dimensions.get('screen')
export default function Index(props) {
    const { navigation, route } = props
    const [photos, setphotos] = useState([])
    const [active, setactive] = useState('library')
    const [coverPhoto, setcoverPhoto] = useState()
    const [profileImage, setprofileImage] = useState([])
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

    async function uploadImageFromLibrary() {
        // if (Platform.OS === "android" && !(await hasAndroidPermission())) {
        //     return;
        // }
        // CameraRoll.getPhotos({ first: 5000 })
        //     .then(res => {
        //         setphotos(res.edges)
        //     }).catch(error => {
        //         Alert.alert(error.message)
        //     })
    };

    const askPermission = async (type) => {
        if (Platform.OS === 'android') {
            const result = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                {
                    title: 'Access to device photo',
                    message: 'World Photographers Club would like to gain access to your image',
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

    const uploadImageFromCamera = (type) => {
        try {
            const options = {
                mediaType: 'photo'
            }
            launchCamera(options, (response) => {
                if (response) {
                    if (response.didCancel) {
                        Alert.alert('You did not select any image')
                    }
                    else if (response.errorMessage) {
                        Alert.alert(response.errorMessage)
                    }
                    else {
                        if (type === 'cover_photo') {
                            Alert.alert(response.assets[0].uri)
                            setcoverPhoto(response.assets[0].uri)
                        }
                        else {
                            Alert.alert(response.assets[0].uri)
                            setprofileImage(response.assets[0].uri)
                        }
                    }
                }
                // console.log('Camera response', response)
            });
        } catch (error) {
            Alert.alert(error.message)
        }
    }

    const saveUserImage = (response) => {
        const profileImage = {
            id: uuid.v4(),
            uri: response.uri,
            width: response.width,
            height: response.height,
        }
        navigation.navigate('UploadPhotos', {
            profileImage: profileImage
        })
    }

    const cancelImageUpload = () => {
        navigation.goBack()
    }

    const selectOption = (type) => {
        if (type === 'library') {
            setactive(type)
            askPermission('cover_photo')
            uploadImageFromLibrary()
        }
        else {
            setactive(type)
            uploadImageFromCamera('profil_photo')
            uploadImageFromLibrary()
        }

    }

    useEffect(() => {
        uploadImageFromLibrary()
        return () => uploadImageFromLibrary()
    }, [active])
    return (
        <>
          <AppStatusBar/>
            <UploadHeader navigation={navigation} name="Upload" editProfile={true} saveDetails={cancelImageUpload} option={'Cancel'} />
            <View style={{
                width,
                height: height,
                backgroundColor: THEME_COLOR_BACKGROUND
            }}>
                {active === 'library' && (photos.length > 0 && <ShowPhotos photos={photos} saveUserImage={saveUserImage} />)}

            </View>
            <View style={Styles.bottomView}>
                <TouchableOpacity onPress={() => selectOption('library')} style={Styles.libraryOptions}>
                    <Text style={[Styles.options, { color: active === 'library' ? WHITE : OTHER_GRAY }]}>Library</Text>
                    <View style={active === 'library' ? Styles.active : Styles.inActive} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => selectOption('camera')} style={Styles.libraryOptions}>
                    <Text style={[Styles.options, { color: active === 'camera' ? WHITE : OTHER_GRAY }]}>Camera</Text>
                    <View style={active === 'camera' ? Styles.active : Styles.inActive} />
                </TouchableOpacity>
            </View>
        </>
    )
}
