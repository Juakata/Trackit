import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import {
  View, TouchableOpacity, Text, TextInput, Alert,
} from 'react-native';
import styles from '../css/styles';
import { updateGoals } from '../actions/index';

class Goals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      netH: '0',
      netM: '0',
      lookH: '0',
      lookM: '0',
      codH: '0',
      codM: '0',
      relH: '0',
      relM: '0',
    };
  }

  getGoals = () => {
    const { auth } = this.props;
    fetch(`https://still-retreat-45947.herokuapp.com/api/v1/getcategories/${auth}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          netH: String(moment.duration(data[0].goal_time).hours()),
          netM: String(moment.duration(data[0].goal_time).minutes()),
          lookH: String(moment.duration(data[1].goal_time).hours()),
          lookM: String(moment.duration(data[1].goal_time).minutes()),
          codH: String(moment.duration(data[2].goal_time).hours()),
          codM: String(moment.duration(data[2].goal_time).minutes()),
          relH: String(moment.duration(data[3].goal_time).hours()),
          relM: String(moment.duration(data[3].goal_time).minutes()),
        });
      })
      .catch(() => {
      });
  }

  render() {
    this.getGoals();
    const {
      netH,
      netM,
      lookH,
      lookM,
      codH,
      codM,
      relH,
      relM,
    } = this.state;
    return (
      <View>
        <Formik
          enableReinitialize
          initialValues={{
            netH,
            netM,
            lookH,
            lookM,
            codH,
            codM,
            relH,
            relM,
          }}
          onSubmit={values => {
            let {
              netH,
              netM,
              lookH,
              lookM,
              codH,
              codM,
              relH,
              relM,
            } = values;
            netH = (netH === '') ? 0 : netH;
            netM = (netM === '') ? 0 : netM;
            lookH = (lookH === '') ? 0 : lookH;
            lookM = (lookM === '') ? 0 : lookM;
            codH = (codH === '') ? 0 : codH;
            codM = (codM === '') ? 0 : codM;
            relH = (relH === '') ? 0 : relH;
            relM = (relM === '') ? 0 : relM;
            const { auth, updateGoals } = this.props;
            const goals = [];
            const net = moment.duration(`${netH}:${netM}:00.000`).asMilliseconds();
            const look = moment.duration(`${lookH}:${lookM}:00.000`).asMilliseconds();
            const cod = moment.duration(`${codH}:${codM}:00.000`).asMilliseconds();
            const rel = moment.duration(`${relH}:${relM}:00.000`).asMilliseconds();
            goals.push({ name: 'Networking', goal: net });
            goals.push({ name: 'Looking for job', goal: look });
            goals.push({ name: 'Coding Challenges', goal: cod });
            goals.push({ name: 'Relaxing', goal: rel });
            updateGoals(goals);
            fetch(`https://still-retreat-45947.herokuapp.com/api/v1/updategoals/${auth}/${net}/${look}/${cod}/${rel}`)
              .then(response => response.json())
              .then(data => {
                Alert.alert(data.result);
              })
              .catch(() => {
              });
          }}
        >
          { props => (
            <View>
              <Text style={styles.titleDataC}>Networking</Text>
              <View style={styles.timeProCont}>
                <Icon
                  name="ios-time"
                  size={30}
                  color="rgba(255, 255, 255, 0.7)"
                  style={styles.userIcon}
                />
                <TextInput
                  value={props.values.netH}
                  onChangeText={props.handleChange('netH')}
                  style={styles.inputTime}
                  keyboardType="numeric"
                />
                <Text style={styles.timeProSymbol}>h : </Text>
                <TextInput
                  value={props.values.netM}
                  onChangeText={props.handleChange('netM')}
                  style={styles.inputTime}
                  keyboardType="numeric"
                />
                <Text style={styles.timeProSymbol}>m</Text>
              </View>

              <Text style={styles.titleDataC}>Looking for job</Text>
              <View style={styles.timeProCont}>
                <Icon
                  name="ios-time"
                  size={30}
                  color="rgba(255, 255, 255, 0.7)"
                  style={styles.userIcon}
                />
                <TextInput
                  value={props.values.lookH}
                  onChangeText={props.handleChange('lookH')}
                  style={styles.inputTime}
                  keyboardType="numeric"
                />
                <Text style={styles.timeProSymbol}>h : </Text>
                <TextInput
                  value={props.values.lookM}
                  onChangeText={props.handleChange('lookM')}
                  style={styles.inputTime}
                  keyboardType="numeric"
                />
                <Text style={styles.timeProSymbol}>m</Text>
              </View>

              <Text style={styles.titleDataC}>Coding Challenges</Text>
              <View style={styles.timeProCont}>
                <Icon
                  name="ios-time"
                  size={30}
                  color="rgba(255, 255, 255, 0.7)"
                  style={styles.userIcon}
                />
                <TextInput
                  value={props.values.codH}
                  onChangeText={props.handleChange('codH')}
                  style={styles.inputTime}
                  keyboardType="numeric"
                />
                <Text style={styles.timeProSymbol}>h : </Text>
                <TextInput
                  value={props.values.codM}
                  onChangeText={props.handleChange('codM')}
                  style={styles.inputTime}
                  keyboardType="numeric"
                />
                <Text style={styles.timeProSymbol}>m</Text>
              </View>

              <Text style={styles.titleDataC}>Relaxing</Text>
              <View style={styles.timeProCont}>
                <Icon
                  name="ios-time"
                  size={30}
                  color="rgba(255, 255, 255, 0.7)"
                  style={styles.userIcon}
                />
                <TextInput
                  value={props.values.relH}
                  onChangeText={props.handleChange('relH')}
                  style={styles.inputTime}
                  keyboardType="numeric"
                />
                <Text style={styles.timeProSymbol}>h : </Text>
                <TextInput
                  value={props.values.relM}
                  onChangeText={props.handleChange('relM')}
                  style={styles.inputTime}
                  keyboardType="numeric"
                />
                <Text style={styles.timeProSymbol}>m</Text>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.btnSession} onPress={props.handleSubmit}>
                  <Text style={styles.text}>Save Goals</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
      </View>
    );
  }
}

Goals.propTypes = {
  auth: PropTypes.string.isRequired,
  updateGoals: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  updateGoals: goals => dispatch(updateGoals(goals)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Goals);
