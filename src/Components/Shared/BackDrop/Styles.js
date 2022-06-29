import { Dimensions } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { THEME_COLOR_BACKGROUND } from '../../../Config/Config';


const { width, height } = Dimensions.get('screen')
const BACKDROP_HEIGHT = height * .50;
const Styles = ScaledSheet.create({
    backView: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        zIndex: -99,
        position: 'absolute',
        width,
        height: height,
    },
    imageMask: {
        width: width,
        resizeMode: 'cover'
    },
    colorMask: {
        width: width,
        height: height * 0.4,
        backgroundColor: THEME_COLOR_BACKGROUND,
        opacity: 1,
        position: 'absolute',
        bottom: 0
    },
})

export default Styles