import {Text, View} from 'native-base';
import React, { useState } from 'react';
import {StyleSheet} from 'react-native';

export default function CrudScreen() {
  return (
    <View style={styles.container}>
        <Text>Crud</Text>
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
