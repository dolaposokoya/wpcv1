import { Dimensions } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import { THEME_COLOR_BACKGROUND } from '../../../Config/Config'

const { width, height } = Dimensions.get('screen')
const Styles = ScaledSheet.create({
    loaderStyle: {
        alignItems: "center",
        marginBottom: '15@msr',
    },
    scrollView: {
        backgroundColor: THEME_COLOR_BACKGROUND,
    },
    loadMore: {
        // marginBottom: '10@msr',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadMoreText: {
        width: '30@msr',
        height: '30@msr',
    }
})

export default Styles