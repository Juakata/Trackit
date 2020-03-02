import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import {
  Button, TextInput, View, Text, ImageBackground,
} from 'react-native';
import { Formik } from 'formik';
import styles from '../css/styles';
import signin from '../actions/index';
import bgImage from '../../assets/background.jpg';

const SigninForm = () => (
  <ImageBackground source={bgImage} style={styles.container}>
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={values => {
        const { username, password } = values;
        fetch(`https://still-retreat-45947.herokuapp.com/api/v1/login/${username}/${password}`)
          .then(response => response.json())
          .then(data => {
            console.log(data);
          })
          .catch(error => {
            console.log(error);
          });
      }}
    >
      { props => (
        <View>
          <Text style={styles.logo}>Track.it</Text>
          <View>
            <Icon
              name="ios-person"
              size={28}
              color="rgba(255, 255, 255, 0.7)"
              style={styles.icon}
            />
            <TextInput
              style={styles.input}
              placeholder="Username"
              onChangeText={props.handleChange('username')}
              value={props.values.username}
            />
          </View>
          <View>
            <Icon
              name="ios-lock"
              size={28}
              color="rgba(255, 255, 255, 0.7)"
              style={styles.icon}
            />
            <TextInput
              style={styles.input}
              secureTextEntry
              placeholder="Password"
              onChangeText={props.handleChange('password')}
              value={props.values.password}
            />
          </View>
          <Button title="Sign In" onPress={props.handleSubmit} />
        </View>
      )}
    </Formik>
  </ImageBackground>
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

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  signin: userAuth => dispatch(signin(userAuth)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SigninForm);
