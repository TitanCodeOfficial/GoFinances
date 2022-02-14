import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {useAuth} from '../../contexts/auth';
import {theme} from '../../styles/theme';

const Home = () => {
  const {signOut} = useAuth();

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.purple,
      }}>
      <TouchableOpacity
        style={{
          backgroundColor: theme.colors.white,
          width: 80,
          height: 30,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 4
        }}
        onPress={signOut}>
        <Text
          style={{
            color: theme.colors.signInButtonText,
          }}>
          Sair
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
