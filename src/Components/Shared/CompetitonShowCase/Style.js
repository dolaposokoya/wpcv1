import { Dimensions } from 'react-native'
import { COMP_COLOR, CREAM, fontSize, THEME_COLOR_BACKGROUND, WHITE } from '../../../Config/Config'
import { ScaledSheet } from 'react-native-size-matters';

const { width, height } = Dimensions.get('window');
const imageWidth = '275@msr';
const imageHeight = '195@msr';
const Styles = ScaledSheet.create({
    container: {
        height: height * 0.20,
        width: width * 0.7,
        marginLeft: '12@msr',
        marginRight: '14@msr',
        marginTop: '10@msr',
        borderRadius: 5,
    },
    flex1: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: 'green',
        marginLeft: 10
    },
    cardImage: {
        alignContent: 'center',
        borderRadius: 5,
        width: '100%',
        width: imageWidth,
        height: imageHeight,
        resizeMode: 'cover'
    },
    overLay: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        paddingTop: '8@msr',
        paddingBottom: '8@msr',
        paddingLeft: '12@msr',
        paddingRight: '12@msr',
        height: imageHeight,
        width: imageWidth,
    },
    competition: {
        color: COMP_COLOR,
        fontFamily: 'bold',
        fontSize: fontSize.twelve,
        marginLeft: '10@msr',
        textAlign: 'left'
    },
    text: {
        color: CREAM,
        fontFamily: 'bold',
        fontSize: fontSize.eigthteen,
        marginLeft: '10@msr',
        textAlign: 'left'
    },


    // Skeleton Style
    skeletonImage: {
        width: '50@msr',
        height: '50@msr',
        borderRadius: '50@msr',
        resizeMode: 'cover',
        marginTop: '10@msr',
        marginBottom: '10@msr',
    },
    skeletonText: {
        width: '167@msr',
        height: '18@msr',
        borderRadius: '4@msr',
        marginLeft: '10@msr'
    },
    skeletonTextProfile: {
        width: '167@msr',
        height: '18@msr',
        borderRadius: '4@msr',
        marginTop: '5@msr',
        marginLeft: '10@msr'
    },
    skeletonFlex: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: '20@msr',
    },
    skeletonClearImage: {
        borderRadius: '6@msr',
        width: '110@msr',
        height: '110@msr',
        resizeMode: 'cover',
    },
    skeletonBlurImage: {
        borderRadius: '6@msr',
        width: '95%',
        height: '100%',
        resizeMode: 'cover',
        // backgroundColor: 'blue'
    },
    skeletonFlexRow: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
})

export default Styles