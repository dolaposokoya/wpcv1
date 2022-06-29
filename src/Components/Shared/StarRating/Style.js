import { Dimensions } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters';

const { width, height } = Dimensions.get('window');
const containerWidth = width * 0.95;
const flatListWidth = width * 0.95;

const Styles = ScaledSheet.create({
    container: {
        backgroundColor: "#FF00FF",
        width: 100,
        height: 50
    },
    starImage: {
        width: '14@msr',
        height: '14@msr',
        marginLeft: '5@msr'
    },
})

export default Styles