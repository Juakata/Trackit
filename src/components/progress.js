import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, View } from 'react-native';
import moment from 'moment';
import styles from '../css/styles';

const Progress = ({ name, progress, goal }) => {
  const duration = moment.duration(progress);
  const h = duration.hours() < 10 ? `0${duration.hours()}` : duration.hours();
  const m = duration.minutes() < 10 ? `0${duration.minutes()}` : duration.minutes();
  const s = duration.seconds() < 10 ? `0${duration.seconds()}` : duration.seconds();
  const percent = parseFloat((progress * 100) / goal).toFixed(2);
  return (
    <View>
      <Text style={styles.titleDataC}>{ name }</Text>
      <View style={styles.timeProCont}>
        <Icon
          name="ios-time"
          size={30}
          color="rgba(255, 255, 255, 0.7)"
          style={styles.userIcon}
        />
        <Text style={styles.timePro}>{h}</Text>
        <Text style={styles.timeProSymbol}>hh : </Text>
        <Text style={styles.timePro}>{m}</Text>
        <Text style={styles.timeProSymbol}>mm : </Text>
        <Text style={styles.timePro}>{s}</Text>
        <Text style={styles.timeProSymbol}>ss</Text>
        <Text style={styles.percent}>{`%${percent}`}</Text>
      </View>
    </View>
  );
};

Progress.propTypes = {
  name: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  goal: PropTypes.number.isRequired,
};

export default Progress;
