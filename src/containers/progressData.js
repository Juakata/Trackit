import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  View, Text,
} from 'react-native';
import Progress from '../components/progress';
import styles from '../css/styles';

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
    const nodata = 'No data saved, go to any category to save progress.';
    const { goals } = this.props;
    this.checkProgress();
    const renderCat = categories.map(element => {
      let finalGoal = 0;
      goals.forEach(e => {
        const { namecat } = element;
        const { namee } = e;
        if (namee === namecat) {
          const { goal } = e;
          finalGoal = goal;
        }
      });
      return (
        <Progress
          key={element.id}
          name={element.name}
          progress={element.progress}
          goal={finalGoal}
        />
      );
    });
    return (
      <View>
        {renderCat.length === 0 ? <Text style={styles.nodata}>{nodata}</Text> : renderCat}
      </View>
    );
  }
}

ProgressData.propTypes = {
  auth: PropTypes.string.isRequired,
  goals: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  goals: state.goals,
});

export default connect(mapStateToProps, null)(ProgressData);
