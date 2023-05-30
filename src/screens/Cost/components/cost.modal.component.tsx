import * as React from 'react';
import {Icon} from '@ui-kitten/components';

import {HStack, Text} from 'components';
import Color from 'utils/color';
import {Modal, TouchableOpacity, View} from 'react-native';
import styles from '../cost.style';

type param = {
  isVisible: boolean,
  openCamera: () => void,
  openGallery: () => void,
  onRequestClose: () => void,
};
const ModalPhoto = ({
  onRequestClose,
  isVisible,
  openCamera,
  openGallery,
}: param) => {
  return (
    <Modal
      key={'modal-camera'}
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onRequestClose}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TouchableOpacity onPress={onRequestClose}>
            <Icon
              pack="assets"
              name="close"
              style={[styles.icon, {tintColor: Color.black}]}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={openCamera}>
            <View
              style={[
                {
                  marginTop: 30,
                  height: 50,
                  width: '100%',
                  borderRadius: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: Color.lightGrey,
                },
              ]}>
              <HStack>
                <Icon pack="assets" name="scan" style={styles.icon} />
                <Text
                  style={{
                    fontSize: 15,
                    marginLeft: 10,
                    fontWeight: '500',
                    color: Color.black,
                  }}>
                  Take Photo
                </Text>
              </HStack>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={openGallery}>
            <View
              style={[
                {
                  marginTop: 30,
                  height: 50,
                  width: '100%',
                  borderRadius: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: Color.lightGrey,
                },
              ]}>
              <HStack>
                <Icon pack="assets" name="scan" style={styles.icon} />
                <Text
                  style={{
                    fontSize: 15,
                    marginLeft: 10,
                    fontWeight: '500',
                    color: Color.black,
                  }}>
                  Open Gallery
                </Text>
              </HStack>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
export default ModalPhoto;
