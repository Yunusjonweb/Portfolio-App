import { Button, Input, Text, VStack, View } from 'native-base';
import React, { useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

export default function CrudScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text color="white.100" fontSize="2xl" fontWeight="600" textAlign="center">Add Portfolio</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#1a182d',
  },
});
