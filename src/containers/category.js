import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View } from 'react-native';
import styles from '../css/styles';
import Timer from '../components/timer';
import RoundButton from '../components/roundButton';
import Toast from '../components/toast';

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: 0,
      interval: 0,
      save: 0,
      pause: true,
      text: '',
      visible: false,
    };
    this.startTime = this.startTime.bind(this);
    this.pauseTime = this.pauseTime.bind(this);
    this.saveTime = this.saveTime.bind(this);
  }

  hideToast = () => {
    this.setState({
      visible: false,
    });
  };

  startTime() {
    const now = new Date().getTime();
    this.setState({
      start: now,
      pause: false,
    });
    this.timer = setInterval(() => {
      const now = new Date().getTime();
      this.setState(state => ({
        interval: state.save + (now - state.start),
      }));
    }, 100);
  }

  pauseTime() {
    clearInterval(this.timer);
    this.setState(state => ({
      start: 0,
      save: state.interval,
      pause: true,
    }));
  }

  saveTime() {
    const { interval } = this.state;
    const { auth, category } = this.props;
    const getDate = new Date();
    const date = `${getDate.getFullYear()}-${getDate.getMonth()}-${getDate.getDate()}`;
    fetch(`https://still-retreat-45947.herokuapp.com/api/v1/setucat/${date}/${interval}/${auth}/${category}`)
      .then(response => response.json())
      .then(() => {
        clearInterval(this.timer);
        this.setState({
          start: 0,
          interval: 0,
          save: 0,
          pause: true,
        });
        this.setState(
          {
            text: 'Progress successfully saved.',
            visible: true,
          },
          () => {
            this.hideToast();
          },
        );
      })
      .catch(() => {
        this.setState(
          {
            text: 'Unable to save the progress.',
            visible: true,
          },
          () => {
            this.hideToast();
          },
        );
      });
  }

  render() {
    const {
      start,
      interval,
      pause,
      text,
      visible,
    } = this.state;
    return (
      <View style={styles.container}>
        <Timer interval={interval} />
        <Toast visible={visible} text={text} />
        <View style={styles.raundButtonsCont}>
          {start === 0 && { pause } && (
            <RoundButton
              title="Start"
              color="#00e052"
              backgroundColor="#00732a"
              onClick={() => this.startTime()}
            />
          )}
          {start > 0 && (
            <RoundButton
              title="Pause"
              color="#ff5647"
              backgroundColor="#a10d00"
              onClick={() => this.pauseTime()}
            />
          )}
          <RoundButton
            title="Save"
            color="#0f9fff"
            backgroundColor="#005a96"
            onClick={() => this.saveTime()}
          />
        </View>
      </View>
    );
  }
}

Category.propTypes = {
  category: PropTypes.string.isRequired,
  auth: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  category: state.category,
});

export default connect(mapStateToProps, null)(Category);
