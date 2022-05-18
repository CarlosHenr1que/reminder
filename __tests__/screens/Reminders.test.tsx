import React from 'react';

import {render} from '@testing-library/react-native';
import Reminders from '../../src/screens/Reminders';
import * as ReminderContext from '../../src/hooks/contexts/reminder';
import ReminderBuilder from '../../__mocks__/Reminder';

jest.mock('@react-navigation/core', () => {
  const actualNav = jest.requireActual('@react-navigation/core');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});

const mockContext = (data: ReminderContext.IReminderState) => {
  return jest.spyOn(ReminderContext, 'useReminder').mockReturnValueOnce({
    data,
    addReminders: jest.fn(),
    deleteReminder: jest.fn(),
    doneReminder: jest.fn(),
    undoReminder: jest.fn(),
  });
};

describe('Reminders screen', () => {
  it('should render a reminder when list is fullfilled', () => {
    const reminder = new ReminderBuilder().build();

    mockContext({reminders: [{...reminder}]});

    const {getByText} = render(
      <ReminderContext.ReminderProvider>
        <Reminders />
      </ReminderContext.ReminderProvider>,
    );

    expect(getByText(reminder.title)).toBeDefined();
  });
});
