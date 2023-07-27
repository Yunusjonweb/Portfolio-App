import CrudScreen from '../screens/Crud';
import paths from '../constants/routePaths';
import SignIn from '../screens/Auth/SignIn';
import HomeScreen from '../screens/Home/index';
import ProjectsScreen from '../screens/Home/pages/Projects';
import DashboardScreen from '../screens/Home/pages/Dashboard';
import DeveloperScreen from '../screens/Home/pages/Developer';
import AboutOnBoarding from '../screens/Onboarding/pages/About';
import ProductivityScreen from '../screens/Home/pages/Productivity';
import PurposeOnBoarding from '../screens/Onboarding/pages/Purpose';
import ProductsItem from '../screens/Home/pages/Projects/ProductItem';

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
    path: paths.DASHBOARD,
    element: DashboardScreen,
  },
  {
    path: paths.DEVELOPER,
    element: DeveloperScreen,
  },
  {
    path: paths.CRUD,
    element: CrudScreen,
  },
  {
    path: paths.PRODUCTIVITY,
    element: ProductivityScreen,
  },
  {
    path: paths.PROJECTS,
    element: ProjectsScreen,
  },
  {
    path: paths.PRODUCTSITEM,
    element: ProductsItem,
  },
];
