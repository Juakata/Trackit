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
    width: WIDTH * 0.5,
    height: WIDTH * 0.5,
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
    backgroundColor: '#575757',
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
    width: '100%',
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
  header: {
    backgroundColor: '#4dc1ff',
  },
  headerTitle: {
    color: '#fff',
  },
  timeContainer: {
    width: '80%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  time: {
    fontSize: 35,
    padding: 10,
    margin: 3,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#006fb0',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  timeColon: {
    fontSize: 30,
    padding: 0,
    marginTop: 13,
  },
  roundButton: {
    width: 100,
    height: 100,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  roundButtonContainer: {
    width: 105,
    height: 105,
    borderWidth: 2,
    borderRadius: 62,
    justifyContent: 'center',
    alignItems: 'center',
  },
  raundButtonsCont: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    marginTop: 40,
    marginHorizontal: 50,
  },
  titleDataC: {
    width: WIDTH,
    padding: 10,
    color: '#fff',
    fontSize: 20,
    backgroundColor: '#008271',
  },
  timeProCont: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-end',
    marginLeft: 10,
    marginBottom: 30,
  },
  timePro: {
    fontSize: 20,
    marginLeft: 5,
    fontWeight: 'bold',
  },
  timeProSymbol: {
    fontSize: 17,
    color: '#255369',
  },
  inputTime: {
    width: '15%',
    height: 30,
    paddingLeft: 15,
    borderRadius: 45,
    fontSize: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    color: 'rgba(255, 255, 255, 0.7)',
  },
  percent: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4b0091',
    marginLeft: 20,
  },
});

export default styles;
