import React from 'react';

import {fireEvent, render} from '@testing-library/react-native';

import {Header} from '../../../src/screens/Reminders/components/Header';
import {AppThemeProvider} from '../../../src/styles';

describe('Reminders Header', () => {
  it('should render correcly', () => {
    const onPressIcon = jest.fn();
    const {getByTestId} = render(
      <AppThemeProvider>
        <Header icon="add" onPressIcon={onPressIcon} />
      </AppThemeProvider>,
    );

    expect(getByTestId('header-icon-button')).toBeDefined();
  });

  it('should call onPressIcon when pressed', () => {
    const onPressIcon = jest.fn();
    const {getByTestId} = render(
      <AppThemeProvider>
        <Header icon="add" onPressIcon={onPressIcon} />
      </AppThemeProvider>,
    );

    fireEvent.press(getByTestId('header-icon-button'));

    expect(onPressIcon).toHaveBeenCalled();
  });
});
