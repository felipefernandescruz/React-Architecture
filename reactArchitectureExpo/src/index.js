import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";

import Routes from "./routes";
import reducers from "./reducers";

class App extends Component {
  componentWillMount() {}

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
