import React from 'react';
import {Icon} from 'native-base';
import {Platform} from 'react-native';
import CrudScreen from '../screens/Crud';
import {colors} from '../theme/variables';
import paths from '../constants/routePaths';
import HomeScreen from '../screens/Home/index';
import HomeIcon from '../../assets/icons/home.svg';
import FormIcon from '../../assets/icons/form.svg';
import DocumentIcon from '../../assets/icons/document.svg';
import DashboardScreen from '../screens/Home/pages/Dashboard';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

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
    {
      name: paths.CRUD,
      component: CrudScreen,
      options: {
        tabBarIcon: ({color}: any) => (
          <Icon as={<FormIcon style={{color}} />} size={24} />
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
