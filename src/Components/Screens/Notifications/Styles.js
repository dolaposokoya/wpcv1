import { Dimensions } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { fonts, SETTINGS_GRAY, THEME_COLOR_BACKGROUND, WHITE, PLUS_COLOR, PLACEHOLDER_COLOR, THEME_COLOR, BADGE_COLOR, INTEREST_COLOR, fontSize, BOTTOM_COLOR, PINK, LINE_COLOR } from '../../../Config/Config';


const { width, height } = Dimensions.get('screen')
const Styles = ScaledSheet.create({
    scrollView: {
        backgroundColor: THEME_COLOR_BACKGROUND,
    },
    contentContainerStyle: {
        alignItems: 'center',
    },
    body: {
        width: width * 0.93,
        alignItems: 'center',
        backgroundColor: THEME_COLOR_BACKGROUND,
        marginTop: '15@msr',
    },
    settingsName: {
        alignSelf: 'flex-start',
        fontFamily: 'bold',
        fontSize: fontSize.fifteen,
        color: SETTINGS_GRAY
    },
    underLine: {
        backgroundColor: LINE_COLOR,
        width: width * 0.93,
        marginTop: '15@msr',
        height: '2@msr',
    },
    notificationView: {
        width: width * 0.93,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: LINE_COLOR,
        paddingTop: '15@msr',
        paddingBottom: '12@msr',
        borderBottomWidth: 1,
    },
    typeName: {
        color: WHITE,
        fontSize: fontSize.sixteen,
        fontFamily: 'medium'
    },
    switch: {
        width: '40@msr',
        height: '22@msr'
    }
})

export default Styles

