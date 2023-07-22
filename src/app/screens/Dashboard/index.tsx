import {Text, View} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
import Charts from '../../components/Charts';

export default function DashboardScreen() {
  return (
    <View style={styles.container}>
      <Text color="white.100" fontSize="lg" mt="10">
        Dashboard Page
      </Text>
      <Charts />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#1a182d',
  },
});
