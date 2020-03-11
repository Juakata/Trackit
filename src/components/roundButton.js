import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, View } from 'react-native';
import styles from '../css/styles';

const RoundButton = ({
  title,
  color,
  backgroundColor,
  onClick,
}) => (
  <View style={[styles.roundButtonContainer, { borderColor: color }]}>
    <TouchableOpacity
      style={[styles.roundButton, { backgroundColor }]}
      onPress={onClick}
    >
      <Text style={[styles.text, { color }]}>{title}</Text>
    </TouchableOpacity>
  </View>
);

RoundButton.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default RoundButton;
