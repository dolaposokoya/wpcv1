import { Dimensions } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { fonts, THEME_COLOR_BACKGROUND, WHITE, THEME_COLOR, fontSize } from '../../../Config/Config';

const darkGray = '#606060'
const { width, height } = Dimensions.get('screen');
const bottom = '15@msr';
const Styles = ScaledSheet.create({
    scrollView: {
        width,
        backgroundColor: THEME_COLOR_BACKGROUND
    },
    contentContainerStyle: {
        alignItems: 'center'
    },
    body: {
        marginTop: '12@msr',
        marginBottom: '20@msr',
        width: width * 0.97
    },
    imageList: {
        marginBottom: '10@msr',
        marginRight: '18@msr',
    },
    exView: {
        position: 'absolute',
        alignItems: 'flex-end',
        width: '100%',
        height: '100%',
        zIndex: 999
    },
    exTouch: {
        width: 30,
        height: 30,
        right: '-1@msr'
    },
    tagTouch: {
        width: 30,
        height: 30,
        right: '-15@msr',
        top: '-16@msr',
    },
    input: {
        color: darkGray,
        fontFamily: 'regular',
        fontSize: fontSize.fourteen,
        marginTop: '5@msr',
        marginBottom: '5@msr',
    },
    locationInput: {
        color: darkGray,
        fontFamily: 'regular',
        fontSize: fontSize.fourteen,
        marginTop: '25@msr',
        marginBottom: '5@msr',
    },
    phototext: {
        color: darkGray,
        fontFamily: 'regular',
        fontSize: fontSize.fourteen,
        marginTop: '25@msr',
        marginBottom: '5@msr',
    },
    tagsView: {
        width: width * 0.97,
        alignSelf: 'center',
        marginTop: '12@msr',
        // marginBottom: '5@msr',
        // marginBottom: bottom,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
    },
    tagView: {
        position: 'relative',
        backgroundColor: WHITE,
        width: '89@msr',
        height: '33@msr',
        paddingTop: '7@msr',
        paddingBottom: '7@msr',
        // paddingLeft: '33@msr',
        // paddingRight: '15@msr',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '20@msr',
        marginBottom: '7@msr',
        borderRadius: '17@msr'
    },
    tag: {
        color: THEME_COLOR_BACKGROUND,
        fontFamily: 'regular',
        fontSize: fontSize.fourteen,
    },
    dicoverCont: {
        width: width * 0.97,
        alignSelf: 'center',
        marginTop: '12@msr',
        marginBottom: '100@msr',
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
    },
    discover: {
        color: WHITE,
        fontFamily: 'regular',
        fontSize: fontSize.fourteen,
        marginBottom: '20@msr',
        textAlign: 'left'
    },
    discoverView: {
        backgroundColor: '#2B2B2B',
        paddingTop: '7@msr',
        paddingBottom: '7@msr',
        paddingLeft: '15@msr',
        paddingRight: '15@msr',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '7@msr',
        marginBottom: '7@msr',
        borderRadius: '17@msr'
    },
    uploadView: {
        width: width,
        position: 'absolute',
        bottom: bottom,
        justifyContent: 'center',
        alignItems: 'center',
    },
    upload: {
        width: width * 0.85,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: THEME_COLOR,
        borderRadius: '4@msr',
        paddingTop: '15@msr',
        paddingBottom: '15@msr'
    },
    uploadText: {
        color: WHITE,
        fontFamily: 'medium',
        fontSize: fontSize.sixteen,
    },
})

export default Styles