// @flow
import {
     createBottomTabNavigator,
     createDrawerNavigator, 
     createSwitchNavigator, 
     createStackNavigator 
} from 'react-navigation';
import { Platform } from 'react-native';
// the containers
import Login from '../containers/Login';
import Dashboard from '../containers/Dashboard';


// Navigation Options configurations
import { 
    commonStackNavigationOptions,
    mainDrawerNavigationOptions,
    homeTabNavigationOptions,
    authStackNavigationOptions,
    noHeaderStackNavigationOptions,
} from './NavigationOptions';

//stack navigators
const AuthStack = createStackNavigator({
        Login: { screen: Login },
    },
    Platform.OS === 'ios' ? noHeaderStackNavigationOptions : authStackNavigationOptions
);

const DashboardStack = createStackNavigator({
        Dashboard: { screen: Dashboard }
    },
    commonStackNavigationOptions 
);

const CalenderStack = createStackNavigator({
    Calendar: { screen: Dashboard }
},
commonStackNavigationOptions 
);

const NotificationStack = createStackNavigator({
    Notification: { screen: Dashboard }
},
commonStackNavigationOptions 
);

//Tab Navigator
const TabNavigator = createBottomTabNavigator({
        DashboardStack: { 
            screen: DashboardStack,
            navigationOptions: {
                title: 'Dashboard',
            }  
        },
        CalenderStack: { 
            screen: CalenderStack,
            navigationOptions: {
                title: 'Calendar',
            }  
        },
        NotificationStack: { 
            screen: NotificationStack,
            navigationOptions: {
                title: 'Notifications',
            }  
        }
    },
    homeTabNavigationOptions
);

//Drawer Navigator
const MainDrawerNavigator = createDrawerNavigator({
        TabNavigator: { screen: TabNavigator }
    },
    mainDrawerNavigationOptions
);

//Main App Navigation
const AppNavigation = createSwitchNavigator({
    AuthStack: { screen: AuthStack },
    App: { screen: MainDrawerNavigator }
});

export default AppNavigation;
