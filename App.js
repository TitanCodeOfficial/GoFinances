import React from 'react';
import {StatusBar} from 'react-native';

import {GoogleSignin} from '@react-native-google-signin/google-signin';
import Router from './src/Router/router';

import {ThemeProvider} from 'styled-components';
import {theme} from './src/styles/theme'

GoogleSignin.configure({
  webClientId: '651988040094-1qnla6thf78aru18accflofvhkvdlhg0.apps.googleusercontent.com',
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
