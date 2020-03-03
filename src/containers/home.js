import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import {
  View, ScrollView, Text,
} from 'react-native';
import styles from '../css/styles';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
    };
  }

  render() {
    const { auth } = this.props;
    const { progress } = this.state;
    return (
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.homeContainer}>
          <View style={styles.box}>
            <Icon
              name="ios-person"
              size={90}
              color="rgba(255, 255, 255, 0.7)"
              style={styles.userIcon}
            />
            <Text>{ auth }</Text>
          </View>
          <View style={styles.box}>
            <Icon
              name="ios-time"
              size={90}
              color="rgba(255, 255, 255, 0.7)"
              style={styles.userIcon}
            />
            <Text>{ progress }</Text>
          </View>
          <View style={styles.box}>
            <Icon
              name="ios-people"
              size={90}
              color="rgba(255, 255, 255, 0.7)"
              style={styles.userIcon}
            />
            <Text>Networking</Text>
          </View>
          <View style={styles.box}>
            <Icon
              name="ios-search"
              size={90}
              color="rgba(255, 255, 255, 0.7)"
              style={styles.userIcon}
            />
            <Text>Looking for job</Text>
          </View>
          <View style={styles.box}>
            <Icon
              name="ios-desktop"
              size={90}
              color="rgba(255, 255, 255, 0.7)"
              style={styles.userIcon}
            />
            <Text>Coding Challenges</Text>
          </View>
          <View style={styles.box}>
            <Icon
              name="ios-basketball"
              size={90}
              color="rgba(255, 255, 255, 0.7)"
              style={styles.userIcon}
            />
            <Text>Relaxing</Text>
          </View>
          <View style={styles.lastBox}>
            <View style={styles.subBox}>
              <Icon
                name="ios-fitness"
                size={90}
                color="rgba(255, 255, 255, 0.7)"
                style={styles.lastIcon}
              />
            </View>
            <View style={styles.subBox}>
              <Icon
                name="ios-trending-up"
                size={90}
                color="rgba(255, 255, 255, 0.7)"
                style={styles.lastIcon}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

Home.propTypes = {
  auth: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(Home);
