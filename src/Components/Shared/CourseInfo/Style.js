import { Dimensions } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters';
import { LIGHT_GRAY, THEME_COLOR_BACKGROUND, fontSize } from '../../../Config/Config'

const { width, height } = Dimensions.get('window');

const Styles = ScaledSheet.create({
    learnTable: {
        marginTop: '2@msr',
        display: 'flex',
        justifyContent: 'space-between',
        width: width * 0.9,
    },
    learnTableHeader: {
        display: 'flex',
        flexDirection: 'row',
        width: width * 0.5,
    },
    learnTableHeader1: {
        display: 'flex',
    },
    learnTextContainer: {
        display: 'flex',
    },
    learnHeader: {
        fontSize: fontSize.fourteen,
        color: THEME_COLOR_BACKGROUND,
        textAlign: 'left',
        width: width * 0.4,
        fontFamily: 'semiBold'
    },
    learnHeader1: {
        fontSize: fontSize.fourteen,
        color: THEME_COLOR_BACKGROUND,
        textAlign: 'left',
        width: width * 0.9,
        paddingBottom: '7@msr',
        fontFamily: 'semiBold'
    },
    learnText: {
        fontSize: fontSize.fourteen,
        fontFamily: 'bold',
        color: THEME_COLOR_BACKGROUND,
        textAlign: 'left'
    },
    learnText1: {
        fontSize: fontSize.fourteen,
        color: THEME_COLOR_BACKGROUND,
        fontFamily: 'regular',
    },
    learnImage: {
        width: 20,
        height: 20,
    },
    lineThrough: {
        width: width * 0.9,
        height: 1,
        backgroundColor: LIGHT_GRAY,
        marginTop: 10,
        marginBottom: 20,
    },
    padlock: {
        flexDirection: 'row',
        borderWidth: 2,
        borderRadius: '14@msr',
        paddingTop: '7@msr',
        paddingBottom: '7@msr',
        paddingLeft: '12@msr',
        paddingRight: '12@msr',
        borderColor: '#E1E1E1'
    },
})

export default Styles