import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  View, Text,
} from 'react-native';
import styles from '../css/styles';
import Timer from '../components/timer';
import RoundButton from '../components/roundButton';

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: 0,
      now: 0,
    };
    this.startTime = this.startTime.bind(this);
  }

  startTime() {
    const now = new Date().getTime();
    this.setState({
      start: now,
      now,
    });
    setInterval(() => {
      const now = new Date().getTime();
      this.setState({
        now,
      });
    }, 100);
  }

  render() {
    const {
      start,
      now,
    } = this.state;
    const { category } = this.props;
    return (
      <View style={styles.container}>
        <Text styles={styles.catTitle}>{category}</Text>
        <Timer interval={now - start} />
        <View style={styles.raundButtonsCont}>
          <RoundButton
            title="Start"
            color="#00e052"
            backgroundColor="#00732a"
            onClick={() => this.startTime()}
          />
          <RoundButton title="Save" color="#0f9fff" backgroundColor="#005a96" />
        </View>
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
