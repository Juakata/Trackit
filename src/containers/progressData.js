import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import {
  View, Text,
} from 'react-native';
import styles from '../css/styles';

class ProgressData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nN: 0,
      nL: 0,
      nC: 0,
      nR: 0,
    };
  }

  checkProgress = () => {
    
  }

  render() {
    const {
      nN,
      nL,
      nC,
      nR,
    } = this.state;
    return (
      <View>
        <Text style={styles.titleDataC}>Networking</Text>
        <View>
          <Icon
            name="ios-time"
            size={20}
            color="rgba(255, 255, 255, 0.7)"
            style={styles.userIcon}
          />
          <Text>{nN}</Text>
        </View>
        <Text style={styles.titleDataC}>Looking for job</Text>
        <View>
          <Icon
            name="ios-time"
            size={20}
            color="rgba(255, 255, 255, 0.7)"
            style={styles.userIcon}
          />
          <Text>{nL}</Text>
        </View>
        <Text style={styles.titleDataC}>Coding Challenges</Text>
        <View>
          <Icon
            name="ios-time"
            size={20}
            color="rgba(255, 255, 255, 0.7)"
            style={styles.userIcon}
          />
          <Text>{nC}</Text>
        </View>
        <Text style={styles.titleDataC}>Relaxing</Text>
        <View>
          <Icon
            name="ios-time"
            size={20}
            color="rgba(255, 255, 255, 0.7)"
            style={styles.userIcon}
          />
          <Text>{nR}</Text>
        </View>
      </View>
    );
  }
}

ProgressData.propTypes = {
  auth: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(ProgressData);
