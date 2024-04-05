import React from 'react';

import {fireEvent, render} from '@testing-library/react-native';

import Button from '../../src/components/Button';
import {AppThemeProvider} from '../../src/styles';

describe('ReminderCard', () => {
  it('should render with correct title', () => {
    const title = 'Novo lembrete';
    const onPress = jest.fn();
    const {getByText} = render(
      <AppThemeProvider>
        <Button title={title} onPress={onPress} />
      </AppThemeProvider>,
    );

    expect(getByText(title)).toBeDefined();
  });

  it('should call onPress when pressed', () => {
    const title = 'Novo lembrete';
    const onPress = jest.fn();
    const {getByTestId} = render(
      <AppThemeProvider>
        <Button title={title} onPress={onPress} />
      </AppThemeProvider>,
    );

    fireEvent.press(getByTestId('button'));

    expect(onPress).toHaveBeenCalled();
  });
});
