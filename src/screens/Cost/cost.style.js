const {StyleService} = require('@ui-kitten/components');
const {default: Color} = require('utils/color');

const styles = StyleService.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  input: {
    marginTop: 10,
    marginHorizontal: 40,
    borderRadius: 10,
    borderWidth: 0,
    backgroundColor: Color.lightGrey,
  },
  inputDetail: {
    // maxWidth: '35%',
    width: '27%',
    borderRadius: 10,
    borderWidth: 0,
    padding: 0,
    margin: 0,
    marginRight: 5,
    backgroundColor: Color.white,
  },
  inputText: {
    paddingLeft: 10,
    fontSize: 14,
    fontWeight: '500',
  },
  inputTextDetail: {
    fontSize: 8,
  },
  addcostbtntxt: {
    fontSize: 15,
    marginLeft: 10,
    fontWeight: '500',
    color: Color.white,
  },
  scanbtntxt: {
    fontSize: 15,
    marginLeft: 10,
    fontWeight: '500',
    color: Color.black,
  },
  canvasContainer: {
    height: 'auto',
    margin: 40,
    backgroundColor: Color.lightGrey,
    borderRadius: 10,
  },
  canvasImg: {
    height: 200,
    flex: 1,
    resizeMode: 'contain',
  },
  buttonSubmit: {
    marginHorizontal: 24,
    marginVertical: 5,
    width: 350,
    borderRadius: 10,
    fontSize: 12,
    fontWeight: '500',
    backgroundColor: Color.secondary,
    height: 50,
    color: Color.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonAssign: {
    width: '100%',
    marginTop: 20,
    padding: 0,
    height: 50,
    borderRadius: 10,
    backgroundColor: Color.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    paddingBottom: 24,
    backgroundColor: Color.white,
    color: Color.black,
  },
  progressBar: {
    marginTop: 20,
    height: 5,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: 'color-placeholder-1000',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: 300,
    justifyContent: 'center',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  itemDetailTxt: {
    fontSize: 12,
    textAlign: 'left',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  iconDelete: {
    height: 20,
    width: 20,
    // margin: 20,
    alignItems: 'center',
    justifySelf: 'center',
    textAlign: 'center',
    backgroundColor: Color.black,
  },
});

export default styles;
