import AsyncStorage from '@react-native-async-storage/async-storage';

// Read JWT from local storage
export const _readJwtFromLocalStorage = async () => {
  try {
    const jwt = await AsyncStorage.getItem('jwt');
    return jwt;
  } catch (error) {
    console.error('Error reading JWT from local storage:', error);
    return null;
  }
};

// Store JWT in local storage
export const _storeJwtInLocalStorage = async (jwt: string) => {
  try {
    await AsyncStorage.setItem('jwt', jwt);
    console.log('JWT stored in local storage');
  } catch (error) {
    console.error('Error storing JWT in local storage:', error);
  }
};
