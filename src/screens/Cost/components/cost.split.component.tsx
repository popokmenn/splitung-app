/* eslint-disable prettier/prettier */
import * as React from 'react';
import {Icon, Avatar} from '@ui-kitten/components';

import {HStack, Text} from 'components';
import Color from 'utils/color';
import {TouchableOpacity, View} from 'react-native';
import {navigate} from 'navigation/RootNavigation';
import {Images} from 'assets/images';
import styles from '../cost.style';
import {useAppSelector} from 'store/store';
import ICostTypes from '../cost.types';
import ModalAssign from './cost.modal-assign.component';

const Split = () => {
  const {dataGridMultiselects} = useAppSelector<ICostTypes.ICostState>(
    state => state.cost,
  );
  const [isModalAssign, setIsModalAssign] = React.useState(false);
  const [dataSelected, setDataSelected] = React.useState<
    ICostTypes.ICostItem[],
  >([]);
  const [personSelected, setPersonSelected] = React.useState(0);
  const [dataSplit, setDataSplit] = React.useState([
    {
      id: 1,
      avatar: Images.avatar['avatar-03'],
      isExpand: false,
      name: 'Naufal Retyan',
      items: [],
    },
    {
      id: 2,
      avatar: Images.avatar['avatar-04'],
      isExpand: false,
      name: 'Ilham Fadhiil',
      items: [],
    },
  ]);
  return (
    <>
      <ModalAssign
        data={dataGridMultiselects}
        dataSelected={dataSplit.find(i => i.id === personSelected)?.items}
        onSelect={e => {
          const newPersonSelected = dataSplit.map(i => {
            if (i.id === personSelected) {
              return {
                ...i,
                items: e,
              };
            } else {
              return i;
            }
          });
          setDataSplit(newPersonSelected);
        }}
        isVisible={isModalAssign}
        onRequestClose={() => {
          setPersonSelected(0);
          setIsModalAssign(false);
        }}
      />
      <TouchableOpacity
        style={{alignItems: 'flex-end', width: '100%'}}
        onPress={() => navigate('AddPerson')}>
        <View
          style={[
            styles.buttonSubmit,
            {
              height: 30,
              width: 100,
              marginTop: 10,
              marginRight: 40,
              marginVertical: 5,
              // color: Color.black,
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
              + Add Person
            </Text>
          </HStack>
        </View>
      </TouchableOpacity>
      {dataSplit.map((item, i) => {
        return (
          <View
            key={i}
            style={{
              borderRadius: 10,
              marginVertical: 5,
              marginHorizontal: 40,
              backgroundColor: Color.lightGrey,
            }}>
            <HStack itemsCenter style={{padding: 10}}>
              <Avatar source={item?.avatar} key={i} size="small" />
              <Text style={{fontSize: 12, textAlign: 'left', width: '25%'}}>
                {item.name}
              </Text>
              <Text style={{fontSize: 12, textAlign: 'left', width: '30%'}}>
                <Text style={{fontWeight: 'bold', fontSize: 12}}>Total: </Text>
                {item.items
                  .reduce((n, {price}) => n + price, 0)
                  .toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'IDR',
                  })}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  const newDataSplit = dataSplit.map(x => {
                    if (x.id === item?.id) {
                      return {
                        ...x,
                        isExpand: !x.isExpand,
                      };
                    } else {
                      return x;
                    }
                  });
                  setDataSplit(newDataSplit);
                }}>
                <View
                  style={
                    item?.isExpand
                      ? {transform: [{rotate: '-90deg'}]}
                      : {transform: [{rotate: '90deg'}]}
                  }>
                  <Icon name="arrow-left" />
                </View>
              </TouchableOpacity>
            </HStack>
            {item?.isExpand && (
              <>
                {item &&
                  item.items.map(i => (
                    <>
                      <Text style={[styles.itemDetailTxt, {paddingLeft: 30}]}>
                        {i.item_name}
                      </Text>
                      <HStack
                        style={{
                          marginBottom: 10,
                          paddingHorizontal: 40,
                          alignItems: 'flex-end',
                        }}>
                        <>
                          <Text style={styles.itemDetailTxt}>
                            x{i.quantity}
                          </Text>
                          <Text style={[styles.itemDetailTxt, {width: 120}]}>
                            {i.price.toLocaleString('en-US', {
                              style: 'currency',
                              currency: 'IDR',
                            })}
                          </Text>
                        </>

                        <TouchableOpacity
                          onPress={() =>
                            setDataSelected(
                              dataSelected.filter(j => j.id !== i.id),
                            )
                          }
                          style={{justifyContent: 'flex-end'}}>
                          <View
                            style={[
                              {
                                margin: 0,
                                width: 23,
                                height: 23,
                                borderRadius: 10,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: Color.danger,
                              },
                            ]}>
                            <Icon name="close" />
                          </View>
                        </TouchableOpacity>
                      </HStack>
                      <View
                        style={{
                          height: 1,
                          width: '80%',
                          marginBottom: 10,
                          alignSelf: 'center',
                          backgroundColor: Color.grey,
                        }}
                      />
                    </>
                  ))}
                {item && item.items.length > 0 && (
                  <>
                    <HStack style={{padding: 10, paddingHorizontal: 40}}>
                      <Text style={{fontWeight: 'bold'}} category="t5">
                        Total
                      </Text>
                      <Text style={{fontWeight: 'bold'}} category="t5">
                        {item.items
                          .reduce((n, {price}) => n + price, 0)
                          .toLocaleString('en-US', {
                            style: 'currency',
                            currency: 'IDR',
                          })}
                      </Text>
                    </HStack>
                  </>
                )}
                <TouchableOpacity
                  style={{alignItems: 'center', width: '100%'}}
                  onPress={() => {
                    setPersonSelected(item.id);
                    setIsModalAssign(true);
                  }}>
                  <View
                    style={[
                      {
                        borderRadius: 5,
                        height: 30,
                        width: '90%',
                        marginVertical: 20,
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
                        + Assign Item
                      </Text>
                    </HStack>
                  </View>
                </TouchableOpacity>
              </>
            )}
          </View>
        );
      })}
    </>
  );
};
export default Split;
