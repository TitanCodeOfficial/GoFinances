import React from 'react';

import {View, Image, StyleSheet} from 'react-native';

import {
    SignInButton,
    SignInButtonText,
    TextContainer
  } from './index.style';

  import {theme} from '../../styles/theme';

import GoogleIcon from '../../public/images/google-icon.png';

const GoogleSignInButton = ({onPress}) => {
  return (
    <SignInButton onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={GoogleIcon} />
      </View>
      <TextContainer>
        <SignInButtonText>Entrar com Google</SignInButtonText>
      </TextContainer>
    </SignInButton>
  );
};

const styles = StyleSheet.create({
    imageContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRightWidth: 2,
      borderRightColor: theme.colors.background,
      width: '20%'
    }
  })

export default GoogleSignInButton;
