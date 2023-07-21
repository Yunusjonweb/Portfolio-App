import paths from '../constants/routePaths';
import SignIn from '../screens/Auth/SignIn';
import DashboardScreen from '../screens/Dashboard';
import HomeScreen from '../screens/Home/index';
import AboutOnBoarding from '../screens/Onboarding/pages/About';
import PurposeOnBoarding from '../screens/Onboarding/pages/Purpose';

export const ONBOARDING_ROUTES = [
  {
    path: paths.ABOUTONBOARDING,
    element: AboutOnBoarding,
  },
  {
    path: paths.PURPOSEBOARDING,
    element: PurposeOnBoarding,
  },
];

export const AUTH_ROUTES = [
  {
    path: paths.SIGNIN,
    element: SignIn,
  },
];

export const MAIN_ROUTES = [
  {
    path: paths.HOME,
    element: HomeScreen,
  },
  {
    path:paths.DASHBOARD,
    element: DashboardScreen,
  }
];
