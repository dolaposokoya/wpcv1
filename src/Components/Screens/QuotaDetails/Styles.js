import { Dimensions } from 'react-native';
import { THEME_COLOR_BACKGROUND, WHITE, fontSize } from '../../../Config/Config';
import { ScaledSheet } from 'react-native-size-matters';

const { width, height } = Dimensions.get('window')
const screenHeight = height - (height * 0.18);
const quotaWidth = width * 0.97
const gapWidth = quotaWidth / 3.19;
const Styles = ScaledSheet.create({
    scrollView: {
        width,
        backgroundColor: THEME_COLOR_BACKGROUND,
        // height: height,
    },
    contentContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    body: {
        display: 'flex',
        alignItems: 'center',
        width: width,
        marginTop: '30@msr',
        marginBottom: '100@msr',
        height: height,
    },
    userStatView: {
        marginTop: '4@msr',
        borderRadius: '6@msr',
        opacity: 0.4,
        width: quotaWidth,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: width * 0.02,
        paddingBottom: width * 0.02,
        backgroundColor: '#1F3D7C',
    },
    userStatView1: {
        marginTop: '14@msr',
        width: quotaWidth,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: width * 0.02,
        paddingBottom: width * 0.02,
        paddingLeft: width * 0.05,
        paddingRight: width * 0.05,
    },
    quotaData: {
        width: gapWidth,
        paddingLeft: '10@msr',
        alignItems: 'flex-start'
    },
    quotaData1: {
        width: gapWidth,
        paddingLeft: '10@msr',
        alignItems: 'center',
        justifyContent: 'center'
    },
    quotaData2: {
        width: gapWidth,
        paddingLeft: '10@msr',
        alignItems: 'center',
        justifyContent: 'center'
    },
    userStatViewText: {
        fontSize: fontSize.fourteen,
        fontFamily: 'medium',
        color: WHITE
    }
})

export default Styles