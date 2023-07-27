import React from 'react';
import OnBoarding from '..';
import paths from '../../../constants/routePaths';
import {useNavigation} from '@react-navigation/native';

const AboutOnBoarding = () => {
  const navigation = useNavigation();
  const handleNextPage = () => {
    navigation.navigate(paths.PURPOSEBOARDING);
  };

  return (
    <OnBoarding
      handleNextPage={handleNextPage}
      title={'Upgrade your skills for the future!'}
      description={
        'A common feature request from developers familiar with the web is background-image. To handle this use case, you can use the <ImageBackground> component, which has the same props as <Image>, and add whatever children to it you would like to layer on top of it'
      }
    />
  );
};

export default AboutOnBoarding;
