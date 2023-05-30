import axios from 'axios';
import {Platform} from 'react-native';
import {Asset} from 'react-native-image-picker';

// const BASE_URL = 'http://192.168.1.14:8000';
const BASE_URL = 'https://f5e9-180-252-175-218.ngrok-free.app';

export const _sendImage = async (imageData: Asset | undefined) => {
  const imgFormData = new FormData();
  imgFormData.append('image', {
    name: imageData?.fileName,
    type: imageData?.type,
    uri:
      Platform.OS === 'ios'
        ? imageData?.uri?.replace('file://', '')
        : imageData?.uri,
  });
  const headers = {
    'Content-Type': 'multipart/form-data;',
  };
  return axios
    .all([
      axios.post(`${BASE_URL}/detect-handwrite`, imgFormData, {
        headers,
      }),
      // axios.post(`${BASE_URL}/upload-image`, imgFormData, {
      //   headers,
      // }),
    ])
    .then(
      axios.spread(data1 => {
        return data1;
      }),
    )
    .catch(e => {
      console.log(e);
    });
};
