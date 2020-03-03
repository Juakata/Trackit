import { StyleSheet, Dimensions } from 'react-native';

const { width: WIDTH } = Dimensions.get('window');

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
  logo: {
    color: '#fff',
    backgroundColor: '#000',
    borderRadius: 100,
    padding: 40,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 50,
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
});

export default styles;
