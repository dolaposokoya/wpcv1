import React, { useState } from 'react'
import { View, Text, Dimensions, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import { FormContainer, Button, AnchorText, FlexColumn } from '../../../Assets/Styles/Customized/Styled';
import { apiUrl, PLACEHOLDER_COLOR } from '../../../Config/Config';
import Styles from './Styles'
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Loader from '../../Shared/Loader/Loader';
import base64 from 'react-native-base64';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LOGIN } from '../../../ActionType/ActionType';
import { connect } from 'react-redux';
import { GetCookieAction } from '../../../Actions/CookieAction'
import AlignItem from '../../Shared/AlignItem/AlignItem';
import MessageModal from '../../Shared/Modal/MessageModal'
import { StatusBar } from 'expo-status-bar';
import { _saveItem } from '../../../Utilities/Utilities';


function Index(props) {

  const { navigation, GetCookieAction } = props
  const [page, setpage] = useState('')
  const [wpc_name, setwpc_name] = useState('')
  const [password, setpassword] = useState('')
  const [message, setmessage] = useState('')
  const [login, setlogin] = useState('Sign In')
  const [nameError, setnameError] = useState({})
  const [passwordError, setpasswordError] = useState({})
  const [loading, setloading] = useState(false)
  const [secure, setsecure] = useState(true)
  const [errorType, seterrorType] = useState('')
  const [openModal, setopenModal] = useState(false)


  const validateUser = async () => {
    let valid = true;
    const wpc_nameError = {}
    const passwordError = {}
    if (wpc_name === '' || wpc_name === null) {
      wpc_nameError.empty = 'WPC Name or Email is empty'
      valid = false
    }
    if (password === '') {
      passwordError.empty = 'Password is empty'
      valid = false
    }
    setnameError(wpc_nameError)
    setpasswordError(passwordError)
    return valid
  }

  const setCookie = async (user) => {
    try {
      const { user_id, user_name } = user[0];
      console.log('user_name', user_name)
      const basicAuth = base64.encode(`${user_id}:${user_name}`)
      await AsyncStorage.setItem('@basicAuth', basicAuth)
      const jsonValue = JSON.stringify({
        name: `WPC_USER_SESSION`, value: basicAuth,
      })
      await AsyncStorage.setItem(`@WPC_USER_SESSION`, jsonValue)
      return {
        success: true,
        message: 'Successful'
      }
    } catch (error) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  const loginUser = async () => {
    try {
      setmessage('')
      setloading(true)
      setlogin('Signing In...')
      const valid = await validateUser()
      if (!valid) {
        setloading(false)
        setlogin('Sign In')
        setopenModal(true)
        seterrorType('warning')
        setmessage('Please fill all details')
        return false
      }
      else {
        const formData = new FormData()
        formData.append("wpc_name", wpc_name);
        formData.append("password", password);
        formData.append("actionType", LOGIN);
        const requestOptions = {
          method: 'POST',
          body: formData
        }
        const result = await fetch(apiUrl.generalUrl, requestOptions)
        const { message, success, user } = await result.json()
        if (success == 1 && message === "Signin Successful") {
          const { user_id, user_name } = user[0]
          const done = await setCookie(user)
          if (done.success === true) {
            await _saveItem('user_id', user_id)
            await _saveItem('user_name', user_name)
            await _saveItem('page', page)

            setlogin('Sign In')
            setloading(false)
            setwpc_name('')
            setpassword('')
            setlogin('Sign In')
            setTimeout(() => {
              setmessage('Signin Successful')
              navigation.navigate('Home')
              setloading(false)
            }, 1000);
            setTimeout(() => {
              setwpc_name('')
              setpassword('')
              setmessage('')
            }, 2000);
          }
          else {
            setlogin('Sign In')
            setloading(false)
            setmessage(done.message)
            seterrorType('warning')
            setopenModal(true)
          }
        } else if (success == 2) {
          setlogin('Sign In')
          setloading(false)
          setmessage('Invalid password or WPC Name!')
          setopenModal(true)
          seterrorType('warning')
        } else if (success == 3) {
          setlogin('Sign In')
          setloading(false)
          setmessage("Account doesn't exist for this WPC Name!")
          setopenModal(true)
          seterrorType('warning')
        } else if (success == 4) {
          setlogin('Sign In')
          setloading(false)
          setmessage('Enter both WPC Name and Password!')
          setopenModal(true)
          seterrorType('warning')
        } else if (success == 5) {
          setlogin('Sign In')
          setloading(false)
          setmessage('This is not a place for a admin to login')
          setopenModal(true)
          seterrorType('warning')
        } else if (success == 6) {
          setlogin('Signing In...')
          // const done = await setCookie();
          // if (done === true) {
          setlogin('Sign In')
          setloading(false)
          setopenModal(true)
          seterrorType('warning')
          setmessage('Please check your email to verify your email address')
          //   openModal === false && navigation.navigate('Home')
          // }
          // else {
          //   setloading(false)
          //   return false
          // }
        }
      }
    } catch (error) {
      setlogin('Sign In')
      setloading(false)
      setopenModal(true)
      seterrorType('error')
      setmessage(error.message)
    }
  }

  const closeModal = (state) => {
    setmessage('')
    seterrorType('')
    setopenModal(state)
  }

  return (
    <>
      {loading && <Loader />}
      {openModal && <MessageModal closeModal={closeModal} message={message} errorType={errorType} />}
      <StatusBar
        StatusBarAnimation='slide'
        StatusBarStyle='auto'
        animated={true}
      />
      <Image source={require('../../../Assets/Images/login.png')} style={Styles.backView} />
      <ScrollView style={Styles.formContainer}
        contentContainerStyle={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignContent: 'center',
          height: '100%'
        }}
      >
        <AlignItem>
          <Text style={Styles.registerText}>Sign In</Text>
          <Text
            style={Styles.registerText1}
          >Please sign in to continue</Text>
          <Text
            style={Styles.registerText1}
          >using our app</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={Styles.noAcct}>
            <Text style={Styles.registerText2}> Don't have an account? <Text style={Styles.registerText31}>Sign Up</Text>
            </Text>
          </TouchableOpacity>
        </AlignItem>
        <FormContainer>
          <TextInput
            style={Styles.formInputEmail}
            label="Email ID"
            value={wpc_name}
            placeholderTextColor={PLACEHOLDER_COLOR}
            onChangeText={text => setwpc_name(text)}
            placeholder="Email ID"
          />
          {Object.keys(nameError).map((key, index) => (
            <Text key={index} style={Styles.errorText}>{nameError[key]}</Text>
          ))}
        </FormContainer>
        <FormContainer>
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={text => setpassword(text)}
            secureTextEntry={secure}
            style={Styles.formInput}
            placeholderTextColor={PLACEHOLDER_COLOR}
            onBlur={() => setsecure(true)}
          />
          {Object.keys(passwordError).map((key, index) => (
            <Text key={index} style={Styles.errorText}>{passwordError[key]}</Text>
          ))}
          <TouchableOpacity onPress={() => setsecure(!secure)} style={Styles.formPasswordContainer}>
            <Image
              source={secure ? require('../../../Assets/Images/eye.png') : require('../../../Assets/Images/hidden.png')}
              style={Styles.formPassword}
            />
          </TouchableOpacity>
        </FormContainer>
        <FlexColumn style={Styles.forget}>
          <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={Styles.registerText3}
            >Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ResendActivation')}>
            <AnchorText size={18} line={true} style={Styles.registerText3} text={'Resend Activation Mail'} />
          </TouchableOpacity>
        </FlexColumn>
        <View style={Styles.buttonContainer}>
          <Button primary onPress={() => loginUser()} style={Styles.buttonContainerBtn}>
            <Text style={Styles.font}>{login}</Text>
          </Button>
        </View>
        <View style={Styles.buttonContainer}>
          <Text
            style={Styles.termsCondition}
          >By clicking login you agree to</Text>
          <TouchableOpacity onPress={() => navigation.navigate('About')}>
            <Text
              style={Styles.termsCondition1}
            >The Terms & Conditions</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  )
}

const mapStateToProps = state => {
  const { cookie } = state.CookieReducer;
  return {
    cookie
  };
};

const Login = connect(
  mapStateToProps,
  { GetCookieAction },
)(Index);
export default Login;