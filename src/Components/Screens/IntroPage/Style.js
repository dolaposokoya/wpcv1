import { Dimensions } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters';
import { THEME_COLOR, WHITE, THEME_COLOR_BACKGROUND, fontSize } from '../../../Config/Config'


const { width, height } = Dimensions.get('window');
// Window is the right option
const imageView = height * 0.9;
const colorView = height * 0.21;
const Styles = ScaledSheet.create({
    container: {
        flex: 1,
        width,
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    imageBackground: {
        width: width,
        height: imageView,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    middleImageContainer: {
        position: 'absolute',
        bottom: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: height * 0.10,
        width: width * 0.8,
    },
    middleImage: {
        width: width * 0.6,
        height: height * 0.085,
    },
    middleImageText: {
        color: WHITE,
        fontSize: fontSize.eigthteen,
        fontFamily: 'avenirMedium'
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
        height: colorView,
        backgroundColor: THEME_COLOR_BACKGROUND
    },
    button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: THEME_COLOR,
        paddingTop: '15@msr',
        paddingBottom: '15@msr',
        width: width * 0.8,
        marginBottom: '10@msr',
        borderRadius: '4@msr',
    },
    buttonText: {
        color: WHITE,
        fontSize: fontSize.sixteen,
        fontFamily: 'semiBold'
    },
})

export default Styles