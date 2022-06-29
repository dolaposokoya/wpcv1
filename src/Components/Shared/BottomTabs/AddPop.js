import React, { useState } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { moderateScale } from 'react-native-size-matters';
import { Options } from '../../../Config/Config';
import ArrayList from '../ArrayList/ArrayList';
import Styles from './Styles';


export default function AddPop(props) {

    const { focused, state } = props

    return (
        <>
            {state &&
                <View style={Styles.bottom}>
                    <View style={Styles.bottomContainer}>
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <ArrayList
                                data={Options}
                                extraData={Options}
                                renderItem={({ item }) => (
                                    <TouchableOpacity style={[Styles.options, { borderBottomWidth: Options.length.toString() === item.id ? 0 : moderateScale(2) }]}>
                                        <Text style={Styles.optionsText}>{item.name}</Text>
                                    </TouchableOpacity>
                                )}
                            />
                        </View>
                    </View>
                </View>
            }
        </>
    )
}
