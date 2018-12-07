import React from "react";
import { Router, Stack, Scene } from "react-native-router-flux";

import LoginPage from "./pages/login/LoginPage";

const Routes = () => (
  <Router>
    <Stack key="root">
      <Scene key="login" component={LoginPage} title="Login" initial={true} />
    </Stack>
  </Router>
);

export default Routes;
