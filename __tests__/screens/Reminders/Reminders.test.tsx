import React from 'react';

import {fireEvent, render} from '@testing-library/react-native';
import Reminders from '../../../src/screens/Reminders';
import * as ReminderContext from '../../../src/hooks/contexts/reminder';
import ReminderBuilder from '../../../__mocks__/Reminder';
import {AppThemeProvider} from '../../../src/styles';

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

describe('Reminders screen', () => {
  it('should render a reminder when list is fullfilled', () => {
    const reminder = new ReminderBuilder().build();

    mockContext({reminders: [{...reminder}]});

    const {getByText} = render(
      <ReminderContext.ReminderProvider>
        <AppThemeProvider>
          <Reminders />
        </AppThemeProvider>
      </ReminderContext.ReminderProvider>,
    );

    expect(getByText(reminder.title)).toBeDefined();
  });

  it('should be able to create a reminder', () => {
    const {getByTestId} = render(
      <ReminderContext.ReminderProvider>
        <AppThemeProvider>
          <Reminders />
        </AppThemeProvider>
      </ReminderContext.ReminderProvider>,
    );

    fireEvent.press(getByTestId('header-icon-button'));
    expect(mockNavigate).toHaveBeenCalledWith('CreateReminder');
  });

  it('should be able to delete a reminder', () => {
    const reminder = new ReminderBuilder().build();

    mockContext({reminders: [{...reminder}]});

    const {getByText} = render(
      <ReminderContext.ReminderProvider>
        <AppThemeProvider>
          <Reminders />
        </AppThemeProvider>
      </ReminderContext.ReminderProvider>,
    );

    fireEvent(getByText(reminder.title), 'longPress');
    fireEvent.press(getByText('Deletar'));

    expect(ReminderContext.useReminder().deleteReminder).toHaveBeenCalled();
  });

  it('should mask a reminder as done', () => {
    const reminder = new ReminderBuilder().build();

    mockContext({reminders: [{...reminder}]});

    const {getByTestId} = render(
      <ReminderContext.ReminderProvider>
        <AppThemeProvider>
          <Reminders />
        </AppThemeProvider>
      </ReminderContext.ReminderProvider>,
    );

    fireEvent.press(getByTestId('reminder_check_button'));

    expect(ReminderContext.useReminder().doneReminder).toBeCalledWith(
      reminder.id,
    );
  });

  it('should be able to cancel a reminder', () => {
    const reminder = new ReminderBuilder().build();

    mockContext({reminders: [{...reminder}]});

    const {getByText} = render(
      <ReminderContext.ReminderProvider>
        <AppThemeProvider>
          <Reminders />
        </AppThemeProvider>
      </ReminderContext.ReminderProvider>,
    );

    fireEvent(getByText(reminder.title), 'longPress');
    fireEvent.press(getByText('Cancelar'));

    expect(ReminderContext.useReminder().undoReminder).toBeCalledWith(
      reminder.id,
    );
  });
});
