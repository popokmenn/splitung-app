/* eslint-disable react-hooks/exhaustive-deps */
import {Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import styles from './multiselect.style';
import DropDownPicker, {
  ItemType,
  ValueType,
} from 'react-native-dropdown-picker';
import ICostTypes from 'screens/Cost/cost.types';

interface TProps {
  label?: string;
  // data: ItemType<ValueType>[];
  data: ICostTypes.ICostItem[];
  value: ICostTypes.ICostItem[];
  onSelect: (items: ItemType<ValueType>[]) => void;
}

const Multiselect: React.FC<TProps> = ({data, value, label, onSelect}) => {
  const [open, setOpen] = useState(false);
  const [v, setValue] = useState<string[]>([]);
  const textValue = () => {
    let str = '';
    value.map(i => {
      return str.length > 1
        ? (str += ', ' + i.item_name)
        : (str += i.item_name);
    });
    return str;
  };
  useEffect(() => {
    const s: string[] = [];
    value.map(i => {
      s.push(i.id);
    });
    setValue(s);
  }, []);
  return (
    <View style={styles.form}>
      <Text style={styles.formHeader}>{label}</Text>
      <View>
        <DropDownPicker
          multiple
          open={open}
          value={v}
          items={data.map(i => {
            return {
              ...i,
              label: i.item_name,
              value: i.item_name,
            }
          })}
          setOpen={setOpen}
          setValue={setValue}
          itemKey="id"
          multipleText={textValue()}
          onSelectItem={onSelect}
          dropDownDirection="TOP"
          max={10000}
          listMode="SCROLLVIEW"
          placeholder="Please Select"
          placeholderStyle={{color: '#758091', fontSize: 15, marginLeft: 8}}
          dropDownContainerStyle={{borderWidth: 1, borderColor: '#DEE0E5'}}
          style={{
            width: '100%',
            height: 60,
            borderWidth: 3,
            borderRadius: 5,
            borderColor: '#DEE0E5',
            backgroundColor: '#F5F6F7',
          }}
        />
      </View>
    </View>
  );
};
export default Multiselect;
