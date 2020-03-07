import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import {
  View, ScrollView, Text, TouchableOpacity,
} from 'react-native';
import styles from '../css/styles';
import { setCategory, addGoal } from '../actions/index';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleCategory = this.handleCategory.bind(this);
    this.getGoals();
  }

  getGoals = () => {
    const { auth, addGoal } = this.props;
    fetch(`https://still-retreat-45947.herokuapp.com/api/v1/getcategories/${auth}`)
      .then(response => response.json())
      .then(data => {
        addGoal({ name: 'Networking', goal: data[0].goal_time });
        addGoal({ name: 'Looking for job', goal: data[1].goal_time });
        addGoal({ name: 'Coding Challenges', goal: data[2].goal_time });
        addGoal({ name: 'Relaxing', goal: data[3].goal_time });
      })
      .catch(() => {
      });
  }

  handleCategory(category) {
    const { navigation, setCategory } = this.props;
    setCategory(category);
    navigation.navigate('Category', { name: category });
  }

  render() {
    const { navigation, auth } = this.props;
    return (
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.homeContainer}>
          <View style={styles.box}>
            <Icon
              name="ios-person"
              size={90}
              color="rgba(255, 255, 255, 0.7)"
              style={styles.userIcon}
            />
            <Text>{ auth }</Text>
          </View>
          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate('Goals', { name: 'Goals' })}
          >
            <Icon
              name="ios-list"
              size={90}
              color="rgba(255, 255, 255, 0.7)"
              style={styles.userIcon}
            />
            <Text>Set your goals</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={() => this.handleCategory('Networking')}>
            <Icon
              name="ios-people"
              size={90}
              color="rgba(255, 255, 255, 0.7)"
              style={styles.userIcon}
            />
            <Text>Networking</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={() => this.handleCategory('Looking for job')}>
            <Icon
              name="ios-search"
              size={90}
              color="rgba(255, 255, 255, 0.7)"
              style={styles.userIcon}
            />
            <Text>Looking for job</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={() => this.handleCategory('Coding Challenges')}>
            <Icon
              name="ios-desktop"
              size={90}
              color="rgba(255, 255, 255, 0.7)"
              style={styles.userIcon}
            />
            <Text>Coding Challenges</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={() => this.handleCategory('Relaxing')}>
            <Icon
              name="ios-basketball"
              size={90}
              color="rgba(255, 255, 255, 0.7)"
              style={styles.userIcon}
            />
            <Text>Relaxing</Text>
          </TouchableOpacity>
          <View style={styles.lastBox}>
            <TouchableOpacity
              style={styles.subBox}
              onPress={() => navigation.navigate('ProgressData', { name: 'ProgressData' })}
            >
              <Icon
                name="ios-trending-up"
                size={90}
                color="rgba(255, 255, 255, 0.7)"
                style={styles.lastIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

Home.propTypes = {
  auth: PropTypes.string.isRequired,
  navigation: PropTypes.instanceOf(Object).isRequired,
  setCategory: PropTypes.func.isRequired,
  addGoal: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  category: state.category,
  goals: state.goals,
});

const mapDispatchToProps = dispatch => ({
  setCategory: category => dispatch(setCategory(category)),
  addGoal: goal => dispatch(addGoal(goal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
