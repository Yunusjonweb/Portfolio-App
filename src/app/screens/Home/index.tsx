import {Text, View, HStack, Image, VStack, Button} from 'native-base';
import React, {useState} from 'react';
import SwitchSelector from 'react-native-switch-selector';
import {Platform, StyleSheet} from 'react-native';
import {colors} from '../../theme/variables';
import SignIn from '../Auth/SignIn';
import DashboardScreen from '../Dashboard';
import Charts from '../../components/Charts';
import {useNavigation} from '@react-navigation/native';
import paths from '../../constants/routePaths';

export default function HomeScreen() {
  const navigation = useNavigation();
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
        <View style={styles.card}>
          <HStack justifyContent="space-between" alignItems="center">
            <VStack space="20px">
              <Text color="gray.100">Daliy Goal</Text>
              <HStack space="10px">
                <View style={styles.taskBox}>
                  <Text color="white.100" fontWeight="600">
                    3/5
                  </Text>
                </View>
                <Text color="white.100" fontWeight="900">
                  tasks
                </Text>
              </HStack>
              <Text color="gray.100">You marked 3/5 task{'\n'}are done 🎉</Text>
              <Button
                style={styles.btn}
                _text={{fontSize: 'md', fontWeight: '600'}}
                onPress={()=>navigation.navigate(paths.PROJECTS)}>
                All Tasks
              </Button>
            </VStack>
            <Charts />
          </HStack>
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
  userImge: {
    width: 50,
    height: 50,
  },
  card: {
    width: 380,
    height: 250,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#272a34',
    shadowRadius: 10,
    shadowColor: colors.shadow[Platform.OS === 'ios' ? 100 : 200],
    elevation: 10,
  },
  taskBox: {
    width: 50,
    height: 30,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#85c76d',
  },
  btn: {
    width: 100,
    height: 50,
    fontSize: '12px',
    borderRadius: 10,
    backgroundColor: '#c25fff',
  },
});