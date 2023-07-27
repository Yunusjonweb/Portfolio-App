import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import ProductsItem from './ProductItem';
import {colors} from '../../../../theme/variables';
import SwitchSelector from 'react-native-switch-selector';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, VStack, FlatList, Button} from 'native-base';

export default function ProjectsScreen() {
  const [selectedTab, setSelectedTab] = useState('overview');

  const options = [
    {label: 'Favorites', value: 'favorites'},
    {label: 'Recents', value: 'recents'},
    {label: 'All', value: 'all'},
  ];

  const data = [
    {id: 1, projectTitle: 'Coca-Cola', projectName: 'Design'},
    {id: 2, projectTitle: 'Coca-Cola', projectName: 'Design'},
    {id: 3, projectTitle: 'Coca-Cola', projectName: 'Design'},
    {id: 4, projectTitle: 'Coca-Cola', projectName: 'Design'},
  ];

  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
        <VStack space="25px">
          <Text
            color="white.100"
            fontWeight="600"
            fontSize="2xl"
            textAlign="center">
            Projects
          </Text>
          <SwitchSelector
            height={40}
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
          {data && (
            <FlatList
            data={data}
            renderItem={ProductsItem}
            numColumns={2}
            keyExtractor={item => item.id}
            />
            )}
        </VStack>
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