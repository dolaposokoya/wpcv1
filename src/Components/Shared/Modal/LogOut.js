import React, { useState } from "react";
import { Alert, Modal, Text, View, Dimensions, TouchableOpacity } from "react-native";
import { fontSize, INPUT_TEXT, LINE_COLOR2, TEXT_COLOR1, THEME_COLOR_BACKGROUND, WHITE } from "../../../Config/Config";
import { ScaledSheet } from 'react-native-size-matters';

const { width, height } = Dimensions.get('window');
const LogOut = (props) => {
    const { openModal, setopenModal, logOut } = props

    const logOutUser = async () => {
        logOut()
    }
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={openModal}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setopenModal(!openModal);
                }}
            >
                <View style={styles.centeredView1}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Log Out</Text>
                        <Text style={styles.modalText1}>Do you really log out?</Text>
                        <View style={styles.buttonYes}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => logOutUser()}
                            >
                                <Text style={styles.textStyleYes}>Yes</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonNo}>
                            <TouchableOpacity
                                style={styles.button}
                                // style={[styles.button, styles.buttonClose]}
                                onPress={() => setopenModal(false)}
                            >
                                <Text style={styles.textStyleNo}>No</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = ScaledSheet.create({
    centeredView: {
        backgroundColor: THEME_COLOR_BACKGROUND,
        // opacity: 0.5,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    centeredView1: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: '22@msr',
        backgroundColor: 'rgba(8, 14, 29, 0.76)'
    },
    modalView: {
        backgroundColor: WHITE,
        borderRadius: '6@msr',
        width: width * 0.8,
        padding: '25@msr',
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        // elevation: '5@msr'
        elevation: 5
    },

    modalText: {
        marginBottom: 7,
        textAlign: "center",
        fontFamily: 'medium',
        fontSize: fontSize.twentytwo,
        color: THEME_COLOR_BACKGROUND
    },
    modalText1: {
        marginBottom: 15,
        textAlign: "center",
        fontFamily: 'medium',
        fontSize: fontSize.fourteen,
        color: INPUT_TEXT
    },
    textStyleYes: {
        color: TEXT_COLOR1,
        fontFamily: 'medium',
        fontSize: fontSize.sixteen,
        textAlign: "center"
    },
    textStyleNo: {
        color: THEME_COLOR_BACKGROUND,
        fontFamily: 'medium',
        fontSize: fontSize.sixteen,
        textAlign: "center"
    },
    buttonYes: {
        width: width * 0.8,
        borderTopWidth: '1.5@msr',
        borderTopColor: LINE_COLOR2,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '12@msr',
        paddingBottom: '12@msr',
    },
    buttonNo: {
        width: width * 0.8,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '15@msr',
        borderTopWidth: '1.5@msr',
        borderTopColor: LINE_COLOR2,
    },
});

export default LogOut;