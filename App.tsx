import React from 'react';
import AppProvider from './src/hooks';

import Routes from './src/routes';
import {AppThemeProvider} from './src/styles';

const App: React.FC = () => {
  return (
    <AppThemeProvider>
      <AppProvider>
        <Routes />
      </AppProvider>
    </AppThemeProvider>
  );
};

export default App;
