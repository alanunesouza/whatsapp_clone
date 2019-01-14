import React, {Component} from 'react';
import {Router, Scene, Stack} from 'react-native-router-flux';
import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';

export default class Routes extends Component {
  render() {
    return (
      <Router sceneStyle={{ backgroundColor: '#FFF' }}>
        <Stack key='root'>
          <Scene key="formLogin" component={FormLogin} title="Login" />
          <Scene key="formCadastro" component={FormCadastro} title="Cadastro" />
        </Stack>
      </Router>
    )
  }
}