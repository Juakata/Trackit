import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import {
  TextInput, View, Text, ImageBackground, TouchableOpacity,
} from 'react-native';
import { Formik } from 'formik';
import styles from '../css/styles';
import { signin } from '../actions/index';
import bgImage from '../../assets/background.jpg';

class SigninForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
    };
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
            fetch(`https://still-retreat-45947.herokuapp.com/api/v1/login/${username}/${password}`)
              .then(response => response.json())
              .then(data => {
                if (typeof data.result === 'undefined') {
                  actions.resetForm();
                  signin(username);
                  navigation.navigate('Home', { name: 'Home' });
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
