import React from 'react';
import {StatusBar} from 'react-native';

import {GoogleSignin} from '@react-native-google-signin/google-signin';
import Router from './src/Router/router';

import {ThemeProvider} from 'styled-components';
import {theme} from './src/styles/theme'

GoogleSignin.configure({
  webClientId: '',
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router />
      <StatusBar backgroundColor={theme.colors.purple} />
    </ThemeProvider>
  );
};

export default App;
