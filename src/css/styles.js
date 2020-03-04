import { StyleSheet, Dimensions } from 'react-native';

const { width: WIDTH } = Dimensions.get('window');
const { height: HEIGHT } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    margin: 0,
    width: '100%',
    flex: 1,
    backgroundColor: '#e6fffe',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: WIDTH - 200,
    height: WIDTH - 200,
  },
  icon: {
    position: 'absolute',
    top: 18,
    left: 30,
  },
  input: {
    width: WIDTH - 35,
    height: 45,
    borderRadius: 45,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    color: 'rgba(255, 255, 255, 0.7)',
    margin: 10,
  },
  btnSession: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#432577',
    justifyContent: 'center',
    marginTop: 20,
  },
  error: {
    color: '#bf0000',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: '#ededed',
  },
  homeContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 2,
  },
  box: {
    margin: 2,
    width: WIDTH / 2 - 6,
    height: HEIGHT / 4 - 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  lastBox: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 2,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    height: HEIGHT / 4 - 25,
  },
  userIcon: {
    color: 'rgba(58, 121, 153, 0.7)',
  },
  subBox: {
    margin: 0,
    width: '50%',
    borderColor: '#000',
    borderWidth: 0.5,
    height: HEIGHT / 4 - 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#003d5c',
  },
  lastIcon: {
    color: 'rgba(255, 255, 255, 0.7)',
  },
});

export default styles;
