import AsyncStorage from '@react-native-async-storage/async-storage';

export const _saveItem = async (key, value) => {
    await AsyncStorage.setItem(`@${key}`, value)
}

export const _getItem = async (key) => {
    const loggedInUserName = await AsyncStorage.getItem(`@${key}`);
    return loggedInUserName;
}