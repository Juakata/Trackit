import React from 'react';
import PropTypes from 'prop-types';
import { ToastAndroid } from 'react-native';

const Toast = ({ visible, text }) => {
  if (visible) {
    ToastAndroid.showWithGravityAndOffset(
      text,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
    return null;
  }
  return null;
};

Toast.propTypes = {
  text: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default Toast;
