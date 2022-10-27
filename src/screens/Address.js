import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react';
import Header from '../common/Header';
import auth, { firebase } from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();
  const user = firebase.auth().currentUser;


  return (
    <SafeAreaView>
      <Header />
      <View  >
       
        <TouchableOpacity
          onPress={() => navigation.navigate('AddAdress')}
          style={styles.prd}
        >
          <Image style={styles.imgs}
            source={require('eshop/src/images/user.png')} />
          <Text style={styles.profiledetails}>  Add Address </Text>
        </TouchableOpacity>
       
      </View>
    </SafeAreaView>


  )
}

export default Profile

const styles = StyleSheet.create({
  profiledetails: {
    fontSize: 15,
    fontWeight: '600',
    margin: 2,
    width: '80%',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 7,

  },
  prd: {
    flexDirection: 'row', width: '90%',
    justifyContent: 'center',
    shadowColor:'black',
    justifyContent: 'center',
    alignSelf: 'center',
    margin: 2,
    borderBottomWidth:.4
  },
  imgs: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 12
  },
 

})