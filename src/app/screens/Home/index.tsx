import {Text, View, HStack, Image, VStack} from 'native-base';
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import DashboardScreen from '../Dashboard';
import {colors} from '../../theme/variables';
import SignIn from '../Auth/SignIn';

export default function HomeScreen() {
  const [selectedTab, setSelectedTab] = useState('account');

  const options = [
    {label: 'Overview', value: 'overview'},
    {label: 'Productivitiy', value: 'productivitiy'},
  ];
  return (
    <View style={styles.container}>
      <VStack space="30px">
        <HStack justifyContent="space-between" alignItems="center" mt="10">
          <Text fontSize="lg" color="white.100">
            Dashboard
          </Text>
          <Image
            style={styles.userLogo}
            source={require('../../../assets/images/user.png')}
          />
        </HStack>
        <VStack>
          <Text fontSize="4xl" color="white.100">
            Hello,{'\n'}Derek Doyle 👋
          </Text>
        </VStack>
        <SwitchSelector
          height={48}
          initial={0}
          options={options}
          textColor={colors.gray[100]}
          selectedColor={colors.white[100]}
          buttonColor={colors.blue[100]}
          fontSize={16}
          backgroundColor={'#1a182d'}
          textStyle={{fontFamily: 'Poppins-Regular'}}
          selectedTextStyle={{
            fontSize: 18,
            fontFamily: 'Poppins-Regular',
          }}
          onPress={(value: string) => setSelectedTab(value)}
        />
        <View style={styles.card}>
          <VStack space="15px">
            <Text fontSize="md" color="gray.100">
              Deily Goal
            </Text>
            <HStack space="10px" alignItems="center">
              <View style={styles.taskCard}>
                <Text color="white.100" textAlign="center" fontWeight="600">
                  3/5
                </Text>
              </View>
              <Text color="white.100" textAlign="center" fontWeight="900">
                tasks
              </Text>
            </HStack>
            <Text color="gray.100" fontWeight="900">
              You marked 3/5 tasks{'\n'}are done 🎉
            </Text>
          </VStack>
        </View>
        {selectedTab === 'overview' ? <DashboardScreen /> : <SignIn />}
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
  userLogo: {
    width: 50,
    height: 50,
  },
  card: {
    width: 380,
    height: 250,
    padding: 25,
    borderRadius: 20,
    backgroundColor: '#272a34',
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 20,
    shadowColor: colors.shadow[Platform.OS === 'ios' ? 100 : 200],
  },
  taskCard: {
    width: 40,
    height: 30,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#99cb86',
  },
});
