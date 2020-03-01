import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import styles from './src/css/styles';
import rootReducer from './src/reducers/index';
import SigninForm from './src/containers/signinForm';

const user = {
  auth: [],
};

const store = createStore(rootReducer, user);

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <SigninForm />
      </View>
    </Provider>
  );
}
