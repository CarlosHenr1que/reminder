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

  return (
    <ReminderContext.Provider value={{data, addReminders, doneReminder}}>
      {children}
    </ReminderContext.Provider>
  );
};

function useReminder(): IReminderContextData {
  const context = useContext(ReminderContext);

  if (!context) {
    throw new Error('useReminder must be within an ReminderProvider');
  }

  return context;
}

export {ReminderProvider, useReminder};
