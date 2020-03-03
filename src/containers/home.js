import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import {
  TextInput, View, Text, TouchableOpacity,
} from 'react-native';
import styles from '../css/styles';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Andoni',
    };
  }

  render() {
    const { auth } = this.props;
    return (
      <View>
        <Text>
          { auth }
        </Text>
      </View>
    );
  }
}

Home.propsTypes = {
  auth: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(Home);
