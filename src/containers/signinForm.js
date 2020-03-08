import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import {
  TextInput, View, Text, ImageBackground, TouchableOpacity, Image,
} from 'react-native';
import { Formik } from 'formik';
import styles from '../css/styles';
import { signin } from '../actions/index';
import bgImage from '../../assets/background.jpg';
import logo from '../../assets/logo.png';

class SigninForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
    };
  }

  makeRequest(username, password, actions, signin, navigation) {
    fetch(`https://still-retreat-45947.herokuapp.com/api/v1/login/${username}/${password}`)
      .then(response => response.json())
      .then(data => {
        if (typeof data.result === 'undefined') {
          actions.resetForm();
          signin(username);
          navigation.pop();
        } else {
          switch (data.result) {
            case 'not_found':
              this.setState({ error: 'Incorrect User' });
              break;
            case 'wrong_password':
              this.setState({ error: 'Incorrect Password' });
              break;
            default:
          }
        }
      })
      .catch(() => {
        this.setState({ error: 'Wrong Data' });
      });
  }

  render() {
    const { error } = this.state;
    const { navigation, signin } = this.props;
    return (
      <ImageBackground source={bgImage} style={styles.container}>
        <Formik
          initialValues={{ username: '', password: '' }}
          onSubmit={(values, actions) => {
            const { username, password } = values;
            this.makeRequest(username, password, actions, signin, navigation);
          }}
        >
          { props => (
            <View>
              <View style={styles.logoContainer}>
                <Image source={logo} style={styles.logo} />
              </View>
              <View>
                <TextInput
                  style={styles.input}
                  placeholder="Username"
                  onChangeText={props.handleChange('username')}
                  value={props.values.username}
                />
              </View>
              <View>
                <TextInput
                  style={styles.input}
                  secureTextEntry
                  placeholder="Password"
                  onChangeText={props.handleChange('password')}
                  value={props.values.password}
                />
              </View>
              <View style={styles.buttonContainer}>
                <Text style={styles.error}>{error}</Text>
                <TouchableOpacity style={styles.btnSession} onPress={props.handleSubmit}>
                  <Text style={styles.text}>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.btnSession}
                  onPress={() => navigation.navigate('Signup', { name: 'Signup' })}
                >
                  <Text style={styles.text}>Create a new account!</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
      </ImageBackground>
    );
  }
}

SigninForm.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
  signin: PropTypes.PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  signin: userAuth => dispatch(signin(userAuth)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SigninForm);
