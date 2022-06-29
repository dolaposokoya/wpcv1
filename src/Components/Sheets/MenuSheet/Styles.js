import { ScaledSheet } from 'react-native-size-matters'
import { BLACK } from '../../../Config/Config'


const Styles = ScaledSheet.create({

    touch: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
    },
    editImage: {
        width: 20,
        height: 20,
    },
    logout: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    menuText: {
        margin: 10,
        fontSize: 19
    },
    menus: {
        margin: 5,
        height: 20,
        width: 20,
    },
    bottomtext: {
        padding: 4,
        margin: 7,
        fontWeight: '900',
        color: BLACK
    }
})

export default Styles