import {
  CameraOptions,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';

const options: CameraOptions = {
  mediaType: 'photo',
  quality: 1,
  includeBase64: true,
  saveToPhotos: false,
};
export const _openGallery = async () => {
  return launchImageLibrary(options, response => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
      return undefined;
    } else if (response.errorCode) {
      console.log('ImagePicker Error: ', response.errorCode);
      return undefined;
    } else {
      return response;
    }
  });
};

export const _takePict = async () => {
  return launchCamera(options, response => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
      return undefined;
    } else if (response.errorCode) {
      console.log('ImagePicker Error: ', response.errorCode);
      return undefined;
    } else {
      return response;
    }
  });
};
