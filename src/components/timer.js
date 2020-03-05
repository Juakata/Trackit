import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import moment from 'moment';
import styles from '../css/styles';

const Timer = ({ interval }) => {
  const duration = moment.duration(interval);
  const h = duration.hours() < 10 ? `0${duration.hours()}` : duration.hours();
  const m = duration.minutes() < 10 ? `0${duration.minutes()}` : duration.minutes();
  const s = duration.seconds() < 10 ? `0${duration.seconds()}` : duration.seconds();

  return (
    <View style={styles.timeContainer}>
      <Text style={styles.time}>{h}</Text>
      <Text style={styles.timeColon}>:</Text>
      <Text style={styles.time}>{m}</Text>
      <Text style={styles.timeColon}>:</Text>
      <Text style={styles.time}>{s}</Text>
    </View>
  );
};

Timer.propTypes = {
  interval: PropTypes.number.isRequired,
};

export default Timer;
