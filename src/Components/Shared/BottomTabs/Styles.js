import { Dimensions } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters';
import { fontSize, HEADER_COLOR, WHITE } from '../../../Config/Config'

const { width, height } = Dimensions.get('window');
const margin = '13@msr';
const margin1 = '-13@msr';
const Styles = ScaledSheet.create({
    tabView: {
        position: 'absolute',
        bottom: 0,
        width: width,
        backgroundColor: HEADER_COLOR,
        justifyContent: 'space-evenly',
        flexDirection: 'row'
    },
    addView: {
        position: 'absolute',
        left: width * 0.42
    },
    tabImage: {
        height: '25@msr',
        width: '45@msr',
        marginTop: margin,
        marginBottom: margin,
    },
    fakeImage: {
        height: '25@msr',
        width: '45@msr',
    },
    addImage: {
        height: '60@msr',
        width: '60@msr',
        bottom: '30@msr',
        marginTop: margin,
    },


    // Add pop up
    bottom: {
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        width,
        bottom: height * 0.099,
        zIndex: 99999,
    },
    bottomContainer: {
        display: 'flex',
        alignItems: 'center',
        borderRadius: '7@msr',
        paddingBottom: '13@msr',
        paddingTop: '13@msr',
        paddingLeft: '13@msr',
        paddingRight: '13@msr',
        backgroundColor: HEADER_COLOR,
        alignItems: 'center',
        justifyContent: 'center'
    },
    options: {
        borderBottomColor: '#4B5361',
        borderBottomWidth: 2,
        paddingBottom: '5@msr',
        marginBottom: '8@msr',
    },
    optionsText: {
        fontSize: fontSize.eigthteen,
        color: WHITE,
        fontFamily: 'bold',
        textAlign: 'center'
    },
})

export default Styles