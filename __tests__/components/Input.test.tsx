import React from 'react';

import {fireEvent, render} from '@testing-library/react-native';
import {Input} from '../../src/components';
import {AppThemeProvider} from '../../src/styles';

const makeSut = (value: string, placeholder: string) => {
  const onChange = jest.fn();

  const sut = (
    <AppThemeProvider>
      <Input value={value} onChange={onChange} placeholder={placeholder} />
    </AppThemeProvider>
  );

  return {
    sut,
    onChange,
  };
};

describe('Input', () => {
  it('should call onChange wiht correct values', () => {
    const {sut, onChange} = makeSut('any_default_title', 'any_placeholder');
    const {getByPlaceholderText} = render(sut);

    const textValue = 'any_title';
    const inputElement = getByPlaceholderText('any_placeholder');
    fireEvent.changeText(inputElement, textValue);

    expect(onChange).toHaveBeenCalledWith(textValue);
  });
});
