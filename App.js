import React, { useState } from 'react';
import { fontsLoaded } from './src/Config/Config';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Navigations from './src/Navigations/Index'
import store from './src/Reducers/Store';
import { Provider } from 'react-redux';
import Loader from './src/Components/Shared/Loader/Loader'



export default function App() {
  const [fonts] = useFonts(fontsLoaded)
  const [ready, setready] = useState(false)

  if (!fonts) {
    return (
      <Loader />
    )
  }

  return (
    <Provider store={store}>
      <Navigations />
    </Provider>
  );

}

