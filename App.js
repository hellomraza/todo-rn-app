import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Provider} from 'react-redux';
import {TailwindProvider} from 'tailwindcss-react-native';
import AppLayout from './Layout/AppLayout';
import store from './Redux/store';
import HomeScreen from './screens/HomeScreen';
import NewTaskScreen from './screens/NewTaskScreen';

const Stack = createNativeStackNavigator();

const HomeLayout = props => {
  return (
    <AppLayout>
      <HomeScreen {...props} />
    </AppLayout>
  );
};

const NewTaskLayout = props => {
  return (
    <AppLayout>
      <NewTaskScreen {...props} />
    </AppLayout>
  );
};

const YourApp = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TailwindProvider>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeLayout} />
            <Stack.Screen name="NewTask" component={NewTaskLayout} />
          </Stack.Navigator>
        </TailwindProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default YourApp;
