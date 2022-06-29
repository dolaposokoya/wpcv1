import { Dimensions } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters';
import { fontSize, TEXT_BLUE, THEME_COLOR_BACKGROUND, WHITE } from '../../../Config/Config'

const { width, height } = Dimensions.get('window');

const Styles = ScaledSheet.create({
    editImage: {
        margin: '5@msr',
        height: '18@msr',
        width: '18@msr',
    },
    closeView: {
        alignSelf: 'flex-end',
    },
    closeImage: {
        margin: '5@msr',
        height: '18@msr',
        width: '18@msr',
    },
    dateContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: width * 0.97,
    },
    dateCard: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: WHITE,
        borderBottomWidth: 1,
        borderBottomColor: '#E2E2E2',
        padding: '10@msr',
        width: width * 0.97,
    },
    bottomtext: {
        fontFamily: 'medium',
        color: THEME_COLOR_BACKGROUND,
        fontSize: fontSize.twenty,
        textAlign: 'center'
    },
    dateCardText: {
        fontFamily: 'medium',
        color: TEXT_BLUE,
        fontSize: fontSize.eigthteen,
        textAlign: 'center'
    },
})

export default Styles