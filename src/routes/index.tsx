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
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Reminders" component={Reminders} />
        <Stack.Screen name="CreateReminder" component={CreateReminder} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
