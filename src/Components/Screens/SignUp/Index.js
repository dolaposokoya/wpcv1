import React, { Component } from 'react'
import { View, Text, Dimensions, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native';
import { FormContainer, Button, FormText, Link, AnchorText, Anchor } from '../../../Assets/Styles/Customized/Styled';
import Styles from './Styles'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { apiUrl, ERROR, PLACEHOLDER_COLOR, THEME_COLOR_BACKGROUND, WHITE } from '../../../Config/Config';
import { SIGN_UP } from '../../../ActionType/ActionType';
import BackDrop from '../../Shared/BackDrop/BackDrop'
import SelectDropdown from 'react-native-select-dropdown'
import Loader from '../../Shared/Loader/Loader';
import MessageModal from '../../Shared/Modal/MessageModal';

const { width, height } = Dimensions.get('screen')
const IMAGE_HEIGHT = height * .5;
const COLOR_HEIGHT = height * .55
export default class Index extends Component {

    constructor(props) {
        super(props)
        this.state = {
            disabled: false,
            email_pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$",
            password_pattern: "[A-Za-z0-9](?=.*[@$!%*?&]){8,}",
            open: false,
            country: "",
            countries: [
                'India',
                'Nigeria',
                'Ghana',
                'Libya',
                'Togo',
                'Banana',
            ],
            reference: [
                'Friends',
                'Instagram',
                'Twitter',
                'Gooogle Search',
                'LinkedIn',
                'Friends or Family',
                'Others',
            ],
            name: '',
            email: '',
            email1: '',
            password: '',
            passwordMatch: '',
            ref_by: '',
            nameError: {},
            emailError: {},
            confirmEmailError: {},
            passwordError: {},
            passwordMatchError: {},
            countryError: {},
            errorType: '',
            open: false,
            passwordEntry: true,
            checked: false,
            message: '',
            sign_up: 'Sign Up',
            loading: false
        }
    }

    validateInput = async () => {
        const { name, email, email1, password, passwordMatch, email_pattern, password_pattern, country, ref_by } = this.state
        const validateEmail = new RegExp(email_pattern)
        const validatePassword = new RegExp(password_pattern)
        const validEmail = validateEmail.test(email);
        const validPassword = validatePassword.test(password);
        const nameError = {}
        const emailError = {}
        const refError = {}
        const confirmEmailError = {}
        const passwordError = {}
        const passwordMatchError = {}
        const countryError = {}
        let isValid = true;
        if (name === '' || name === null) {
            nameError.empty = 'Name is empty'
            isValid = false
        }
        if (email === '' || email === null) {
            emailError.empty = 'Email is empty'
            isValid = false
        }
        if (!validEmail) {
            emailError.valid = 'Email is invalid'
            isValid = false
        }
        if (email !== email1) {
            confirmEmailError.match = 'Email does not match'
            isValid = false
        }
        if (password === '') {
            passwordError.empty = 'Password is empty'
            isValid = false
        }
        if (password !== '' && password.length < 8) {
            passwordError.valid = 'Password should be more than 8 characters'
            isValid = false
        }
        if (password !== '' && !validPassword) {
            passwordError.accepted = 'Password can only contain an uppercase, lowercase, numbers and special character (@$!%*?&)'
            isValid = false
        }
        if (passwordMatch === '') {
            passwordMatchError.empty = 'Confirm password is empty'
            isValid = false
        }
        if (password !== '' && (passwordMatch !== password)) {
            passwordMatchError.valid = 'Password do not match'
            isValid = false
        }
        if (country === '' || country === null || country === 'Select Country') {
            countryError.valid = 'Please select a country'
            isValid = false
        }
        if (ref_by === '' || ref_by === null || ref_by === 'How did you hear about us') {
            refError.valid = 'Please select a how you heard about us'
            isValid = false
        }
        this.setState({
            nameError,
            emailError,
            confirmEmailError,
            passwordError,
            passwordMatchError,
            refError,
            countryError,

        })
        return isValid
    }

    registerUser = async () => {
        const { navigation } = this.props
        // navigation.navigate('Interest');
        try {
            const { name, email, email1, password, ref_by, country, loading } = this.state
            const valid = await this.validateInput()
            if (!valid) {
                return false
            }
            else {
                const formData = new FormData()
                formData.append("name", name);
                formData.append("email", email);
                formData.append("email1", email1);
                formData.append("password", password);
                formData.append("ref_by", ref_by);
                formData.append("actionType", SIGN_UP);
                formData.append("country", country);
                console.log('FOrmData', formData)
                // const requestOptions = {
                //     method: 'POST',
                //     body: formData
                // }
                // this.setState({ loading: !loading })
                // const result = await fetch(apiUrl.generalUrl, requestOptions)
                // const response = await result.json()
                // if (response) {
                //     if (response.success == 1) {
                //         this.setState({ sign_up: "Signing Up..." })
                //         this.setState({ name: '', email: '', email1: '', password: '', ref_by: '', passwordMatch: '', country: '' })
                //         setTimeout(() => {
                //             this.setState({ loading: !loading, sign_up: "Sign Up" })
                //             this.openModal(response.message, 'success')
                //         }, 2000);
                //         setTimeout(() => {
                //             this.props.navigation.navigate('Login')
                //         }, 2300);
                //     } else {
                //         this.setState({ sign_up: "Signing Up..." })
                //         setTimeout(() => {
                //             this.setState({ sign_up: "Sign Up" })
                //             this.setState({ loading: !loading })
                //             this.openModal(response.message, 'warning')
                //         }, 2000);
                //     }
                // }
                // else {
                //     this.setState({ sign_up: "Signing Up..." })
                //     setTimeout(() => {
                //         this.setState({ sign_up: "Sign Up", })
                //         this.setState({ loading: !loading })
                //         this.openModal('Something went wrong', 'warning');
                //     }, 2000);
                // }
            }
        } catch (error) {
            this.setState({ sign_up: "Signing Up..." })
            setTimeout(() => {
                this.setState({ sign_up: "Sign Up" })
                this.setState({ loading: false })
                this.openModal(error.message, 'error');
            }, 2000);
        }
    }

    openModal = (message, error) => {
        this.setState({
            message: message,
            errorType: error,
            open: true
        })
    }
    closeModal = (state) => {
        this.setState({
            message: '',
            errorType: '',
            open: state
        })
    }

    render() {
        const { navigation } = this.props
        const { name, email, email1, password, passwordMatch, nameError, emailError, confirmEmailError, passwordError, passwordMatchError, sign_up, message, countries, country, reference, countryError, loading, errorType, open, disabled, refError, passwordEntry } = this.state
        return (
            <>
                {open && <MessageModal closeModal={this.closeModal} message={message} errorType={errorType} />}
                {loading && <Loader />}
                <Image source={require('../../../Assets/Images/signup.png')} style={Styles.backView} />
                <KeyboardAwareScrollView
                    // behavior="padding"
                    resetScrollToCoords={{ x: 0, y: 0 }}
                    scrollEnabled={true}
                >
                    <ScrollView
                        style={Styles.scrollView}
                        contentContainerStyle={{
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <View style={Styles.container}>
                            <View style={Styles.textContainer}>
                                <View style={Styles.textContainer1}>
                                    <Text
                                        style={Styles.registerText}
                                    >Sign Up</Text>
                                    <Text
                                        style={Styles.registerText1}
                                    >Please create a new account</Text>
                                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                        <Text style={Styles.registerText2}>Already have an account? <Text style={Styles.registerText3}>Sign In</Text>
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={Styles.formContainer}>
                                <FormContainer>
                                    <TextInput
                                        style={Styles.formInput}
                                        placeholder="Enter your name"
                                        placeholderTextColor={PLACEHOLDER_COLOR}
                                        value={name}
                                        onChangeText={(name) => this.setState({ name })}
                                        outlineColor="red"
                                        selectionColor="gray"
                                    />
                                    {nameError && Object.keys(nameError).map((key, index) => (
                                        <Text key={index} style={Styles.errorText}>{nameError[key]}</Text>
                                    ))}
                                </FormContainer>
                                <FormContainer>
                                    <TextInput
                                        keyboardType={"email-address"}
                                        placeholder="Enter email id"
                                        placeholderTextColor={PLACEHOLDER_COLOR}
                                        value={email}
                                        onChangeText={(email) => this.setState({ email })}
                                        selectionColor="gray"
                                        style={Styles.formInput}
                                    />
                                    {emailError && Object.keys(emailError).map((key, index) => (
                                        <Text key={index} style={Styles.errorText}>{emailError[key]}</Text>
                                    ))}
                                </FormContainer>
                                <FormContainer>
                                    <TextInput
                                        keyboardType={"email-address"}
                                        placeholder="Re-enter email id"
                                        value={email1}
                                        onChangeText={(email1) => this.setState({ email1 })}
                                        placeholderTextColor={PLACEHOLDER_COLOR}
                                        style={Styles.formInput}
                                    />
                                    {confirmEmailError && Object.keys(confirmEmailError).map((key, index) => (
                                        <Text key={index} style={Styles.errorText}>{confirmEmailError[key]}</Text>
                                    ))}
                                </FormContainer>
                                <FormContainer>
                                    <TextInput
                                        placeholder="Password"
                                        placeholderTextColor={PLACEHOLDER_COLOR}
                                        value={password}
                                        onChangeText={(password) => this.setState({ password })}
                                        secureTextEntry={passwordEntry}
                                        style={Styles.formInput}
                                    />
                                    {/* <TouchableOpacity style={Styles.formPasswordContainer}
                                        onPress={() => this.setState({ passwordEntry: !passwordEntry })}
                                    >
                                        <Image
                                            source={require('../../../Assets/Images/eye.png')}
                                            style={Styles.formPassword}
                                        />
                                    </TouchableOpacity> */}
                                    {passwordError && Object.keys(passwordError).map((key, index) => (
                                        <Text key={index} style={Styles.errorText}>{passwordError[key]}</Text>
                                    ))}
                                    <TouchableOpacity style={Styles.formPasswordContainer}
                                        onPress={() => this.setState({ passwordEntry: !passwordEntry })}
                                    >
                                        <Image
                                            source={passwordEntry ? require('../../../Assets/Images/hidden.png') : require('../../../Assets/Images/eye.png')}
                                            style={Styles.formPassword}
                                        />
                                    </TouchableOpacity>
                                </FormContainer>
                                <FormContainer>
                                    <TextInput
                                        placeholder="Confirm password"
                                        placeholderTextColor={PLACEHOLDER_COLOR}
                                        value={passwordMatch}
                                        onChangeText={(passwordMatch) => this.setState({ passwordMatch })}
                                        selectionColor="gray"
                                        secureTextEntry={true}
                                        style={Styles.formInput}
                                    />
                                    {passwordMatchError && Object.keys(passwordMatchError).map((key, index) => (
                                        <Text key={index} style={Styles.errorText}>{passwordMatchError[key]}</Text>
                                    ))}
                                </FormContainer>
                                <FormContainer>
                                    <SelectDropdown
                                        style={Styles.formInput}
                                        data={countries}
                                        onSelect={(country, index) => {
                                            this.setState({ country })
                                        }}
                                        buttonTextAfterSelection={(selectedItem, index) => {
                                            return selectedItem
                                        }}
                                        rowTextForSelection={(item, index) => {
                                            return item
                                        }}
                                        buttonTextStyle={{
                                            textAlign: 'left'
                                        }}
                                        defaultButtonText={'Select Country'}
                                        buttonStyle={Styles.formInput}
                                        dropdownIconPosition="right"
                                        renderDropdownIcon={() => <TouchableOpacity><Image source={require('../../../Assets/Images/downarrow.png')} style={Styles.iconInput} /></TouchableOpacity>}
                                    />
                                    {countryError && Object.keys(countryError).map((key, index) => (
                                        <Text key={index} style={Styles.errorText}>{countryError[key]}</Text>
                                    ))}
                                </FormContainer>
                                <FormContainer>
                                    <SelectDropdown
                                        style={Styles.formInput}
                                        data={reference}
                                        onSelect={(item, index) => {
                                            this.setState({ ref_by: item })
                                        }}
                                        buttonTextAfterSelection={(selectedItem, index) => {
                                            return selectedItem
                                        }}
                                        rowTextForSelection={(item, index) => {
                                            return item
                                        }}
                                        buttonTextStyle={{
                                            textAlign: 'left'
                                        }}
                                        defaultButtonText={'How did you hear about us'}
                                        buttonStyle={Styles.formInput}
                                        dropdownIconPosition="right"
                                        renderDropdownIcon={() => <TouchableOpacity>
                                            <Image source={require('../../../Assets/Images/downarrow.png')} style={Styles.iconInput} /></TouchableOpacity>}
                                    />
                                    {refError && Object.keys(refError).map((key, index) => (
                                        <Text key={index} style={Styles.errorText}>{refError[key]}</Text>
                                    ))}
                                </FormContainer>
                                <View style={[Styles.signBtnConatiner, { opacity: disabled ? .5 : 1 }]}>
                                    <Button primary onPress={() => this.registerUser()} style={Styles.signBtn} disabled={false}>
                                        <FormText primary style={Styles.signText} size={16}>{sign_up}</FormText>
                                    </Button>
                                </View>
                            </View>
                            <View style={Styles.buttonContainer}>
                                <Text
                                    style={Styles.termsCondition}
                                >By clicking sign up you agree to the</Text>
                                <Text
                                    style={Styles.termsCondition1}
                                > Terms & Conditions</Text>
                            </View>
                        </View>
                    </ScrollView>
                </KeyboardAwareScrollView>
            </>
        )
    }
}
