/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {NativeBaseProvider, Box, Text, Center} from 'native-base';
import {theme} from './app/theme';
const App = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <Box>
        <Center>
          <Text marginTop="200px">Hello world</Text>
        </Center>
      </Box>
    </NativeBaseProvider>
  );
};

export default App;
