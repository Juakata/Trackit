import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  View, Text,
} from 'react-native';
import styles from '../css/styles';

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
    };
  }

  render() {
    const { time } = this.state;
    const { category } = this.props;
    return (
      <View>
        <Text styles={styles.catTitle}>{category}</Text>
        <Text>{time}</Text>
      </View>
    );
  }
}

Category.propTypes = {
  category: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  category: state.category,
});

export default connect(mapStateToProps, null)(Category);
