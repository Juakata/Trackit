import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import {
  ScrollView, Text, View,
} from 'react-native';
import styles from '../css/styles';

const Info = ({ auth }) => (
  <ScrollView style={styles.scrollContainer}>
    <View style={styles.infoContainer}>
      <Icon
        name="ios-person"
        size={90}
        color="rgba(255, 255, 255, 0.7)"
        style={styles.userIcon}
      />
      <Text style={styles.welcomeText}>{`Welcome ${auth}`}</Text>
      <View style={styles.featuresCont}>
        <Text style={{ marginBottom: 10 }}>This app was built by Andoni Uzquiano</Text>
        <Text style={{ marginBottom: 10, fontWeight: 'bold' }}>Features:</Text>
        <Text>- You can sign in and sign up at the beginning.</Text>
        <Text>- You can start a chronometer on each category to save progress.</Text>
        <Text>- You can set a goal time for each category.</Text>
        <Text>
          - Last you can see your progress and the
          the percentage you have according to the goal you set.
        </Text>
      </View>
    </View>
  </ScrollView>
);

Info.propTypes = {
  auth: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(Info);
