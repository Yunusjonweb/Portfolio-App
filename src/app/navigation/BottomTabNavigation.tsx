import React from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {colors} from '../theme/variables';
import paths from '../constants/routePaths';
import HomeIcon from '../../assets/icons/home.svg';
import DocumentIcon from '../../assets/icons/document.svg';
import {Icon} from 'native-base';
import HomeScreen from '../screens/Home/index';
import DashboardScreen from '../screens/Dashboard';

const Tab = createBottomTabNavigator();

const screenOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarActiveTintColor: colors.main[100],
  tabBarStyle: {
    elevation: 20,
    backgroundColor: colors.white[100],
    height: Platform.OS === 'android' ? 80 : 90,
    paddingTop: 10,
    paddingBottom: 20,
    paddingHorizontal: 16,
    shadowOffset: {width: 0, height: -15},
    shadowColor: Platform.OS === 'android' ? '#000' : 'rgba(0, 0, 0, 0.05)',
    shadowOpacity: 24,
    shadowRadius: 24,
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 0,
  },
  tabBarItemStyle: {
    height: 50,
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 30,
  },
  tabBarIconStyle: {
    height: 30,
    color: colors.main[100],
  },
};

const BottomTabNavigation = () => {
  const tabScreens = [
    {
      name: paths.HOME,
      component: HomeScreen,
      options: {
        tabBarIcon: ({color}: any) => (
          <Icon as={<HomeIcon style={{color}} />} size={24} />
        ),
      },
    },
    {
      name: paths.DASHBOARD,
      component: DashboardScreen,
      options: {
        tabBarIcon: ({color}: any) => (
          <Icon as={<DocumentIcon style={{color}} />} size={24} />
        ),
      },
    },
  ];

  return (
    <Tab.Navigator initialRouteName={paths.HOME} screenOptions={screenOptions}>
      {tabScreens.map(tab => (
        <Tab.Screen
          name={tab.name}
          component={tab.component}
          options={tab.options}
          key={tab.name}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
