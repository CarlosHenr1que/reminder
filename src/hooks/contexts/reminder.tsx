import React from 'react';
import {createContext, useContext, useState} from 'react';
import {Reminder} from '../../models';

export interface IReminderState {
  reminders: Reminder[];
}

interface IReminderContextData {
  data: IReminderState;
  addReminders: (reminders: Reminder[]) => void;
}

const ReminderContext = createContext({} as IReminderContextData);

const ReminderProvider: React.FC = ({children}) => {
  const [data, setData] = useState<IReminderState>({} as IReminderState);

  const addReminders = (reminders: Reminder[]) => {
    setData({
      reminders: [...reminders],
    });
  };

  return (
    <ReminderContext.Provider value={{data, addReminders}}>
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
