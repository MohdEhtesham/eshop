import { View,StyleSheet,Image } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
      const navigation =useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');},2000 );
    
    
  }, []);
  return (
    <View style={styles.logocontaier}>

<Image style={styles.logo} source={require('eshop/src/images/logo.png')} />
</View>
  )
}

export default Splash;

const styles = StyleSheet.create({


  logocontaier: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',

},
logo: {
    height: '40%',

},
})