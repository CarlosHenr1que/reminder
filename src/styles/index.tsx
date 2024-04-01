import React from 'react';
import {ThemeProvider} from 'styled-components/native';

import dark from './themes/dark';

interface ThemeProps {
  children: React.ReactNode;
}

export const AppThemeProvider = ({children}: ThemeProps) => (
  <ThemeProvider theme={dark}>{children}</ThemeProvider>
);
