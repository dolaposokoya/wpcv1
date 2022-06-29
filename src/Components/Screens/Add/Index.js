import React, { useState, useEffect } from 'react'
import { View, Alert, Text, ScrollView, SafeAreaView, Image, TextInput, TouchableOpacity, RefreshControl } from 'react-native'
import { COMPETITION } from '../../../ActionType/ActionType';
import { FlexRow } from '../../../Assets/Styles/Customized/Styled';
import { apiUrl } from '../../../Config/Config';
import ArrayList from '../../Shared/ArrayList/ArrayList';
import CompetitionInfo from '../../Shared/CompetitionInfo/CompetitionInfo';
import Header from '../../Shared/Header/Header';
import Styles from './Style';




export default function Index(props) {
    const { navigation } = props
    const [competitionData, setcompetitionData] = useState([])
    const [compName, setcompName] = useState([])
    const [compDate, setcompDate] = useState([])
    const [compId, setcompId] = useState([])
    const [compType, setcompType] = useState([])
    const [loading, setloading] = useState(false);
    const [search, setsearch] = useState('')
    const [refreshing, setRefreshing] = useState(false);

    const goToCompetitonDetails = (data) => {
        navigation.navigate('CompetitionDetails', {
            item: data
        })
    }


    const getCompetitionData = async () => {
        setloading(true)
        try {
            setloading(true)
            const formData = new FormData()
            formData.append('actionType', COMPETITION)
            formData.append("offset", 1);
            const requestOptions = {
                method: 'POST',
                body: formData,
            }
            const response = await fetch(`${apiUrl.generalUrl}`, requestOptions)
            const { comp_id, success, comp_name, comp_photo_full_url, comp_date, if_pro_comp } = await response.json()
            if (success === 1) {
                setcompetitionData(comp_photo_full_url)
                setcompName(comp_name)
                setcompDate(comp_date)
                setcompId(comp_id)
                setcompType(if_pro_comp)
                setloading(false)
            }
            else {
                setloading(false)
                Alert.alert('Something went wrong')
            }
        } catch (error) {
            Alert.alert(error.message)
            setloading(false)
        }
    }

    const onRefresh = async () => {
        await getCompetitionData();
    }

    useEffect(() => {
        getCompetitionData()
        // return () => getCompetitionData()
    }, [])
    return (
        <>
            {/* {loading && <Loader />} */}
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            >
                <SafeAreaView style={Styles.SafeAreaView}>
                    <Header navigation={navigation} />
                    <View style={Styles.scrollView}>
                        <FlexRow style={Styles.container}>
                            <Text style={[Styles.text, { color: 'black', fontSize: 20 }]}>Competitions</Text>
                            <TouchableOpacity style={Styles.host}>
                                <Image source={require('../../../Assets/Images/add.png')} style={Styles.addImage} />
                                <Text style={Styles.text}>Host Competition</Text>
                            </TouchableOpacity>
                        </FlexRow>
                        <FlexRow style={Styles.textInputcontainer}>
                            <TextInput
                                placeholder="Search"
                                value={search}
                                style={Styles.textInput}
                                onChangeText={(text) => setsearch(text)}
                            />
                        </FlexRow>
                        <ArrayList
                            data={competitionData}
                            keyExtractor={(item, index) => index}
                            renderItem={({ item, index }) => <CompetitionInfo item={item} navigation={navigation} index={index} compName={compName} compDate={compDate} compId={compId} compType={compType} loading={loading} />}
                        />
                    </View>
                </SafeAreaView>
            </ScrollView>
        </>
    )
}
