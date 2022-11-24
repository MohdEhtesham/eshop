import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import NestedScreen from "./src/screens/NestedScreen";
import Main from "./src/screens/Main";
import Search from "./src/screens/Search";
import Cart from "./src/screens/Cart";
import Wishlist from "./src/screens/Wishlist";
import Profile from "./src/screens/Profile";
import Accounts from "./src/screens/Accounts";
import Address from "./src/screens/Address";
import Orders from "./src/screens/Orders";
import AddAdress from "./src/screens/ AddAdress";
const Stack = createStackNavigator();  // creates object for Stack Navigator

const FirstScreenNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }} >
      <Stack.Screen
        name="Main"
        component={Main}
      />
      <Stack.Screen
        name="NestedScreen"
        component={NestedScreen}
      />
    </Stack.Navigator>
  );
}

export { FirstScreenNavigator }; // Stack-Navigator for Screen 1 Tab

const SecondScreenNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}     >
      <Stack.Screen
        name="Search"
        component={Search}
      />
      <Stack.Screen
        name="NestedScreen2"
        component={NestedScreen}
      />
    </Stack.Navigator>
  );
}

export { SecondScreenNavigator }; // Stack-Navigator for Screen 2 Tab

const ThirdScreenNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}  >
      <Stack.Screen
        name="Cart"
        component={Cart}
      />
      <Stack.Screen
        name="NestedScreen3"
        component={NestedScreen}
      />
    </Stack.Navigator>
  );
}

export { ThirdScreenNavigator };  // Stack-Navigator for Screen 3 Tab

const FourthScreenNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}  >
      <Stack.Screen
        name="Wishlist"
        component={Wishlist}
      />
      <Stack.Screen
        name="NestedScreen4"
        component={NestedScreen}
      />
    </Stack.Navigator>
  );
}

export { FourthScreenNavigator };  // Stack-Navigator for Screen 3 Tab
const FifthScreenNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }} >
      <Stack.Screen
        name="Profile"
        component={Profile}
      />
      <Stack.Screen
        name="Accounts"
        component={Accounts}
      />
      <Stack.Screen
        name="Address"
        component={Address}
      />
      <Stack.Screen
        name="Orders"
        component={Orders}
      />
      <Stack.Screen
        name="Wishlist"
        component={Wishlist}
      />
      <Stack.Screen
        name="AddAdress"
        component={AddAdress}
      />
     
      <Stack.Screen
        name="NestedScreen5"
        component={NestedScreen}
      />
    </Stack.Navigator>
  );
}

export { FifthScreenNavigator };  // Stack-Navigator for Screen 3 Tab