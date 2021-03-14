import React from "react";
import { hot } from "react-hot-loader/root";

import Routes from 'components/routes/Routes';

class App extends React.Component {
  render() {
    return <Routes />

  }
}

export default hot(App);
