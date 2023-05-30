import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    // fontSize: 16,
    borderWidth: 3,
    borderRadius: 5,
    borderColor: '#DEE0E5',
    backgroundColor: '#F5F6F7',
    color: 'black',
    fontFamily: 'Poppins-Regular',
    zIndex: 1,
    height: 50,
  },
  formHeader: {
    fontSize: 15,
    color: '#758091',
    fontFamily: 'Poppins-Regular',
    zIndex: 0,
  },
  form: {
    marginTop: 20,
    marginRight: 20,
    marginLeft: 20,
  },
  viewContainer: {
    borderWidth: 3,
    borderRadius: 5,
    borderColor: '#DEE0E5',
    backgroundColor: '#F5F6F7',
  },
});
export default styles;
