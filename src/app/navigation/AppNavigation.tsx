import React, {useEffect} from 'react';
import {useColorScheme} from 'react-native';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
  RouteProp,
} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {navigationRef} from './utils';
import {useAppSelector} from '../hooks/Redux';
import BottomTabNavigation from './BottomTabNavigation';
import {AUTH_ROUTES, MAIN_ROUTES, ONBOARDING_ROUTES} from './Routes';

export type RootStackParamList = {};

export type ScreenNavigationProp<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type ScreenRouteProp<T extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  T
>;
export type ScreenProps<T extends keyof RootStackParamList> = {
  route: ScreenRouteProp<T>;
  navigation: ScreenNavigationProp<T>;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const ApplicationNavigator = () => {
  const colorScheme = useColorScheme();
  const {token, isRegistered} = useAppSelector((state: any) => state.auth);
  console.log(token, 8555);

  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
      ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {token ? (
          <>
            <Stack.Screen
              name="BottomTabNavigation"
              component={BottomTabNavigation}
            />
            {MAIN_ROUTES.map(route => {
              const {path, element: Component} = route;

              return (
                <Stack.Screen key={path} name={path} component={Component} />
              );
            })}
          </>
        ) : !isRegistered ? (
          <>
            {ONBOARDING_ROUTES.map(route => {
              const {path, element: Component} = route;

              return (
                <Stack.Screen key={path} name={path} component={Component} />
              );
            })}
          </>
        ) : (
          <>
            {AUTH_ROUTES.map(route => {
              const {path, element: Component} = route;
              return (
                <Stack.Screen key={path} name={path} component={Component} />
              );
            })}
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ApplicationNavigator;
