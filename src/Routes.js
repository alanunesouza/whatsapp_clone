import React, {Component} from 'react';
import { StyleSheet } from 'react-native';
import {Router, Scene, Stack} from 'react-native-router-flux';
import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';
import BoasVindas from './components/BoasVindas';
import Principal from './components/Principal';
import AdicionarContato from './components/AdicionarContato';

export default class Routes extends Component {
  render() {
    return (
        <Router navigationBarStyle={{ backgroundColor: '#115E54' }} titleStyle={{ color: '#fff' }} >
            <Stack key='root' sceneStyle={{ backgroundColor: '#115E54' }}>
                <Scene titleStyle={styles.navigationBarTitleStyle} key="boasVindas" component={BoasVindas} title="Bem-Vindo" hideNavBar={true} />
                <Scene titleStyle={styles.navigationBarTitleStyle} key="formLogin" component={FormLogin} title="Login" hideNavBar={true} />
                <Scene titleStyle={styles.navigationBarTitleStyle} key="formCadastro" component={FormCadastro} title="Cadastro" hideNavBar={false} />
                <Scene titleStyle={styles.navigationBarTitleStyle} key="principal" component={Principal} title="Principal" hideNavBar={true} initial />
                <Scene titleStyle={styles.navigationBarTitleStyle} key="adicionarContato" component={AdicionarContato} title="Adicionar Contato" hideNavBar={false} />
            </Stack>
        </Router>
    )
  }
}

const styles = StyleSheet.create({
    navigationBarTitleStyle: {
     flex: 1,
     flexDirection: 'row',
     textAlign: 'center',
     alignItems: 'center',
     color: 'white'
 }
});