import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Button
} from 'react-native'
import React from 'react'


import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';






const Header = () => {
  const navigation =useNavigation();
  
  return (
    
    <View style={{
      width: '100%',
      height: 50,
      margin: 10,
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomWidth: 0.2,
      borderBottomColor: '#8e8e8e',


    }}>
      
      <TouchableOpacity  
    // onPress={() => navigation.navigate(DrawerActions.openDrawer())}
    onPress={()=>navigation.openDrawer()}
      style={{ marginleft: 30 }}>

        <Image style={{
          width: 20,
          height: 20,
          marginleft: 30
        }}
          source={require('eshop/src/images/list.png')} />
      </TouchableOpacity>
      <Image style={{
        width: 70,
        height: 70,
        marginleft: 20
      }}
        source={require('eshop/src/images/logo.png')} />
      <TouchableOpacity style={{
        marginRight: 20,
        justifyContent: 'center',
        width: 50,
        height: 30,


      }}>


      </TouchableOpacity>

    </View>
  )
}

export default Header

const styles = StyleSheet.create({})