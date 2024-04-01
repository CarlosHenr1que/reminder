import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Reminders from '../screens/Reminders';
import CreateReminder from '../screens/CreateReminder';

export type RootStackParamList = {
  Reminders: undefined;
  CreateReminder: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#171717',
          },
          title: '',
          headerBackTitle: 'Voltar',
        }}>
        <Stack.Screen
          name="Reminders"
          component={Reminders}
          options={{
            title: 'Lembretes',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CreateReminder"
          component={CreateReminder}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
