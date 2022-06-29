import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import ArrayList from '../../Shared/ArrayList/ArrayList'
import Header from '../../Shared/Header/Header'
import Styles from './Style'
import { GetCompetitionDetailsAction } from '../../../Actions/CompetitionsAction';
import { connect } from 'react-redux';
import MessageModal from '../../Shared/Modal/MessageModal'
import Loader from '../../Shared/Loader/Loader';


const { height, width } = Dimensions.get('window')
function Index(props) {
    const { navigation, route, GetCompetitionDetailsAction } = props

    useEffect(() => {
        getCompetitionData()
    }, [])
    const [page, setpage] = useState('details');
    const [pageData, setpageData] = useState({});
    const [loading, setloading] = useState(false)
    const [imageHeight, setimageHeight] = useState(0);
    const [imageWidth, setimageWidth] = useState(0)
    const [message, setmessage] = useState('')
    const [errorType, seterrorType] = useState('')
    const [openModal, setopenModal] = useState(false)

    const { item, name, date, id, type, compCode } = route.params;

    const getImageSize = (image) => {
        Image.getSize(image, (width, height) => {
            setimageHeight(height)
            setimageWidth(width)
            console.log(width, 'height', height)
        });
    }

    const getCompetitionData = async () => {
        setloading(true);
        try {
            setloading(true);
            await GetCompetitionDetailsAction(compCode, data => {
                const { error, success, message } = data
                if (error === false && success === 1) {
                    setpageData(data.data)
                    getImageSize(data.data.competition_cover_url)
                    setloading(false)
                }
                else {
                    setloading(false)
                    setmessage(message)
                    seterrorType('warning')
                    setopenModal(true)
                }
            });
        } catch (error) {
            setloading(false)
            // setmessage('Something went wrong')
            setmessage(error.message)
            seterrorType('error')
            setopenModal(true)
        }
    }

    const compdate = [
        {
            id: '1',
            text: "Start Date",
            date: pageData.start_date,
        },
        {
            id: '2',
            text: "Submission Close",
            date: pageData.submission_deadline_date,
        },
        {
            id: '3',
            text: "Judging Start",
            date: pageData.judging_date,
        },
        {
            id: '4',
            text: "Contest Results",
            date: pageData.result_date,
        },
    ];

    const prizes = [
        {
            id: '1',
            position: '1st Prize',
            text: pageData.first_prize
        },
        {
            id: '2',
            position: '2nd Prize',
            text: pageData.second_prize
        },
        {
            id: '3',
            position: '3rd Prize',
            text: pageData.third_prize
        },
    ]

    const closeModal = (state) => {
        setmessage('')
        seterrorType('')
        setopenModal(state)
    }
    return (
        <>
            {loading && <Loader />}
            {openModal && <MessageModal closeModal={closeModal} message={message} errorType={errorType} />}
            <Header navigation={navigation} page="comp" date={compdate}>
                <Text style={Styles.headerText}>{name}</Text>
            </Header>
            <ScrollView style={Styles.SafeAreaView}>
                <View style={Styles.scrollView}>
                    <View style={Styles.competitionData}>
                        <Image source={{ uri: pageData.competition_cover_url }} style={Styles.imageContainer} />
                        <View style={Styles.overView}>
                            <TouchableOpacity style={Styles.viewContainer} onPress={() => setpage('details')}>
                                <Text style={page === 'details' ? Styles.compText : Styles.compText1}>Details</Text>
                                <View style={page === 'details' ? Styles.line : Styles.line1} />
                            </TouchableOpacity>
                            <TouchableOpacity style={Styles.viewContainer} onPress={() => setpage('entries')}>
                                <Text style={page === 'details' ? Styles.compText1 : Styles.compText}>View Entries</Text>
                                <View style={page === 'details' ? Styles.line1 : Styles.line} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {page === 'details' && <>
                        <View style={Styles.prizeContainer}>
                            <Image source={require('../../../Assets/Images/trophyplain.png')} style={Styles.trophyImage} />
                            <Text style={[Styles.prizeContainerText, { paddingTop: moderateScale(20) }]}>Prizes By</Text>
                            <Text style={Styles.prizeContainerText}>World Photographers Club</Text>
                            <ArrayList
                                data={prizes}
                                keyExtractor={(item) => item.id}
                                renderItem={({ item }) => (
                                    <View style={[Styles.prizeCard, { borderBottomWidth: item.id === prizes.length.toString() ? 0 : moderateScale(2) }]}>
                                        <Text style={Styles.prizeCardText}>{item.position}</Text>
                                        <Text style={Styles.prizeCardText1}>{item.text}</Text>
                                    </View>
                                )}
                            />
                        </View>

                        <View style={Styles.prizeContainer}>
                            <View style={Styles.dateContainer}>
                                <Text style={Styles.works}>How this works</Text>
                                <View style={Styles.contentView}>
                                    <Text style={Styles.login}>Login to your account</Text>
                                    <Text style={Styles.account}>if you do not already have an account please follow this link to create an account</Text>
                                </View>
                                <View style={Styles.contentView}>
                                    <Text style={Styles.login}>Submit your best photograph</Text>
                                    <Text style={Styles.account}>if you do not already have an account please follow this link to create an account</Text>
                                </View>
                                <View style={Styles.contentView}>
                                    <Text style={Styles.login}>Judging Starts</Text>
                                    <Text style={Styles.account}>let our expert jugde carefully analyze each entry and select the winning photos</Text>
                                </View>
                            </View>
                        </View>

                        <View style={Styles.prizeContainer1}>
                            <Text style={Styles.prizeContainerText1}>Rules</Text>
                            <View style={Styles.rulesContainer}>
                                <Text style={Styles.rulesText}>This is a free competition and is open to photographers of all level.
                                </Text>
                                <Text style={Styles.rulesText}>The number of entries allowed per user is 10.
                                </Text>
                                <Text style={Styles.rulesText}>Refrain from over processing in photoshop or any other software. Judges want to see the original moment and charm captured in the original light.
                                </Text>
                                <Text style={Styles.rulesText}>Pictures must be their own and winner must be willing to send them for verification.
                                </Text>
                                <Text style={Styles.rulesText}>Exit/Metadata must be preserved in the uploaded photos
                                </Text>
                            </View>
                        </View>
                    </>}
                    {page === 'entries' && <>
                        <View style={[Styles.prizeContainer, { marginTop: moderateScale(35), marginBottom: moderateScale(25) }]}>
                            <Text>Entries</Text>
                        </View>
                    </>}
                </View>
            </ScrollView>
            <View style={Styles.registerView}>
                <TouchableOpacity style={Styles.registerNow} onPress={() => navigation.navigate('UploadPhoto', {
                    profileImage: ''
                })}>
                    <Text style={Styles.registerNowText}>Submit Photo</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

const mapStateToProps = state => {
    const { competitionDetailsData } = state.CompetitionReducer;
    return {
        competitionDetailsData
    };
};

const CompetitionDetails = connect(
    mapStateToProps,
    { GetCompetitionDetailsAction },
)(Index);
export default CompetitionDetails;
