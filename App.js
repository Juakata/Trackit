import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './src/reducers/index';
import SigninForm from './src/containers/signinForm';
import SignupForm from './src/containers/signupForm';
import Home from './src/containers/home';
import Category from './src/containers/category';
import ProgressData from './src/containers/progressData';
import Goals from './src/containers/goals';
import styles from './src/css/styles';

const user = {
  auth: '',
  category: '',
  goals: [],
};

const store = createStore(rootReducer, user);
const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Signin"
            component={SigninForm}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Signup"
            component={SignupForm}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: 'Home',
              headerStyle: styles.header,
              headerTitleStyle: styles.headerTitle,
              headerTitleAlign: 'center',
            }}
          />
          <Stack.Screen
            name="Category"
            component={Category}
            options={({ route }) => ({
              title: route.params.name,
              headerStyle: styles.header,
              headerTitleStyle: styles.headerTitle,
              headerTitleAlign: 'center',
            })}
          />
          <Stack.Screen
            name="ProgressData"
            component={ProgressData}
            options={{
              title: 'Progress Data',
              headerStyle: styles.header,
              headerTitleStyle: styles.headerTitle,
              headerTitleAlign: 'center',
            }}
          />
          <Stack.Screen
            name="Goals"
            component={Goals}
            options={{
              title: 'Goals',
              headerStyle: styles.header,
              headerTitleStyle: styles.headerTitle,
              headerTitleAlign: 'center',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
