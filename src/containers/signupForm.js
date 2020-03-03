import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import {
  TextInput, View, Text, ImageBackground, TouchableOpacity,
} from 'react-native';
import { Formik } from 'formik';
import styles from '../css/styles';
import { signup } from '../actions/index';
import bgImage from '../../assets/background.jpg';

const SignupForm = ({ navigation }) => (
  <ImageBackground source={bgImage} style={styles.container}>
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={values => {
        const { username, password } = values;
        const errorElement = document.getElementById('error');
        fetch(`https://still-retreat-45947.herokuapp.com/api/v1/login/${username}/${password}`)
          .then(response => response.json())
          .then(data => {
            if (typeof data.result === 'undefined') {
              errorElement.innerHTML = 'User';
            } else {
              switch (data.result) {
                case 'not_found':
                  errorElement.innerHTML = 'Incorrect User';
                  break;
                case 'wrong_password':
                  errorElement.innerHTML = 'Incorrect Password';
                  break;
                default:
              }
            }
          })
          .catch(() => {
            document.getElementById('error').innerHTML = 'Wrong Data';
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
              placeholder="Repeat Password"
              onChangeText={props.handleChange('password')}
              value={props.values.password}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Text id="error" style={styles.error} />
            <TouchableOpacity
              style={styles.btnSession}
              onPress={props.handleSubmit}
            >
              <Text style={styles.text}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnSession}
              onPress={() => navigation.navigate('Signin', { name: 'Signin' })}
            >
              <Text style={styles.text}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
  </ImageBackground>
);

SignupForm.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  values: PropTypes.instanceOf(Object),
};

SignupForm.defaultProps = {
  handleChange: null,
  handleSubmit: null,
  values: { username: '', password: '' },
};

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  signup: userAuth => dispatch(signup(userAuth)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
