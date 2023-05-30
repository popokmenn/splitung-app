import * as React from 'react';
import {Icon} from '@ui-kitten/components';

import Color from 'utils/color';
import {Modal, TouchableOpacity, View} from 'react-native';
import styles from '../cost.style';
import Multiselect from 'components/multiselect';
import {useAppSelector} from 'store/store';
import ICostTypes from '../cost.types';
import {ItemType, ValueType} from 'react-native-dropdown-picker';
import {HStack, Text} from 'components';

type param = {
  isVisible: boolean,
  onRequestClose: () => void,
  onSelect: (items: ItemType<ValueType>[]) => void,
  dataSelected: ICostTypes.ICostItem[],
  data: ICostTypes.ICostItem[],
};
const ModalAssign = ({
  onRequestClose,
  isVisible,
  onSelect,
  dataSelected,
  data,
}: param) => {

  return (
    <Modal
      key={'modal-assign'}
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onRequestClose}>
      <View style={styles.centeredView}>
        <View style={[styles.modalView, {paddingBottom: 20}]}>
          <TouchableOpacity onPress={onRequestClose}>
            <Icon
              pack="assets"
              name="close"
              style={[styles.icon, {tintColor: Color.black}]}
            />
          </TouchableOpacity>
          <View>
            <Multiselect
              value={dataSelected}
              data={data}
              onSelect={onSelect}
            />
            <TouchableOpacity onPress={onRequestClose}>
              <View style={styles.buttonAssign}>
                <HStack>
                  <Text style={styles.addcostbtntxt}>Confirm</Text>
                </HStack>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default ModalAssign;
