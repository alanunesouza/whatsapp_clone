import React, {Component} from 'react';
import { View, Text, TextInput, Button, ImageBackground, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import {
  modificaEmail,
  modificaSenha,
  modificaNome,
  cadastraUsuario
} from '../actions/AutenticacaoActions';


class formCadastro extends Component {

  _cadastraUsuario() {
    const { nome, email, senha } = this.props;

    this.props.cadastraUsuario(nome, email, senha);
  }

  renderBtnCadastrar() {
    console.log(this.props)
    if(this.props.loading_cadastro) {
      return (
        <ActivityIndicator />
      )
    }
    return (
      <Button
        title="Cadastrar"
        color="#115E54"
        onPress={ () => this._cadastraUsuario() }
      />
    )
  }

  render() {
    return (
      <ImageBackground style={{ flex:1, width: null }} source={require('../images/bg.png')}>
        <View style={{ flex: 1, padding: 10 }}>
          <View style={{ flex: 4, justifyContent: 'center' }}>
            <TextInput
              value={this.props.nome}
              placeholder="Nome"
              style={{ fontSize: 20, height: 45 }}
              placeholderTextColor='#fff'
              onChangeText={texto => this.props.modificaNome(texto)}
            />
            <TextInput
              value={this.props.email}
              placeholder="E-mail"
              style={{ fontSize: 20, height: 45 }}
              placeholderTextColor='#fff'
              onChangeText={texto => this.props.modificaEmail(texto)}
            />
            <TextInput
              secureTextEntry={true}
              value={this.props.senha}
              placeholder="Senha"
              style={{ fontSize: 20, height: 45 }}
              placeholderTextColor='#fff'
              onChangeText={texto => this.props.modificaSenha(texto)}
            />
            <Text style={{ color: '#ff0000', fontSize: 18 }}>{this.props.erroCadastro}</Text>
          </View>
          <View style={{ flex: 1 }}>
            {this.renderBtnCadastrar()}
          </View>
        </View>
      </ImageBackground>
    )
  }
}

const mapStateToProps = state => (
  {
      nome: state.AutenticacaoReducer.nome,
      email: state.AutenticacaoReducer.email,
      senha: state.AutenticacaoReducer.senha,
      erroCadastro: state.AutenticacaoReducer.erroCadastro,
      loading_cadastro: state.AutenticacaoReducer.loading_cadastro
  }
)

export default connect(
  mapStateToProps,
  {
    modificaEmail,
    modificaSenha,
    modificaNome,
    cadastraUsuario
  })(formCadastro);