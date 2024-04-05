import React from 'react';

import {fireEvent, render} from '@testing-library/react-native';

import {ReminderCard} from '../../src/components';

const makeSut = (title: string, done: boolean) => {
  const onLongPress = jest.fn();
  const onCheckPress = jest.fn();

  const sut = (
    <ReminderCard
      title={title}
      done={done}
      onLongPress={onLongPress}
      onCheckPress={onCheckPress}
    />
  );
  return {
    sut,
    onLongPress,
    onCheckPress,
  };
};

describe('ReminderCard', () => {
  it('should render with correct title', () => {
    const title = 'any_title';

    const {sut} = makeSut('any_title', false);
    const {getByText} = render(sut);

    expect(getByText(title)).toBeDefined();
  });

  it('should call onLongPress when is pressed', () => {
    const {sut, onLongPress} = makeSut('any_title', false);
    const {getByTestId} = render(sut);

    fireEvent(getByTestId('reminder_card'), 'longPress');

    expect(onLongPress).toHaveBeenCalled();
  });

  it('should call onCheckPress when is pressed', () => {
    const {sut, onCheckPress} = makeSut('any_title', false);
    const {getByTestId} = render(sut);

    fireEvent.press(getByTestId('reminder_check_button'));

    expect(onCheckPress).toHaveBeenCalled();
  });

  it('should not render done icon when not done', () => {
    const {sut} = makeSut('any_title', false);
    const {queryByTestId} = render(sut);

    expect(queryByTestId('done_icon')).toBeNull();
  });

  it('should render done icon when done', () => {
    const {sut} = makeSut('any_title', true);
    const {getByTestId} = render(sut);

    expect(getByTestId('done_icon')).toBeDefined();
  });
});
