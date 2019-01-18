import React, {Component} from 'react';
import { StyleSheet } from 'react-native';
import {Router, Scene, Stack} from 'react-native-router-flux';
import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';
import BoasVindas from './components/BoasVindas';
import Principal from './components/Principal';

export default class Routes extends Component {
  render() {
    return (
        <Router sceneStyle={{ backgroundColor: '#115E54' }} titleStyle={{ color: '#fff' }} >
            <Stack key='root' sceneStyle={{ backgroundColor: '#115E54' }}>
                <Scene titleStyle={styles.navigationBarTitleStyle} key="boasVindas" component={BoasVindas} title="Bem-Vindo" />
                <Scene titleStyle={styles.navigationBarTitleStyle} key="formLogin" component={FormLogin} title="Login" />
                <Scene titleStyle={styles.navigationBarTitleStyle} key="formCadastro" component={FormCadastro} title="Cadastro" />
                <Scene titleStyle={styles.navigationBarTitleStyle} key="principal" component={Principal} title="Principal" />
            </Stack>
        </Router>
    )
  }
}

const styles = StyleSheet.create({
    navigationBarTitleStyle: {
      // centering for Android
     flex: 1,
     textAlign: 'center'
 }
});