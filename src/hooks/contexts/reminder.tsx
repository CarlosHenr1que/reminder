import React from 'react';
import {createContext, useContext, useState} from 'react';
import {Reminder} from '../../models';

export interface IReminderState {
  reminders: Reminder[];
}

interface IReminderContextData {
  data: IReminderState;
  addReminders: (reminders: Reminder[]) => void;
  doneReminder: (id: string) => void;
  undoReminder: (id: string) => void;
  deleteReminder: (id: string) => void;
}

const ReminderContext = createContext({} as IReminderContextData);

const ReminderProvider: React.FC = ({children}) => {
  const [data, setData] = useState<IReminderState>({reminders: []});

  const addReminders = (reminders: Reminder[]) => {
    setData({
      reminders: [...data.reminders, ...reminders],
    });
  };

  const doneReminder = (id: string) => {
    setData({
      reminders: data.reminders.map(reminder => {
        if (reminder.id === id) {
          return {...reminder, done: true};
        }
        return reminder;
      }),
    });
  };

  const undoReminder = (id: string) => {
    setData({
      reminders: data.reminders.map(reminder => {
        if (reminder.id === id) {
          return {...reminder, done: false};
        }
        return reminder;
      }),
    });
  };

  const deleteReminder = (id: string) => {
    setData({
      reminders: data.reminders.filter(reminder => reminder.id !== id),
    });
  };

  return (
    <ReminderContext.Provider
      value={{data, addReminders, doneReminder, undoReminder, deleteReminder}}>
      {children}
    </ReminderContext.Provider>
  );
};

function useReminder(): IReminderContextData {
  const context = useContext(ReminderContext);

  if (!context.data) {
    throw new Error('useReminder must be within an ReminderProvider');
  }

  return context;
}

export {ReminderProvider, useReminder};
