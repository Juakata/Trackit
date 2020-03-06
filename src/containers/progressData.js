import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  View,
} from 'react-native';
import Progress from '../components/progress';

class ProgressData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  checkProgress = () => {
    const { auth } = this.props;
    const getDate = new Date();
    const date = `${getDate.getFullYear()}-${getDate.getMonth()}-${getDate.getDate()}`;
    fetch(`https://still-retreat-45947.herokuapp.com/api/v1/getprogress/${auth}/${date}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          categories: data,
        });
      })
      .catch(() => {
      });
  }

  render() {
    const {
      categories,
    } = this.state;
    this.checkProgress();
    const renderCat = categories.map(element => (
      <Progress key={element.id} name={element.name} progress={element.progress} />
    ));
    return (
      <View>
        {renderCat}
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
