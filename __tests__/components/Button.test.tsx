import React from 'react';

import {fireEvent, render} from '@testing-library/react-native';

import Button from '../../src/components/Button';

describe('ReminderCard', () => {
  it('should render with correct title', () => {
    const title = 'Novo lembrete';
    const onPress = jest.fn();
    const {getByText} = render(<Button title={title} onPress={onPress} />);

    expect(getByText(title)).toBeDefined();
  });

  it('should call onPress when pressed', () => {
    const title = 'Novo lembrete';
    const onPress = jest.fn();
    const {getByTestId} = render(<Button title={title} onPress={onPress} />);

    fireEvent.press(getByTestId('button'));

    expect(onPress).toHaveBeenCalled();
  });
});
