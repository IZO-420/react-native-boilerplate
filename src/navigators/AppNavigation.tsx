import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../views/Home';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import IconAwsome from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../theme/Styles/Colors';
import {Text} from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNav = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarStyle: {width: '100%', padding: 10, height: 60},
      headerShown: false,
    }}>
    <Tab.Screen
      component={Home}
      name={'Home'}
      options={{
        tabBarIcon: ({focused}) => (
          <Icon
            name={focused ? 'home' : 'home-outline'}
            size={30}
            color={focused ? COLORS.PrimaryButton : COLORS.SecondaryText}
          />
        ),
        tabBarLabel: ({focused, color}) => {
          return (
            <Text
              style={{
                color: focused ? COLORS.PrimaryButton : COLORS.SecondaryText,
              }}>
              Home
            </Text>
          );
        },
      }}
    />
    <Tab.Screen
      component={Home}
      name={'Communitity'}
      options={{
        tabBarIcon: ({focused}) => (
          <IconAwsome
            name={'feed'}
            size={30}
            color={focused ? COLORS.PrimaryButton : COLORS.SecondaryText}
          />
        ),
        tabBarLabel: ({focused, color}) => {
          return (
            <Text
              style={{
                color: focused ? COLORS.PrimaryButton : COLORS.SecondaryText,
              }}>
              Communitity
            </Text>
          );
        },
      }}
    />
    <Tab.Screen
      component={Home}
      name={'Services'}
      options={{
        tabBarIcon: ({focused}) => (
          <Icon5
            name={'store-alt'}
            size={30}
            color={focused ? COLORS.PrimaryButton : COLORS.SecondaryText}
          />
        ),
        tabBarLabel: ({focused, color}) => {
          return (
            <Text
              style={{
                color: focused ? COLORS.PrimaryButton : COLORS.SecondaryText,
              }}>
              Services
            </Text>
          );
        },
      }}
    />
    <Tab.Screen
      component={Home}
      name={'Profile'}
      options={{
        tabBarIcon: ({focused}) => (
          <Icon5
            name={focused ? 'user-alt' : 'user'}
            size={30}
            color={focused ? COLORS.PrimaryButton : COLORS.SecondaryText}
          />
        ),
        tabBarLabel: ({focused, color}) => {
          return (
            <Text
              style={{
                color: focused ? COLORS.PrimaryButton : COLORS.SecondaryText,
              }}>
              Profile
            </Text>
          );
        },
      }}
    />
  </Tab.Navigator>
);
function AppNavigation(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="tab"
          component={TabNav}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
