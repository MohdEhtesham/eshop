import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, Alert } from 'react-native'
import React, { useState, useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';
import auth, { firebase } from '@react-native-firebase/auth';
import { SafeAreaView } from 'react-native-safe-area-context';



const SignUp = ({ navigation }) => {
    // const user = firebase.auth().currentUser;
    const [initializing, setInitializing] = useState(true);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [passkey, setPasskey] = useState();
    const [user, setUser] = useState();

    function onAuthStateChanged(user) {

        // console.log("heloooooooo'",user.uid)
        setUser(user)
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);
    async function createAccount() {

        try {
            var eml = await auth().createUserWithEmailAndPassword(email, passkey, name);
            console.log('success', 'User account created & signed in!', eml.user.uid);
            // setUser(eml);
            navigation.navigate('Home')
            firestore()
                .collection('Users')
                .doc(eml.user.uid)
                .set({
                    name: name,
                    Email: email,
                    Password: passkey,
                })

        } catch (error) {
            if (error.code === 'failed') {
                console.log('failed!');
            }

            if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
            }
            console.error(error);
        }
    }
    return (
        <SafeAreaView>
            <View>
                <View style={styles.container}>

                    <View>
                        <Image
                            style={styles.logo}
                            source={require('eshop/src/images/logo.png')}
                        />
                    </View>
                    <View>
                        <View>
                            <Text style={styles.nm}>City:</Text>
                        </View>
                        <TextInput style={styles.name} placeholder='Enter your city'
                            onChangeText={(text) => setName(text)}>

                        </TextInput>
                    </View >

                    <View>
                        <View>
                            <Text style={styles.nm}>PinCode:</Text>
                        </View>
                        <TextInput style={styles.name} placeholder=''
                            onChangeText={(text) => setEmail(text)}>

                        </TextInput>
                    </View >
                    <View>
                        <View>
                            <Text style={styles.nm}>Password:</Text>
                        </View>
                        <TextInput placeholder='Enter your password'
                            placeholderTextColor={'black'} style={styles.name}
                            onChangeText={(text) => setPasskey(text)}
                            onChange={(text) => setPasskey(text)}>

                        </TextInput>
                    </View >
                    <View style={styles.btn}>

                        <Button title='SignUp' onPress={() => createAccount()} />
                    </View>

                    <View>

                    </View>











                </View>



            </View>

        </SafeAreaView>
    )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        height: "100%"

    },

    logo: {
        height: 100,
        width: 100,
        borderRadius: 50,
        alignSelf: 'center'
    },
    nm: {

        width: '90%',
        alignSelf: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        padding: 5

    },
    name: {
        borderWidth: 1,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 5,
        padding: 10,
    },
    btn: {
        width: '90%',
        alignSelf: 'center',
        margin: 30
    },


})