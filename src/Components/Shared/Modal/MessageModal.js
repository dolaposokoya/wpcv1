import React from "react";
import { Modal, Text, View, Dimensions, TouchableOpacity } from "react-native";
import {  fontSize, WARNING, THEME_COLOR_BACKGROUND, SUCCESS, ERROR, WHITE, DARK_COLOR } from "../../../Config/Config";
import { ScaledSheet } from 'react-native-size-matters';


const { width, height } = Dimensions.get('window');
const MessageModal = (props) => {

    const { closeModal, openModal, errorType, message } = props
    if (errorType === 'error') {
        return (
            <View style={styles.centeredView}>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={openModal}
                    onRequestClose={() => {
                        closeModal(false);
                    }}
                >
                    <View style={styles.centeredView1}>
                        <View style={styles.modalView}>
                            <Text style={[styles.errorType, { color: ERROR }]}>{'Uh oh!'}</Text>
                            <View style={styles.modalMessage}>
                                <Text style={styles.text}>{message}</Text>
                            </View>
                            <View style={styles.buttonYes}>
                                <TouchableOpacity
                                    style={[styles.button, { backgroundColor: ERROR }]}
                                    onPress={() => closeModal(false)}
                                >
                                    <Text style={styles.textStyleClose}>Close</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
    else {
        return (
            <View>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={openModal}
                    onRequestClose={() => {
                        closeModal(false);
                    }}
                >
                    <View style={styles.centeredView1}>
                        <View style={styles.modalView}>
                            <Text style={[styles.errorType, { color: errorType === 'warning' ? WARNING : SUCCESS }]}>{errorType === 'warning' ? 'Whoops!' : 'Congratulations!'}</Text>
                            <View style={styles.modalMessage}>
                                <Text style={styles.text}>{message}</Text>
                            </View>
                            <View style={styles.buttonYes}>
                                <TouchableOpacity
                                    style={[styles.button, { backgroundColor: errorType === 'warning' ? WARNING : SUCCESS }]}
                                    onPress={() => closeModal(false)}
                                >
                                    <Text style={styles.textStyleClose}>Close</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
};

const styles = ScaledSheet.create({
    centeredView: {
        position: 'absolute',
        height,
        justifyContent: "center",
        alignItems: "center",
    },
    centeredView1: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: '12@msr',
        },
        shadowOpacity: '0.58@msr',
        shadowRadius: '16@msr',
        elevation: '24@msr',
    },
    modalView: {
        backgroundColor: WHITE,
        borderRadius: '10@msr',
        width: width * 0.75,
        alignItems: "center",
        shadowColor: '#171717',
        shadowOffset: {
            width: 0,
            height: '2@msr'
        },
        shadowOpacity: '0.25@msr',
        shadowRadius: '40@msr',
        elevation: '50@msr',
        paddingTop: '40@msr',
    },
    modalImage: {
        width: '35@msr',
        height: '35@msr',
    },
    errorType: {
        fontFamily: 'semiBold',
        fontSize: fontSize.twentytwo,
    },
    text: {
        color: '#484444',
        // color: '#808080',
        fontFamily: 'medium',
        fontSize: fontSize.eigthteen,
        textAlign: "center",
        paddingLeft: '12@msr',
        paddingRight: '12@msr',
    },
    textStyleClose: {
        color: WHITE,
        fontFamily: 'semiBold',
        fontSize: fontSize.eigthteen,
        textAlign: "center",
    },
    modalMessage: {
        width: width * 0.8,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '25@msr',
        paddingBottom: '25@msr',
    },
    buttonYes: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '20@msr',
        marginTop: '12@msr',
        borderWidth: 0,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '12@msr',
        paddingBottom: '12@msr',
        width: width * 0.6,
        borderRadius: '10@msr',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
});

export default MessageModal;