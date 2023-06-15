// // // // In App.js in a new project

// import * as React from 'react';
// import {SafeAreaView, Text} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import BottomTab from './src/screens/BottomTab';
// import Login from './src/screens/Login';
// import Splash from './src/screens/Splash';
// import DrawerNavigator from './src/navigation/DrawerNavigator';

// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         screenOptions={{
//           headerShown: false,
//           labelStyle: {fontSize: 18},
//         }}>
//         <Stack.Screen name="Splash" component={Splash} />
//         <Stack.Screen name="Login" component={Login} />
//         <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;






import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import CustomApi from './src/common/customApi';

const App = () => {

  const url = "https://sv443.net/jokeapi/v2/joke/Programming?type=single";
  const { data, loading, error } = CustomApi(url);

  if (loading) return (
    < Text style={{justifyContent:'center', alignItems:'center', flex:1}}>Loading...</Text>
  )

  return (
    <SafeAreaView>
      {error && <Text>{error}</Text>}
      {data && <View>{<Text>{data}</Text>}</View>}
    </SafeAreaView>
  );
};



export default App