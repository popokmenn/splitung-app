import {Text, View} from 'react-native';
import React from 'react';

import styles from './dropdown.style';
import {Picker} from '@react-native-picker/picker';

interface TProps {
  onChange: (value: string) => void;
  label?: string;
  data: item[];
  value: string | undefined;
  disabled?: boolean;
}
type item = {
  label: string,
  value: string,
};

const Dropdown: React.FC<TProps> = ({
  label,
  data,
  onChange,
  value,
  disabled = false,
}) => {
  return (
    <View style={styles.form}>
      <Text style={styles.formHeader}>{label}</Text>
      <View
        style={
          disabled
            ? [styles.inputContainer, {backgroundColor: '#e6e6e6'}]
            : styles.inputContainer
        }>
        <Picker
          selectedValue={value}
          onValueChange={onChange}
          dropdownIconColor={'#DEE0E5'}
          mode="dropdown"
          enabled={!disabled}
          placeholder="Please select an item">
          <Picker.Item
            key={'0'}
            label="Please Select"
            value={'0'}
            style={{color: '#758091'}}
          />
          {data.map(i => (
            <Picker.Item key={i.value} label={i.label} value={i.value} />
          ))}
        </Picker>
      </View>
    </View>
  );
};
export default Dropdown;
