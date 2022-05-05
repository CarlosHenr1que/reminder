import React from 'react';

import {fireEvent, render} from '@testing-library/react-native';

import {ReminderCard} from '../../src/components';

describe('ReminderCard', () => {
  it('should render with correct title', () => {
    const title = 'any_title';
    const onPress = jest.fn();

    const {getByText} = render(
      <ReminderCard title={title} onPress={onPress} />,
    );

    expect(getByText(title)).toBeDefined();
  });

  it('should call onPress when is pressed', () => {
    const title = 'any_title';
    const onPress = jest.fn();

    const {getByTestId} = render(
      <ReminderCard title={title} onPress={onPress} />,
    );

    fireEvent.press(getByTestId('reminder_card'));

    expect(onPress).toHaveBeenCalled();
  });
});
