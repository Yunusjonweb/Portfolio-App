import React from 'react';
import OnBoarding from '..';
import {useDispatch} from 'react-redux';
import {handleRegister} from '../../../store/auth';

const PurposeOnBoarding = () => {
  const dispatch = useDispatch();

  const handleNextPage = () => {
    dispatch(handleRegister({isRegistered: true}));
  };

  return (
    <OnBoarding
      handleNextPage={handleNextPage}
      title={'Access to a wide range of courses'}
      description={
        'An innovative IoT (internet of things) project that uses a water meter to know information about the drinking water consumed by consumers and to electronize the appeals from them.'
      }
    />
  );
};

export default PurposeOnBoarding;
