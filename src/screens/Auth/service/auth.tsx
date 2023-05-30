import axios from 'axios';
import { Alert } from 'react-native';

const BASE_URL = 'http://192.168.1.14:3000';

type param = {
  username: string
  phone: string
  email: string
  password: string
}
type paramLogin = {
  email: string
  password: string
}
export const _register = async ({username, phone, email, password }: param) => {
  const res = await axios
    .post(
      `${BASE_URL}/users`,
      {
        username,
        email,
        phone,
        password,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    .then(response => {
      Alert.alert('SUCCESS', response.data.message);
      console.log(response.data);
      return response
    })
    .catch(error => {
      Alert.alert(error.code, error.message + '\n' + error.stack);
      console.error(error);
      return error
    });
    return res
};

export const _login = async ({email, password}: paramLogin) => {
  const res = await axios
    .post(
      `${BASE_URL}/session/login`,
      {
        email,
        password,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    .then(response => {
      Alert.alert('SUCCESS', response.data.message);
      console.log(response.data);
      return response
    })
    .catch(error => {
      Alert.alert(error.code, error.response.data.message + '\n' + error.response.data.error);
      console.error(error);
      return error
    });
    return res
};
