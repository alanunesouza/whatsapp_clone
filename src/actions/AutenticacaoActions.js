import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import b64 from 'base-64';

export const modificaNome = (texto) => {
    return {
        type: 'modifica_nome',
        payload: texto
    }
}

export const modificaEmail = (texto) => {
    return {
        type: 'modifica_email',
        payload: texto
    }
}

export const modificaSenha = (texto) => {
    return {
        type: 'modifica_senha',
        payload: texto
    }
}

export const cadastraUsuario = (nome, email, senha) => {
    return dispatch => {
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
    dispatch({ type: 'cadastro_usuario_sucesso' });
    Actions.boasVindas();
}

const cadastroUsuarioErro = (error, dispatch) => {
    dispatch({ type: 'cadastro_usuario_erro', payload: error.message });
}

export const autenticaUsuario = (email, senha) => {
    return dispatch => {
        firebase.auth().signInWithEmailAndPassword(email, senha)
            .then(value => loginUsuarioSucesso(dispatch))
            .catch(error => loginUsuarioErro(error, dispatch));
    }
}

const loginUsuarioSucesso = (dispatch) => {
    dispatch({ type: 'login_usuario_sucesso' });
    Actions.principal();
}

const loginUsuarioErro = (error, dispatch) => {
    dispatch({ type: 'login_usuario_erro', payload: error.message });
}