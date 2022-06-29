import { Text, View, TouchableOpacity, Dimensions } from 'react-native'
import { fonts } from '../../../Config/Config';
import { moderateScale } from 'react-native-size-matters';
const { width, height } = Dimensions.get('screen')

export const FormContainer = (props) => {
    const { children } = props
    return (
        <View style={{
            paddingTop: moderateScale(10),
            paddingBottom: moderateScale(10),
            paddingLeft: moderateScale(20),
            paddingRight: moderateScale(20),
            justifyContent: 'center',
            width: width * .97,
            alignItems: 'center',
        }}>
            {children}
        </View>
    )
}


export const Button = (props) => {
    const { children, primary, style, onPress, disabled } = props
    return (
        <TouchableOpacity style={[{
            backgroundColor: primary ? '#1475E4' : 'red',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: moderateScale(10),
            paddingBottom: moderateScale(10),
        }, style]} onPress={onPress}
            disabled={disabled ? disabled : false}
        >
            {children}
        </TouchableOpacity>
    )
}

export const Anchor = (props) => {
    const { children } = props
    return (
        <View style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            {children}
        </View>
    )
}

export const AnchorText = (props) => {
    const { text, style } = props
    return (
        <Text
            style={[{
                // color: 'black',
                textDecorationLine: props.line ? 'underline' : 'none',
                fontSize: props.size ? moderateScale(props.size) : moderateScale(15),
                fontWeight: props.weight ? props.weight : '500',
            }, style]}
        >
            {text}
        </Text >
    )
}

export const Link = (props) => {
    const { children, primary } = props
    return (
        <TouchableOpacity style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: moderateScale(12),
            paddingBottom: moderateScale(12),
        }}>
            {children}
        </TouchableOpacity>
    )
}


export const FormText = (props) => {
    const { children } = props
    return (
        <Text
            style={{
                color: props.primary ? 'white' : '#4cae4c',
                fontSize: props.size ? moderateScale(props.size) : moderateScale(40),
                fontWeight: props.weight ? props.weight : '500',
            }}
        >
            {children}
        </Text >
    )
}


export const PurpleButton = (props) => {
    const { children } = props
    return (
        <TouchableOpacity style={{
            backgroundColor: '#2183C8',
            paddingTop: moderateScale(10),
            paddingBottom: moderateScale(10),
            paddingLeft: moderateScale(20),
            paddingRight: moderateScale(20),
            borderRadius: moderateScale(20),
            margin: moderateScale(10)
        }}>
            {children}
        </TouchableOpacity>
    )
}

export const FlexRow = (props) => {
    const { children, style } = props
    return (
        <View
            style={[{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row'
            }, style]}
        >
            {children}
        </View>
    )
}

export const FlexColumn = (props) => {
    const { children } = props
    return (
        <View
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}
        >
            {children}
        </View>
    )
}

