import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Button,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';

const {width, height} = Dimensions.get('window');
const Login = ({navigation}) => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState('');
  const [phone, setPhone] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  getCurrentUser = async () => {
    const currentUser = await GoogleSignin.getCurrentUser();
    this.setState({currentUser});
  };

  async function signInWithPhoneNumber() {
    const confirmation = await auth().signInWithPhoneNumber(`+91${phone}`);
    // (`+91${phone}`);
    setConfirm(confirmation);
  }

  async function confirmCode() {
    try {
      var res = await confirm.confirm(code);

      console.log('success', res);
      navigation.navigate('DrawerNavigator');
    } catch (error) {
      Alert.alert('invalid Code');
      console.log('Invalid code.');
    }
  }
  if (!confirm) {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.logocontaier}>
            <Image
              style={styles.logo}
              source={require('eshop/src/images/logo.png')}
            />
          </View>

          <Text style={styles.photext}>PhoneNumber:</Text>
          <View style={styles.imgt}>
            <Image
              style={styles.img}
              source={require('eshop/src/images/126341.png')}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter Phone Number"
              onChangeText={txt => setPhone(txt)}
              keyboardType={'phone-pad'}></TextInput>
          </View>

          <TouchableOpacity
            onPress={() => signInWithPhoneNumber()}>
            <Text style={styles.btn}>Login</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.logocontaier}>
            <Image
              style={styles.logo}
              source={require('eshop/src/images/logo.png')}
            />
          </View>

          <Text style={styles.photext}>OTP:</Text>
          <View style={styles.imgt}>
            <Image
              style={styles.img}
              source={require('eshop/src/images/126341.png')}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter your OTP"
              value={code}
              onChangeText={text => setCode(text)}
              keyboardType={'number-pad'}></TextInput>
            {/* <Button title="Confirm Code" onPress={() => confirmCode()} /> */}
          </View>

          <TouchableOpacity onPress={() => confirmCode()}>
            <Text style={styles.btn}>confirm</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  logocontaier: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: '50%',
  },
  input: {
    alignSelf: 'center',
    width: '90%',
    fontSize: 20,
    padding: 10,
  },

  photext: {
    fontSize: 16,
    fontWeight: 'bold',
    width: '90%',
    alignSelf: 'center',
  },

  btn: {
    margin: 20,
    borderWidth: 1,
    width: '30%',
    justifyContent: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    borderRadius: 5,
    backgroundColor: 'skyblue',
  },
  img: {
    margin: 10,
    height: 30,
    width: 30,
    padding: 10,
    marginLeft: 20,
  },
  imgt: {
    backgroundColor: 'lightgrey',
    borderRadius: 10,
    flexDirection: 'row',
    borderWidth: 1,
    width: '90%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
 