import React from 'react';

import {ReminderProvider} from './contexts/reminder';

const AppProvider: React.FC = ({children}) => (
  <ReminderProvider>{children}</ReminderProvider>
);

export default AppProvider;
