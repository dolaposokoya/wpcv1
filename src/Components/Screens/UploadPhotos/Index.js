import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState, useEffect } from 'react'
import { View, Text, Dimensions, Image, TextInput, ScrollView, StatusBar, Pressable, Alert } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { moderateScale } from 'react-native-size-matters'
import { INTEREST_COLOR, Discover, WHITE } from '../../../Config/Config'
import ArrayList from '../../Shared/ArrayList/ArrayList'
import UploadHeader from '../../Shared/SharedHeader/UploadHeader'
import Styles from './Styles';

const imageObject = [];
const { width, height } = Dimensions.get('screen')
export default function Index(props) {
    const { navigation, route } = props
    const { profileImage } = route.params;
    const [images, setimages] = useState([])
    const [something, setSomething] = useState('')
    const [location, setlocation] = useState('')

    useEffect(() => {
        saveSelectedImage();
    }, [])

    const saveSelectedImage = async () => {
        try {
            const value = await AsyncStorage.getItem('@selectedImages');
            if (value !== null) {
                let updateImageList = JSON.parse(value)
                updateImageList.push(profileImage);
                updateImageList = JSON.stringify(updateImageList)
                await AsyncStorage.setItem('@selectedImages', updateImageList)
                await getSelectedImages();
            }
            else {
                let jsonValue = imageObject.push(profileImage)
                jsonValue = JSON.stringify(imageObject)
                await AsyncStorage.setItem('@selectedImages', jsonValue)
                await getSelectedImages()
            }
        } catch (error) {
            console.error(error.message)
        }
    }
    const getSelectedImages = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@selectedImages');
            if (jsonValue !== null) {
                setimages(JSON.parse(jsonValue))
            }
            else {
                setimages([])
            }
        } catch (error) {
            console.error(error.message)
        }
    }

    const removeSelectedImages = async (id) => {
        const filteredItems = images.filter(item => item.id !== id)
        const updateImageList = images.filter((item) => {
            if (item.id !== id) {
                return item
            }
            else {
                return item
            }
        });
        const jsonValue = JSON.stringify(filteredItems)
        await AsyncStorage.setItem('@selectedImages', jsonValue)
        await getSelectedImages()
    }
    const cancelImageUpload = () => {
        navigation.goBack()
    }
    return (
        <>
            <StatusBar
                barStyle="light-content"
                backgroundColor={INTEREST_COLOR}
            />
            <UploadHeader navigation={navigation} name="Upload Photo" editProfile={true} saveDetails={cancelImageUpload} option={'Cancel'} />
            <ScrollView style={Styles.scrollView}
                contentContainerStyle={Styles.contentContainerStyle}
            >
                <View style={Styles.body}>
                    <ArrayList
                        data={images} np
                        numColumns={3}
                        keyExtractor={(item, index) => index}
                        renderItem={({ item, index }) => (
                            <View style={{
                                position: 'relative',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <View style={Styles.exView}>
                                    <TouchableOpacity style={Styles.exTouch} onPress={() => removeSelectedImages(item.id)}>
                                        <Image source={require('../../../Assets/Images/ex.png')} style={{
                                            width: 25,
                                            height: 25,
                                        }} />
                                    </TouchableOpacity>
                                </View>
                                <Image source={{ uri: item.uri }}
                                    style={[Styles.imageList, {
                                        width: item.width ? item.width : moderateScale(90),
                                        height: item.height ? item.height : moderateScale(90),
                                    }]}
                                />
                            </View>
                        )} />
                    <TextInput
                        placeholder="Say something about this photo"
                        style={Styles.input}
                        placeholderTextColor="#606060"
                        value={something}
                        onChangeText={(text) => setSomething(text)}
                    />
                    <Text style={Styles.phototext}>Add tags separated by commas...</Text>
                    <View style={Styles.tagsView}>
                        <View style={Styles.tagView}>
                            <Text style={Styles.tag}>Daughter</Text>
                            <View style={Styles.exView}>
                                <TouchableOpacity style={Styles.tagTouch} onPress={() => removeSelectedImages(item.id)}>
                                    <Image source={require('../../../Assets/Images/ex.png')} style={{
                                        width: 25,
                                        height: 25,
                                    }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={Styles.tagView}>
                            <Text style={Styles.tag}>Delhi</Text>
                            <View style={Styles.exView}>
                                <TouchableOpacity style={Styles.tagTouch} onPress={() => removeSelectedImages(item.id)}>
                                    <Image source={require('../../../Assets/Images/ex.png')} style={{
                                        width: 25,
                                        height: 25,
                                    }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Location')}>
                        <Text  style={Styles.locationInput}>{'Location'}</Text>
                    </TouchableOpacity>
                    {/* <TextInput
                        placeholder="Add location"
                        style={Styles.locationInput}
                        placeholderTextColor="#606060"
                        value={location}
                        onChangeText={(text) => setlocation(text)}
                    /> */}
                    <View style={Styles.dicoverCont}>
                        <Text style={Styles.discover}>Increase Discoverability</Text>
                        <>
                            <View style={Styles.tagsView}>
                                {Discover.map(item => (
                                    <View style={Styles.discoverView} key={item.id}>
                                        <Text style={[Styles.tag, { color: WHITE }]}>{item.name}</Text>
                                    </View>
                                ))}
                            </View>
                        </>
                    </View>
                </View>
            </ScrollView>
            <View style={Styles.uploadView}>
                <Pressable style={Styles.upload}>
                    <Text style={Styles.uploadText}>Upload</Text>
                </Pressable>
            </View>
        </>
    )
}
