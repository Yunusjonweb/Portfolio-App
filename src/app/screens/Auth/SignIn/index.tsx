import React from 'react';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {handleAuth} from '../../../store/auth';
import paths from '../../../constants/routePaths';
import {useForm, Controller} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import PasswordInput from '../../../components/Inputs';
import PageWrapper from '../../../components/PageWrapper';
import {Text, VStack, Input, Button, FormControl} from 'native-base';
import {ImageBackground, SafeAreaView, StyleSheet} from 'react-native';

interface IFormData {
  email: string;
  password: string;
}

export default function SignIn() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<IFormData>();

  const onSubmit = async (values: IFormvalues) => {
    const {data} = await axios.post(
      'https://yulbasali.urinboydev.uz/api/login',
      values,
    );
    if (data) {
      const {token} = data;
      dispatch(handleAuth({token}));
      navigation.navigate(paths.HOME);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../../../assets/images/bg.png')}
        resizeMode="cover"
        style={styles.image}>
        <VStack space="10px" margin="20px">
          <Text fontSize="3xl" color="white.100" fontWeight="600">
            Sign in to your{'\n'}Account
          </Text>
          <Text fontSize="md" color="white.100">
            Sign in to your Account
          </Text>
        </VStack>
      </ImageBackground>
      <PageWrapper>
        <SafeAreaView>
          <VStack space="25px">
            <FormControl isRequired isInvalid={Boolean(errors?.email)}>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({field: {onChange, onBlur, value}}) => (
                  <Input
                    mt="20"
                    autoCapitalize="none"
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    placeholder="Email"
                  />
                )}
                name="email"
              />
              <FormControl.ErrorMessage>
                {errors.email && 'Please input your email!'}
              </FormControl.ErrorMessage>
            </FormControl>
            <FormControl isRequired isInvalid={Boolean(errors?.password)}>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({field: {onChange, onBlur, value}}) => (
                  <PasswordInput
                    onBlur={onBlur}
                    onChangeText={value => onChange(value)}
                    value={value}
                  />
                )}
                name="password"
              />
              <FormControl.ErrorMessage>
                {errors.password && 'Please input your password!'}
              </FormControl.ErrorMessage>
            </FormControl>
            <Text style={{textAlign: 'right'}} fontWeight="600">
              Forgot Password ?
            </Text>
            <Button shadow="1" onPress={handleSubmit(onSubmit)}>
              Login
            </Button>
          </VStack>
        </SafeAreaView>
      </PageWrapper>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 250,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
