import React from 'react';
import { Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { theme } from '../../styles';
import CustomDrawer from './CustomDrawer';

//Tab naviagations options
export const homeTabNavigationOptions = {
    navigationOptions: ({ navigation }) => ({
        tabBarIcon: () => {
            const { routeName } = navigation.state;
            //Setting the icon for the tabs
            if (routeName === 'DashboardStack') {
                return <Icon name="home" size={25} color={theme.DARK_GREY} />;
            } else if (routeName === 'CalenderStack') {
                return <Icon name="calendar" size={20} color={theme.DARK_GREY} />;
            } else if (routeName === 'NotificationStack') {
                return <Icon name="bell" size={20} color={theme.DARK_GREY} />;
            }
        }
    }),
    backBehavior: 'none',
    tabBarOptions: {
        activeTintColor: theme.DARK_GREY,
        activeBackgroundColor: theme.VERY_LIGHT_GREY,
        inactiveTintColor: theme.DARK_GREY,
    },
    initialRouteName: 'DashboardStack',
};

//Stack naviagations options
export const authStackNavigationOptions = {
    // headerMode: 'none',
    navigationOptions: {
        headerTitleStyle: {
            flex: 1,
            textAlign: 'center',
        },
        headerRight: (<Text></Text>)
    }
};

export const noHeaderStackNavigationOptions = {
    headerMode: 'none',
};

export const commonStackNavigationOptions = {
    navigationOptions: {
        headerTintColor: theme.WHITE_COLOR,
        headerStyle: {
          backgroundColor: theme.PRIMARY_COLOR,
        },
        headerTitleStyle: {
            flex: 1,
            textAlign: 'center',
        },
        headerLeft: (<Text></Text>),
        headerRight: (<Text></Text>)
    }
};

//Drawer naviagations options
export const mainDrawerNavigationOptions = {
    contentComponent: props => <CustomDrawer {...props} />
};
