import { Dimensions } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters';
import { WHITE, THEME_COLOR_BACKGROUND } from '../../../Config/Config'

const { width, height } = Dimensions.get('window');

const Styles = ScaledSheet.create({
    scrollView: {
        backgroundColor: WHITE,
    },
    contentContainerStyle: {
        display: 'flex',
        alignItems: 'center',
    },
    container: {
        marginTop: '25@msr',
        marginBottom: '20@msr'
    },
    about: {
        display: 'flex',
        justifyContent: 'space-between',
        width: width * 0.9,
    },
    aboutText: {
        fontSize: 20,
        color: THEME_COLOR_BACKGROUND,
        fontWeight: 'bold',
        paddingBottom: 10,
    },
})

export default Styles