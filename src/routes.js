import React from 'react';
import {Scene, Router, Stack} from 'react-native-router-flux';
import Login from './Login';
import Todo from './Todo';

const AppRoutes = () => (
  <Router>
    <Stack key="root" hideNavBar>
      <Scene key="login" component={Login} title="Login" hideNavBar />
      <Scene key="todo" component={Todo} title="Todo" hideNavBar />
    </Stack>
  </Router>
);

export default AppRoutes;
