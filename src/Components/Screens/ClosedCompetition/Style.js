import { Dimensions } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters';
import { WHITE } from '../../../Config/Config'

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
        marginBottom: '18@msr'
    },
})

export default Styles