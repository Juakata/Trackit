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

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: [],
    };
  }

  render() {
    const { error } = this.state;
    const { navigation, signup } = this.props;
    return (
      <ImageBackground source={bgImage} style={styles.container}>
        <Formik
          initialValues={{ username: '', password: '', repeat: '' }}
          onSubmit={(values, actions) => {
            const { username, password, repeat } = values;
            fetch(`https://still-retreat-45947.herokuapp.com/api/v1/create/${username}/${password}/${repeat}`)
              .then(response => response.json())
              .then(data => {
                if (typeof data.id !== 'undefined') {
                  actions.resetForm();
                  signup(username);
                  navigation.navigate('Home', { name: 'Home' });
                } else {
                  if (typeof data.username !== 'undefined') {
                    this.setState({ error: data.username });
                  } if (typeof data.password !== 'undefined') {
                    this.setState({ error: data.password });
                  } else {
                    this.setState({ error: data.result });
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
                  placeholder="Repeat password"
                  onChangeText={props.handleChange('repeat')}
                  value={props.values.repeat}
                />
              </View>
              <View style={styles.buttonContainer}>
                <Text style={styles.error}>{error}</Text>
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
                  <Text style={styles.text}>Already an account?</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
      </ImageBackground>
    );
  }
}

SignupForm.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
  signup: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  signup: userAuth => dispatch(signup(userAuth)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
