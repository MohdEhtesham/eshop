import React, { useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  FifthScreenNavigator,
  FirstScreenNavigator,
  FourthScreenNavigator,
  SecondScreenNavigator,
  ThirdScreenNavigator
} from '../../CustomNavigation'
import { Image, } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { createDrawerNavigator } from '@react-navigation/drawer';




const Tab = createBottomTabNavigator();

const BottomTab = () => {
  const dispatch = useDispatch();
  const cartData = useSelector(state => state.Reducers);
  const cartDataWishlist = useSelector(state => state.Reducers2);
  


  return (
    

    

      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          labelStyle: { fontSize: 18 },

        }}
      
      >
        <Tab.Screen
          name="main"
          component={FirstScreenNavigator}
          options={{
            activeTintColor: 'green',
            tabBarIcon: () => (
              <Image
                style={{ height: 20, width: 20 }}
                source={require('eshop/src/images/home.png')
                } />
            ),
            tabBarLabel: 'Home'
          }}
        />
        <Tab.Screen
          name="search"
          component={SecondScreenNavigator}
          options={{
            activeTintColor: 'green',
            tabBarIcon: () => (
              <Image
                style={{ height: 20, width: 20 }}
                source={require('eshop/src/images/search.png')
                } />
            ),
            tabBarLabel: 'Search'
          }}
        />
        <Tab.Screen
          name="cart"
          component={ThirdScreenNavigator}
          options={{
            tabBarBadge: cartData.length,
            activeTintColor: 'green',
            tabBarIcon: () => (
              <Image
                style={{ height: 20, width: 20 }}
                source={require('eshop/src/images/1082823.png')
                } />
            ),
            tabBarLabel: 'Cart'
          }}

        />
        <Tab.Screen
          name="wishlist"
          component={FourthScreenNavigator}  // Replaced Screen 3
          options={{
            tabBarBadge: cartDataWishlist.length,
            tabBarIcon: () => (
              <Image
                style={{ height: 20, width: 20 }}
                source={require('eshop/src/images/wish.png')
                } />
            ),
            tabBarLabel: 'Wishlist'
          }}

        />
        <Tab.Screen
          name="profile"
          component={FifthScreenNavigator}  // Replaced Screen 3
          options={{
            tabBarIcon: () => (
              <Image
                style={{ height: 20, width: 20 }}
                source={require('eshop/src/images/user.png')
                } />
            ),
            tabBarLabel: 'Profile'
          }}

        />
      </Tab.Navigator>
    

  );
};


export default BottomTab;