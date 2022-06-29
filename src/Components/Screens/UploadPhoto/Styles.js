import { StyleSheet, Dimensions } from 'react-native';
import { fonts, THEME_COLOR_BACKGROUND, THEME_COLOR, OTHER_GRAY } from '../../../Config/Config';


const { width, height } = Dimensions.get('screen')
const Styles = StyleSheet.create({
    body: {
        backgroundColor: THEME_COLOR_BACKGROUND
    },
    bottomView: {
        width,
        position: 'absolute',
        bottom: 0,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 10
    },
    libraryOptions: {
        width: width * 0.5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    options: {
        color: OTHER_GRAY,
        fontSize: 18,
        fontFamily: 'medium',
        paddingBottom: 15,
    },
    active: {
        width: '95%',
        height: 3,
        borderRadius: 4,
        backgroundColor: THEME_COLOR,
    },
    inActive: {
        width: '95%',
        height: 3,
        borderRadius: 4,
        backgroundColor: OTHER_GRAY,
    },
})

export default Styles