import React from 'react';
import {Button, Text, VStack} from 'native-base';
import PageWrapper from '../../components/PageWrapper';
import GroupOnboarding from '../../../assets/images/groupOnboarding.svg';

interface IOnBoardingProps {
  title: string;
  description: string;
  handleNextPage: () => void;
  buttonTitle?: string;
}

const OnBoarding = ({
  title,
  description,
  handleNextPage,
  buttonTitle,
}: IOnBoardingProps) => {
  return (
    <PageWrapper>
      <VStack justifyContent="space-between" height="100%" paddingTop="0px">
        <VStack space="25px" justifyContent="center" flex={1}>
          <GroupOnboarding style={{width: '400', height: '300'}} />
          <Text fontSize="4xl" fontWeight="600" marginTop="85">
            {title}
          </Text>
          <Text color="gray.100">{description}</Text>
        </VStack>
        <Button shadow="1" onPress={handleNextPage}>
          {buttonTitle ?? 'Next'}
        </Button>
      </VStack>
    </PageWrapper>
  );
};

export default OnBoarding;
