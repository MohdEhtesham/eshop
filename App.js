// // In App.js in a new project

// import * as React from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import BottomTab from './src/screens/BottomTab';
// import Login from './src/screens/Login';
// import Splash from './src/screens/Splash';


// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer >
//       <Stack.Navigator   screenOptions={{
//           headerShown: false,
//           labelStyle: { fontSize: 18 },

//         }}>
//         <Stack.Screen name="Splash" component={Splash} />
//         <Stack.Screen name="Login" component={Login} />
//         <Stack.Screen name="BottomTab" component={BottomTab} />

        
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;


import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import DrawerNavigator from "./src/navigation/DrawerNavigator";




 const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
export default App;






