import {Text, View} from 'native-base';
import React, { useState } from 'react';
import {StyleSheet} from 'react-native';
import Loading from '../../components/Loading';

export default function DashboardScreen() {
  const [loader,setLoader]=useState(false);
  return (
    <View style={styles.container}>
      {loader?(
        <Text color="white.100" fontSize="lg" mt="10">
        Dashboard Page
      </Text>
      ):<Loading/>}
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
