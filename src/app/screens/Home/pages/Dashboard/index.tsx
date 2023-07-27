import React from 'react';
import {StyleSheet} from 'react-native';
import {Platform} from 'react-native';
import paths from '../../../../constants/routePaths';
import {colors} from '../../../../theme/variables';
import {useNavigation} from '@react-navigation/native';
import LineCharts from '../../../../components/Charts/LineChart';
import ProgressCharts from '../../../../components/Charts/ProgressChart';
import {Button, HStack, ScrollView, Text, VStack, View} from 'native-base';

export default function DashboardScreen() {
  const navigation = useNavigation();
  return (
    <View mt="25px">
      <ScrollView>
        <VStack space="25px">
          <View style={styles.progressCard}>
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
                <Text color="gray.100">
                  You marked 3/5 task{'\n'}are done 🎉
                </Text>
                <Button
                  style={styles.taskWrap}
                  _text={{fontSize: 'md', fontWeight: '600'}}
                  onPress={() => navigation.navigate(paths.PROJECTS)}>
                  All Tasks
                </Button>
              </VStack>
              <ProgressCharts />
            </HStack>
          </View>
          <View style={styles.lineCard}>
            <LineCharts />
          </View>
        </VStack>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  progressCard: {
    width: 380,
    height: 265,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#272a34',
    shadowRadius: 10,
    shadowColor: colors.shadow[Platform.OS === 'ios' ? 100 : 200],
    elevation: 10,
  },
  lineCard: {
    width: 380,
    height: 335,
    padding: 20,
    elevation: 10,
    borderRadius: 10,
    backgroundColor: '#272a34',
    shadowRadius: 10,
    shadowColor: colors.shadow[Platform.OS === 'ios' ? 100 : 200],
  },
  taskBox: {
    width: 50,
    height: 30,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#85c76d',
  },
  taskWrap: {
    width: 100,
    height: 50,
    fontSize: '12px',
    borderRadius: 10,
    backgroundColor: '#c25fff',
  },
});
