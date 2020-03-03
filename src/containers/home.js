import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  View, Text,
} from 'react-native';

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
      <View>
        <Text>
          { auth }
        </Text>
        <Text>
          { progress }
        </Text>
      </View>
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
