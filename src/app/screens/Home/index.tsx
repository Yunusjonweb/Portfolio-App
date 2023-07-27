import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {colors} from '../../theme/variables';
import DashboardScreen from './pages/Dashboard';
import ProductivityScreen from './pages/Productivity';
import SwitchSelector from 'react-native-switch-selector';
import {Text, View, HStack, Image, VStack} from 'native-base';

export default function HomeScreen() {
  const [selectedTab, setSelectedTab] = useState('overview');

  const options = [
    {label: 'Overview', value: 'overview'},
    {label: 'Productivity', value: 'productivity'},
  ];

  return (
    <View style={styles.container}>
      <VStack space="25px">
        <HStack justifyContent="space-between" alignItems="center" mt="10">
          <Text color="white.100" fontSize="lg" fontWeight="600">
            Dashboard
          </Text>
          <Image
            style={styles.userImge}
            source={require('../../../assets/images/user.png')}
          />
        </HStack>
        <Text fontSize="4xl" color="white.100" fontWeight="600">
          Hello,{'\n'}Derek Doyle 👋
        </Text>
        <SwitchSelector
          height={48}
          initial={0}
          options={options}
          textColor={colors.gray[100]}
          selectedColor={colors.white[100]}
          buttonColor={colors.blue[100]}
          backgroundColor={'#1a182d'}
          fontSize={16}
          textStyle={{fontFamily: 'Poppins-Regular'}}
          selectedTextStyle={{
            fontSize: 18,
            fontFamily: 'Poppins-Regular',
          }}
          onPress={(value: string) => setSelectedTab(value)}
        />
      </VStack>
      {selectedTab === 'overview' ? (
        <DashboardScreen />
      ) : (
        <ProductivityScreen />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#1a182d',
  },
  userImge: {
    width: 50,
    height: 50,
  },
});
