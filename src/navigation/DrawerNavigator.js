import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { ContactStackNavigator } from "./StackNavigator";
import {

    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';

import BottomTab from "../screens/BottomTab";

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      {/* <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      /> */}
    </DrawerContentScrollView>
  );
}



const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{
      headerShown: false,
    }}
    drawerContent={props => <CustomDrawerContent {...props} />}>

      <Drawer.Screen name="GoBack" component={BottomTab} />
      <Drawer.Screen name="Contact" component={ContactStackNavigator} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;