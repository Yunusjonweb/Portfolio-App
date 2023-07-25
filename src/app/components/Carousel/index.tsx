import {Divider, Text, VStack} from 'native-base';
import React from 'react';
import {Image, StyleSheet, Dimensions} from 'react-native';
import {colors} from "../../../app/theme/variables";

export const SLIDER_WIDTH = Dimensions.get('window').width - 50;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.6);

const CarouselCardItem = ({item}) => {
  return (
    <VStack
      space="5px"
      style={styles.container}
      key={item.id}
      justifyContent="center"
      alignItems="center">
      <VStack space="10px" alignItems="center">
      <Image
        style={styles.tinyLogo}
        source={require('../../../assets/images/developer.png')}
      />
      <Text color="main.100" fontSize="lg" fontWeight="600" textAlign="center">{item?.first_name} {item?.last_name}</Text>
      {item.specialty.map(item=>(
        <Text color="gray.100" fontSize="md" textAlign="center" >{item?.name.en}</Text>
        ))}
      </VStack>
        <Divider bg="lightGray.100" my="2"  />
        <Text>Learn more</Text>
    </VStack>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 230,
    height: 250,
    borderRadius: 5,
    padding:10,
    backgroundColor: '#fff',
  },
  tinyLogo: {
    width: 80,
    height: 80,
  },
  nameDays: {
    fontSize: 17,
    fontWeight: '600',
    color: 'white',
  },
  dataTitle: {
    fontSize: 17,
    fontWeight: '400',
    color: 'white',
  },
});

export default CarouselCardItem;
