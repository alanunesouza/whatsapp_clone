import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import Routes from './Routes';
import reducers from './reducers';

class App extends Component {

  componentDidMount() {
    //initialize Firebase
    firebase.initializeApp({
      apiKey: "AIzaSyAFWrn6d8IlkGdJ-9L1ZLYsFd_G6VhjmAg",
      authDomain: "whatsapp-clone-e2dea.firebaseapp.com",
      databaseURL: "https://whatsapp-clone-e2dea.firebaseio.com",
      projectId: "whatsapp-clone-e2dea",
      storageBucket: "whatsapp-clone-e2dea.appspot.com",
      messagingSenderId: "102281427237"
    });
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))} style={{ flex: 1 }}>
        <Routes />
      </Provider>
    );
  }
}
export default App;