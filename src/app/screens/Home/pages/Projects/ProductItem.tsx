import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import {colors} from '../../../../theme/variables';
import {Image, Progress, Text, VStack, View} from 'native-base';

interface IProductsItemProps {
  item: any;
}

export default function ProductsItem({item}: IProductsItemProps) {
  return (
    <View style={styles.projectCard}>
      <VStack space="10px">
        <Image
          style={styles.clientLogo}
          source={require('../../../../../assets/productImge/cocacolaLogo.png')}
        />
        <Text color="white.100" fontSize="xl" fontWeight="600">
          {item?.projectTitle}
        </Text>
        <Text color="gray.100" fontSize="lg">
          {item?.projectName}
        </Text>
        <Progress colorScheme="primary" value={(100 / 20) * 9} />
        <Text color="white.100" fontWeight="600" textAlign="center">
          9/20
        </Text>
      </VStack>
    </View>
  );
}

const styles = StyleSheet.create({
  projectCard: {
    margin: 5,
    width: 180,
    padding: 14,
    height: 260,
    elevation: 10,
    borderRadius: 10,
    shadowRadius: 10,
    backgroundColor: '#222334',
    shadowColor: colors.shadow[Platform.OS === 'ios' ? 100 : 200],
  },
  clientLogo: {
    width: 115,
    height: 100,
  },
});
