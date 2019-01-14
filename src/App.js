import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Routes from './Routes';
import reducers from './reducers';

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)} style={{ flex: 1 }}>
        <Routes />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
});
