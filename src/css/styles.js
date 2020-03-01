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
    textAlign: 'center',
  },
  text: {
    color: '#28fc03',
  },
  logo: {
    color: '#fff',
    backgroundColor: '#000',
    textAlign: 'center',
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
});

export default styles;
