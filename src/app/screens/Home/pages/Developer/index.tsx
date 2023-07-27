import axios from 'axios';
import {useSelector} from 'react-redux';
import {View, StyleSheet} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {Text, HStack, VStack} from 'native-base';
import Loading from '../../../../components/Loading';
import React, {useEffect, useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import CarouselCardItem, {
  ITEM_WIDTH,
  SLIDER_WIDTH,
} from '../../../../components/Carousel';

export default function DeveloperScreen() {
  const isCarousel = useRef(null);
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);
  const {token} = useSelector(state => state.auth);

  const fetchData = async () => {
    const {
      data: {data},
    } = await axios.get('https://yulbasali.urinboydev.uz/api/v1/users', {
      headers: {Authorization: `Bearer ${token}`},
    });
    setData(data);
    setIsLoaded(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {isLoaded && <Loading />}
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <VStack space="25px">
            <Text color="white.100" fontSize="4xl" mt="10">
              Classes
            </Text>
            <HStack justifyContent="space-between" alignItems="center">
              <Text color="white.100" fontSize="lg">
                Developers
              </Text>
              <Text color="white.100" fontSize="md">
                View All
              </Text>
            </HStack>
            <Carousel
              layout="default"
              layoutCardOffset={3}
              ref={isCarousel}
              data={data}
              renderItem={CarouselCardItem}
              sliderWidth={SLIDER_WIDTH}
              itemWidth={ITEM_WIDTH}
              inactiveSlideShift={0}
              useScrollView={true}
              autoplay={true}
              autoplayDelay={2000}
              loop={true}
            />
          </VStack>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#1a182d',
  },
  developerCard: {
    width: 220,
    height: 250,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
});
