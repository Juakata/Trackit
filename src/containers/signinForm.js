import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, TextInput, View, Text,
} from 'react-native';
import { Formik } from 'formik';
import styles from '../css/styles';

const SigninForm = () => (
  <View style={styles.container}>
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={values => {
        
      }}
    >
      { props => (
        <View>
          <Text style={styles.logo}>Track.it</Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
            onChangeText={props.handleChange('username')}
            value={props.values.username}
          />
          <TextInput
            style={styles.input}
            secureTextEntry
            placeholder="Password"
            onChangeText={props.handleChange('password')}
            value={props.values.password}
          />
          <Button title="Sign In" onPress={props.handleSubmit} />
        </View>
      )}
    </Formik>
  </View>
);

SigninForm.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  values: PropTypes.instanceOf(Object),
};

SigninForm.defaultProps = {
  handleChange: null,
  handleSubmit: null,
  values: { username: '', password: '' },
};

export default SigninForm;
