import React from 'react';

import {fireEvent, render} from '@testing-library/react-native';
import CreateReminder from '../../src/screens/CreateReminder';
import * as ReminderContext from '../../src/hooks/contexts/reminder';
import ReminderBuilder from '../../__mocks__/Reminder';

const mockNavigate = jest.fn();
jest.mock('@react-navigation/core', () => {
  const actualNav = jest.requireActual('@react-navigation/core');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockNavigate,
    }),
  };
});

const mockContext = (data: ReminderContext.IReminderState) => {
  jest.spyOn(ReminderContext, 'useReminder').mockReturnValue({
    data,
    addReminders: jest.fn(),
    deleteReminder: jest.fn(),
    doneReminder: jest.fn(),
    undoReminder: jest.fn(),
  });
};

describe('CreateReminder screen', () => {
  it('should call addReminder when save button is called', () => {
    const reminder = new ReminderBuilder().build();

    mockContext({reminders: [{...reminder}]});

    const {getByPlaceholderText, getByText} = render(
      <ReminderContext.ReminderProvider>
        <CreateReminder />
      </ReminderContext.ReminderProvider>,
    );

    fireEvent.changeText(
      getByPlaceholderText('Digite o titulo do seu lembrete'),
      'new_reminder',
    );
    fireEvent.press(getByText('Salvar'));

    expect(ReminderContext.useReminder().addReminders).toHaveBeenCalled();
  });
  it('should call navigate when save button is called', () => {
    mockContext({reminders: []});

    const {getByPlaceholderText, getByText} = render(
      <ReminderContext.ReminderProvider>
        <CreateReminder />
      </ReminderContext.ReminderProvider>,
    );

    fireEvent.changeText(
      getByPlaceholderText('Digite o titulo do seu lembrete'),
      'new_reminder',
    );
    fireEvent.press(getByText('Salvar'));

    expect(mockNavigate).toHaveBeenCalledWith('Reminders');
  });
});
