import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import b64 from 'base-64';
import {
    MODIFICA_EMAIL,
    MODIFICA_SENHA,
    MODIFICA_NOME,
    CADASTRO_USUARIO_SUCESSO,
    CADASTRO_USUARIO_ERRO,
    LOGIN_USUARIO_SUCESSO,
    LOGIN_USUARIO_ERRO,
    LOGIN_EM_ANDAMENTO,
    CADASTRO_EM_ANDAMENTO
} from './types';

export const modificaNome = (texto) => {
    return {
        type: MODIFICA_NOME,
        payload: texto
    }
}

export const modificaEmail = (texto) => {
    return {
        type: MODIFICA_EMAIL,
        payload: texto
    }
}

export const modificaSenha = (texto) => {
    return {
        type: MODIFICA_SENHA,
        payload: texto
    }
}

export const cadastraUsuario = (nome, email, senha) => {
    return dispatch => {

        dispatch({ type: CADASTRO_EM_ANDAMENTO });

        firebase.auth().createUserWithEmailAndPassword(email, senha)
            .then(user => {
                let emailB64 = b64.encode(email);

                firebase.database().ref(`contatos/${emailB64}`)
                    .push({ nome })
                    .then(value => cadastroUsuarioSucesso(dispatch))

            })
            .catch(error => cadastroUsuarioErro(error, dispatch));
    }
}

const cadastroUsuarioSucesso = (dispatch) => {
    dispatch({ type: CADASTRO_USUARIO_SUCESSO });
    Actions.boasVindas();
}

const cadastroUsuarioErro = (error, dispatch) => {
    dispatch({ type: CADASTRO_USUARIO_ERRO, payload: error.message });
}

export const autenticaUsuario = (email, senha) => {
    return dispatch => {

        dispatch({ type: LOGIN_EM_ANDAMENTO });

        firebase.auth().signInWithEmailAndPassword(email, senha)
            .then(value => loginUsuarioSucesso(dispatch))
            .catch(error => loginUsuarioErro(error, dispatch));
    }
}

const loginUsuarioSucesso = (dispatch) => {
    dispatch({ type: LOGIN_USUARIO_SUCESSO });
    Actions.principal();
}

const loginUsuarioErro = (error, dispatch) => {
    dispatch({ type: LOGIN_USUARIO_ERRO, payload: error.message });
}