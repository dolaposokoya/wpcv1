import React, { useState, useEffect, createContext } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { base_url } from "../Config/Config";


export const NavigationContext = createContext()

export const NavigationProvider = (props) => {
    const { children } = props
    const [page, setpage] = useState('IntroPage');

    useEffect(() => {
        checkUser().then()
        return () => checkUser().then()
    }, [])

    const checkUser = async () => {
        try {
            const basicAuth = await AsyncStorage.getItem('@basicAuth')
            // const cookies = await CookieManager.get(base_url)
            if (basicAuth !== null) {
                // const { wpc_user_session } = cookies
                // if (wpc_user_session && wpc_user_session.value === basicAuth) {
                    setpage('Home')
                // }
                // else {
                //     setpage('IntoPage')
                // }
            }
            else {
                setpage('IntroPage')
            }
        } catch (error) {
            setmessage(error.message)
        }
    }

    return (
        <NavigationContext.Provider value={[page, setpage]}>
            {children}
        </NavigationContext.Provider>
    );
}