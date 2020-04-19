import React from 'react';
import {Scene, Router, Stack} from 'react-native-router-flux';
import Login from './Login';

const AppRoutes = () => (
  <Router>
    <Stack key="root" hideNavBar>
      <Scene key="login" component={Login} title="Login" hideNavBar />
    </Stack>
  </Router>
);

export default AppRoutes;
