import React, {createContext, useContext, useState} from "react";

import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

import { useNavigation } from '@react-navigation/native';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState({})
    const navigation = useNavigation()

    async function signIn() {
        try {
            const { idToken } = await GoogleSignin.signIn();

            const googleCredential = auth.GoogleAuthProvider.credential(idToken);

            auth().signInWithCredential(googleCredential);
    
            setUser(auth().currentUser)
            navigation.navigate('Home');
          } catch (err) {
            console.log(err);
          }
    }

    async function signOut(){
        await GoogleSignin.signOut();
        setUser({})
        navigation.navigate('Login');
    }

    return <AuthContext.Provider value={{user, signIn, signOut}}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext)
}