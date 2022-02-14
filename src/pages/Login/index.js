import React from 'react';
import {Image} from 'react-native';
import {useAuth} from '../../contexts/auth';
import {
  PurpleView,
  OrangeView,
  LogoView,
  LogoText,
  InfoText,
  LoginText,
} from './index.style';

import GoogleSignInButton from '../../components/GoogleSignInButton';

import Logo from '../../public/images/logo.png';

const Login = () => {
  const {signIn} = useAuth();

  return (
    <>
      <PurpleView>
        <LogoView>
          <Image source={Logo} />
          <LogoText>gofinances</LogoText>
        </LogoView>

        <InfoText>Controle suas finanças de forma muito simples</InfoText>
        <LoginText>Faça seu login clicando no botão abaixo</LoginText>
      </PurpleView>
      <OrangeView>
        <GoogleSignInButton onPress={signIn} />
      </OrangeView>
    </>
  );
};

export default Login;
