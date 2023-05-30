import * as React from 'react';
import {Input, Icon} from '@ui-kitten/components';

import {HStack, Text} from 'components';
import Color from 'utils/color';
import {TouchableOpacity, View} from 'react-native';
import styles from '../cost.style';
import {useAppDispatch, useAppSelector} from 'store/store';
import ICostTypes from '../cost.types';
import actions from '../cost.action';

const Add = () => {
  const dispatch = useAppDispatch();
  const {dataGrid} = useAppSelector<ICostTypes.ICostState>(state => state.cost);

  const onChange = (field: string, value: string | number, index: number) => {
    const newDataItem = {
      ...dataGrid[index],
      [field]: value,
    };
    let newDataGrid = dataGrid.map(u =>
      u.id !== newDataItem.id ? u : newDataItem,
    );
    dispatch(
      actions.setDataGrid({
        dataGrid: newDataGrid,
      }),
    );
  };

  const onAddItem = () => {
    const newDataGrid: ICostTypes.ICostItem[] = [
      ...dataGrid,
      {
        item_name: '',
        quantity: 0,
        price: 0,
        user_id: '',
        user_name: '',
        id: String(dataGrid.length + 1),
      },
    ];
    dispatch(actions.setDataGrid({dataGrid: newDataGrid}));
  };
  return (
    <>
      <Input
        placeholder="Transaction Name"
        status="primary"
        style={[styles.input]}
        textStyle={styles.inputText}
        accessoryLeft={() => (
          <Icon pack="assets" name="cart" style={styles.icon} />
        )}
      />
      <Input
        placeholder="Location"
        status="primary"
        style={[styles.input]}
        textStyle={styles.inputText}
        accessoryLeft={() => (
          <Icon pack="assets" name="maps" style={styles.icon} />
        )}
      />
      <Input
        placeholder="Description"
        status="primary"
        style={[styles.input]}
        textStyle={styles.inputText}
        accessoryLeft={() => (
          <Icon pack="assets" name="desc" style={styles.icon} />
        )}
      />
      <HStack style={{alignItems: 'flex-end', marginTop: 10}}>
        <Text
          style={{
            fontSize: 18,
            marginLeft: 40,
            textAlign: 'left',
            fontWeight: '600',
          }}
          category="h2"
          marginLeft={30}
          marginBottom={-10}>
          Item List
        </Text>
        <TouchableOpacity onPress={onAddItem}>
          <View
            style={[
              styles.buttonSubmit,
              {
                height: 30,
                width: 80,
                marginRight: 40,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: Color.primary,
              },
            ]}>
            <HStack>
              <Text
                style={{
                  fontSize: 10,
                  marginLeft: 10,
                  fontWeight: '500',
                  color: Color.black,
                }}>
                + Add Item
              </Text>
            </HStack>
          </View>
        </TouchableOpacity>
      </HStack>
      <View
        style={{
          padding: 20,
          borderRadius: 10,
          marginHorizontal: 40,
          backgroundColor: Color.lightGrey,
        }}>
        {dataGrid.length === 0 && (
          <Text style={{textAlign: 'center'}}>There's No Item</Text>
        )}
        {dataGrid &&
          dataGrid.length > 0 &&
          dataGrid?.map((item, index) => (
            <HStack style={{marginBottom: 10}} key={index}>
              <Input
                label={index === 0 ? 'Name' : undefined}
                placeholder="Item name"
                style={[styles.inputDetail]}
                textStyle={styles.inputTextDetail}
                size="small"
                value={item.item_name}
                onChangeText={i => onChange('item_name', i, index)}
              />
              <Input
                label={index === 0 ? 'Amount' : undefined}
                placeholder="x"
                keyboardType="number-pad"
                style={[styles.inputDetail]}
                textStyle={styles.inputTextDetail}
                size="small"
                value={String(item.quantity)}
                onChangeText={i => onChange('quantity', i, index)}
              />
              <Input
                label={index === 0 ? 'Price' : undefined}
                placeholder="Rp."
                keyboardType="number-pad"
                style={[styles.inputDetail]}
                textStyle={styles.inputTextDetail}
                size="small"
                value={String(item.price)}
                onChangeText={i => onChange('price', Number(i), index)}
              />
              <TouchableOpacity
                onPress={() => {
                  const newData = dataGrid.filter(i => i.id !== item.id);
                  dispatch(actions.setDataGrid({dataGrid: newData}));
                }}>
                <View
                  style={[
                    {
                      height: 30,
                      width: 50,
                      alignItems: 'center',
                      marginTop: index === 0 ? 18 : undefined,
                      justifyContent: 'flex-end',
                    },
                  ]}>
                  <Icon pack="assets" name="trash" />
                </View>
              </TouchableOpacity>
            </HStack>
          ))}
        {dataGrid && dataGrid.length > 0 && (
          <>
            <View
              style={{
                height: 1,
                width: '100%',
                marginBottom: 10,
                backgroundColor: Color.grey,
              }}
            />
            <HStack>
              <Text style={{fontWeight: 'bold'}} category="t5">
                Total
              </Text>
              <Text style={{fontWeight: 'bold'}} category="t5">
                {dataGrid.reduce((n, {price}) => n + price, 0).toLocaleString('en-US', { style: 'currency', currency: 'IDR' })}
              </Text>
            </HStack>
          </>
        )}
      </View>
    </>
  );
};
export default Add;
