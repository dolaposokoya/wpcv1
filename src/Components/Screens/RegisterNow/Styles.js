import { Dimensions } from 'react-native';
import { THEME_COLOR_BACKGROUND } from '../../../Config/Config';
import { ScaledSheet } from 'react-native-size-matters';

const { width, height } = Dimensions.get('window')
const screenHeight = height - (height * 0.18);
const quotaWidth = width * 0.97
const gapWidth = quotaWidth / 3.19;
const Styles = ScaledSheet.create({
    scrollView: {
        width,
        backgroundColor: THEME_COLOR_BACKGROUND,
    },
    contentContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    },

})

export default Styles