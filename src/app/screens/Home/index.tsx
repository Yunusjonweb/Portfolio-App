import {Text, View, HStack, Image, VStack} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';

export default function Screen() {
  return (
    <View style={styles.container}>
      <VStack space="20px">
        <HStack justifyContent="space-between" alignItems="center" mt="10">
          <Text fontSize="lg" color="white.100">
            Dashboard
          </Text>
          <Image
            style={styles.tinyLogo}
            source={require('../../../assets/images/user.png')}
          />
        </HStack>
        <VStack>
          <Text fontSize="4xl" color="white.100">
            Hello,{'\n'}Derek Doyle 👋
          </Text>
        </VStack>
      </VStack>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#1a182d',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});
