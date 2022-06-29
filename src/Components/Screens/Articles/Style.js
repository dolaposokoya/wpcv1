import { Dimensions } from 'react-native'
import { WHITE, fonts, fontSize } from '../../../Config/Config'
import { ScaledSheet } from 'react-native-size-matters';

const { width, height } = Dimensions.get('screen')
const overlayHeight = height * 0.45
const Styles = ScaledSheet.create({
    container: {
        marginTop: '15@msr',
        alignSelf: 'center',
        width: width * 0.97,
        marginBottom: '30@msr',
    },
    articles: {
        color: WHITE,
        fontSize: fontSize.twenty,
        fontFamily: 'medium',
        textAlign: 'left',
        marginBottom: '10@msr',
    },
    artView: {
        width: '161@msr',
        marginRight: '10@msr',
    },
    artImage: {
        width: '100%',
        height: '202@msr'
    },
    artName: {
        color: WHITE,
        fontSize: fontSize.fourteen,
        fontFamily: 'semiBold',
        textAlign: 'left',
        marginTop: '5@msr',
        marginLeft: '2@msr',
    },
    artInfo: {
        color: WHITE,
        fontSize: fontSize.twelve,
        fontFamily: 'regular',
        textAlign: 'left',
        marginTop: '5@msr',
        marginLeft: '2@msr',
        textDecorationLine: 'underline'
    },
    moreArticles: {
        marginTop: '30@msr',
        marginBottom: '30@msr',
    },
    artView1: {
        width: '134@msr',
        height: '108@msr',
        marginRight: '10@msr',
        marginBottom: '20@msr',
        flexDirection: 'row'
    },
    artImage1: {
        width: '100%',
        height: '100%',
        borderRadius: '5@msr',
        marginRight: '20@msr'
    },
    artName1: {
        color: WHITE,
        fontSize: fontSize.fourteen,
        fontFamily: 'semiBold',
        textAlign: 'left',
        marginLeft: '2@msr',
    },
})

export default Styles