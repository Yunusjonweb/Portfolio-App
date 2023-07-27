import {Text, View} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';

export default function ProductivityScreen() {
  return (
    <View style={styles.container}>
      <Text color="white.100" fontSize="2xl" mt="5">
        Productivity Page
      </Text>
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
