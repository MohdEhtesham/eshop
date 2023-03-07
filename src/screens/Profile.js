import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../common/Header';
import auth, {firebase} from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();
  const user = firebase.auth().currentUser;

  return (
    <SafeAreaView>
      <Header />
      <View>
        <View>
          <TouchableOpacity>
            <Image
              style={{
                margin: 20,
                height: 100,
                width: 100,
                justifyContent: 'center',
                alignSelf: 'center',
              }}
              source={require('eshop/src/images/userlogo.png')}
            />
          </TouchableOpacity>

          <Text
            style={{
              justifyContent: 'center',
              alignSelf: 'center',
              fontSize: 20,
              marginBottom: 20,
            }}>
            {user.phoneNumber}
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('Accounts')}
          style={styles.prd}>
          <Image
            style={styles.imgs}
            source={require('eshop/src/images/user.png')}
          />
          <Text style={styles.profiledetails}>Account </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Address')}
          style={styles.prd}>
          <Image
            style={styles.imgs}
            source={require('eshop/src/images/hotel.png')}
          />
          <Text style={styles.profiledetails}>Address </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Orders')}
          style={styles.prd}>
          <Image
            style={styles.imgs}
            source={require('eshop/src/images/shopping-bag.png')}
          />
          <Text style={styles.profiledetails}>Orders </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Wishlist')}
          style={styles.prd}>
          <Image
            style={styles.imgs}
            source={require('eshop/src/images/heart.png')}
          />
          <Text style={styles.profiledetails}>Wishlist </Text>
        </TouchableOpacity>
        <View style={styles.containerFaq}>
          <TouchableOpacity>
            <Text style={styles.fatp}>FAQs</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.fatp}>About Us</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.fatp}>Terms Of Use</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.fatp}>Privacy Policy </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

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
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'center',
    shadowColor: 'black',
    justifyContent: 'center',
    alignSelf: 'center',
    margin: 2,
    borderBottomWidth: 0.4,
  },
  imgs: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 12,
  },
  containerFaq: {
    borderWidth: 0.2,
    borderRadius: 10,
    justifyContent: 'center',
    margin: 20,
    backgroundColor: 'white',
  },
  fatp: {
    fontSize: 15,
    fontWeight: '600',
    justifyContent: 'center',
    margin: 10,
    marginLeft: 60,
  },
});
