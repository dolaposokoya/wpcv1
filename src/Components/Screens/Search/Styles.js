import { StyleSheet, Dimensions } from 'react-native';
import { fonts, THEME_COLOR_BACKGROUND, INTEREST_COLOR } from '../../../Config/Config';


const { width, height } = Dimensions.get('screen')
const Styles = StyleSheet.create({
    body: {
        height,
        width,
        backgroundColor: THEME_COLOR_BACKGROUND,
        alignItems: 'center'
    },
    uploadView: {
        marginTop: height * 0.05,
        marginBottom: height * 0.02,
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 79,
        height: 79,
    },
    formInput: {
        width: width * 0.9,
        paddingTop: 18,
        paddingBottom: 18,
        paddingLeft: 50,
        fontSize: 19,
        backgroundColor: INTEREST_COLOR,
        borderWidth: 0,
        borderRadius: 4,
        marginBottom: 25,
        fontSize: 16,
        fontFamily: 'regular'
    },
    passwordView: {
        position: 'absolute',
        left: 30,
        top: 20,
    },
    passwordHide: {
        width: 25,
        height: 25,
    },
})

export default Styles