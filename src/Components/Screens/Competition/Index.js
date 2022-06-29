import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, Image, Dimensions, TouchableOpacity, RefreshControl } from 'react-native'
import { FlexRow } from '../../../Assets/Styles/Customized/Styled';
import { OTHER_GRAY, THEME_COLOR_BACKGROUND, WHITE } from '../../../Config/Config';
import CompetitionInfo from '../../Shared/CompetitionInfo/CompetitionInfo';
import CompetitionHeader from '../../Shared/SharedHeader/CompetitionHeader';
import Styles from './Style';
import { connect } from 'react-redux';
import { CompetitionAction } from '../../../Actions/CompetitionsAction'
import BottomTabs from '../../Shared/BottomTabs/BottomTabs';
import MessageModal from '../../Shared/Modal/MessageModal';
import ArrayList from '../../Shared/ArrayList/ArrayList';
import Loader from '../../Shared/Loader/Loader';


const { width, height } = Dimensions.get('window');
function Index(props) {
    const { navigation } = props
    const [competitionData, setcompetitionData] = useState([])
    const [compName, setcompName] = useState([])
    const [compDate, setcompDate] = useState([])
    const [compId, setcompId] = useState([])
    const [compCode, setcompCode] = useState([])
    const [compType, setcompType] = useState([])
    const [loading, setloading] = useState(false);
    const [screen, setscreen] = useState('comp')
    const [refreshing, setRefreshing] = useState(false);

    const [message, setmessage] = useState('')
    const [errorType, seterrorType] = useState('')
    const [openModal, setopenModal] = useState(false)

    useEffect(() => {
        getCompetitionData()
    }, [navigation]);


    const getCompetitionData = async () => {
        setloading(true);
        try {
            setloading(true);
            await props.CompetitionAction(data => {
                const { error, success, message } = data
                if (error === false && success === 1) {
                    const { comp_id, success, comp_name, comp_photo_full_url, comp_date, if_pro_comp,comp_code } = data.data
                    setcompetitionData(comp_photo_full_url)
                    setcompName(comp_name)
                    setcompDate(comp_date)
                    setcompId(comp_id)
                    setcompCode(comp_code)
                    setcompType(if_pro_comp)
                    setloading(false)
                }
                else {
                    setloading(false)
                    setmessage(success)
                    seterrorType('warning')
                    setopenModal(true)
                }
            });
        } catch (error) {
            setloading(false)
            setmessage('Something went wrong')
            // setmessage(error.message)
            seterrorType('error')
            setopenModal(true)
        }
    }

    const onRefresh = async () => {
        setRefreshing(true)
        await getCompetitionData();
        setRefreshing(false);
    }
    const changeScreen = (screen) => {
        setscreen(screen)
    };

    const goToUpload = (screen) => {
        navigation.navigate(screen, {
            page: 'Competition'
        })
    }
    const closeModal = (state) => {
        setmessage('')
        seterrorType('')
        setopenModal(state)
    }
    return (
        <>
            {loading && <Loader />}
            {openModal && <MessageModal closeModal={closeModal} message={message} errorType={errorType} />}
            <CompetitionHeader navigation={navigation} name="Competitions" />
            <FlexRow style={Styles.container}>
                <TouchableOpacity style={Styles.host} onPress={() => changeScreen('comp')}>
                    <Text style={screen === 'comp' ? Styles.textActive : Styles.text}>Competitions</Text>
                    <View style={[Styles.underLine, { backgroundColor: screen === 'comp' ? WHITE : OTHER_GRAY }]} />
                </TouchableOpacity>
                <TouchableOpacity style={Styles.host} onPress={() => changeScreen('host')}>
                    <Text style={screen === 'host' ? Styles.textActive : Styles.text}>Submission</Text>
                    <View style={[Styles.underLine, { backgroundColor: screen === 'host' ? WHITE : OTHER_GRAY }]} />
                </TouchableOpacity>
            </FlexRow>
            <ScrollView
                style={{
                    backgroundColor: THEME_COLOR_BACKGROUND,
                    flex: 1,
                    height
                }}
                contentContainerStyle={{
                    justifyContent: 'center',
                    // alignItems: 'center'
                }}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }>
                {screen === 'comp' ? <>
                    <Text style={Styles.textComp}>New Competitions</Text>
                    <ArrayList
                        data={competitionData}
                        horizontal={true}
                        keyExtractor={(item, index) => index}
                        renderItem={({ item, index }) => <CompetitionInfo item={item} navigation={navigation} index={index} compName={compName} compDate={compDate} compId={compId} compCode={compCode} compType={compType} loading={loading} />}
                    />
                    <View style={{
                        marginTop: height * 0.05,
                        alignItems: 'center'
                    }}>
                        <TouchableOpacity style={Styles.hostComp} onPress={() => navigation.navigate('UpgradeMembership')}>
                            <Text style={Styles.hostCompText}>Host your own competition</Text>
                            <Image source={require('../../../Assets/Images/uparrow.png')} style={Styles.hostCompImage} />
                        </TouchableOpacity>
                    </View>

                    <View style={Styles.photofit}>
                        <View style={Styles.photofitComp}>
                            <Text style={Styles.hostCompText1}>#Fitness</Text>
                            <Text style={Styles.hostCompText2}>win 4tb hard drive</Text>
                        </View>
                        <TouchableOpacity style={Styles.photofitCompSubmit} onPress={() => goToUpload('UploadPhoto')}>
                            <Text style={Styles.photofitCompSubmitText}>Submit Photo</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={Styles.photofit}>
                        <View style={Styles.photofitComp}>
                            <Text style={Styles.hostCompText1}>#Black & White</Text>
                            <Text style={Styles.hostCompText2}>win 4tb hard drive</Text>
                        </View>
                        <TouchableOpacity style={Styles.photofitCompSubmit} onPress={() => goToUpload('UploadPhoto')}>
                            <Text style={Styles.photofitCompSubmitText}>Submit Photo</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        marginBottom: height * 0.1,
                        alignItems: 'center',
                    }}>
                        <TouchableOpacity style={Styles.closedComp} onPress={() => navigation.navigate('ClosedCompetition')}>
                            <Text style={Styles.closedCompText}>Closed Competitions</Text>
                        </TouchableOpacity>
                    </View>
                </>
                    : <View style={{
                        marginBottom: height * 0.1
                    }}>
                        <View>
                            <View style={Styles.subImageOverlay} />
                            <Image source={require('../../../Assets/Images/submission.png')} style={Styles.subImage} />
                        </View>
                        <View style={Styles.subContainer}>
                            <Text style={Styles.discoverText}>Discover your photo's potential</Text>
                            <Text style={Styles.discoverText1}>See weekly voting updates on your photos.</Text>
                        </View>
                        <View style={Styles.subContainer}>
                            <TouchableOpacity style={Styles.exploreBtn}>
                                <Text style={Styles.discoverText1}>Explore Contests</Text>
                            </TouchableOpacity>
                        </View>
                    </View>}
            </ScrollView>
            <BottomTabs focused="competition" navigation={navigation} />
        </>
    )
}

const mapStateToProps = state => {
    const { competitionData } = state.CompetitionReducer;
    return {
        competitionData
    };
};

const Competition = connect(
    mapStateToProps,
    { CompetitionAction },
)(Index);
export default Competition;
