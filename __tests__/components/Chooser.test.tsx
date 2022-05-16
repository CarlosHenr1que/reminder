import React from 'react';

import {fireEvent, render} from '@testing-library/react-native';
import {Chooser} from '../../src/components';
import OptionBuilder from '../../__mocks__/Option';
import {Option} from '../../src/models';

const makeOptionsMock = (): Option[] => {
  const option = new OptionBuilder().build();
  return [{...option}];
};

const makeSut = (options: Option[], isVisible: boolean) => {
  const close = jest.fn();

  const sut = <Chooser options={options} close={close} isVisible={isVisible} />;
  return {
    close,
    sut,
  };
};

describe('Chooser', () => {
  it('should render option title correctly', () => {
    const options = makeOptionsMock();
    const {sut} = makeSut(options, true);

    const {getByText} = render(sut);

    expect(getByText(options[0].title)).toBeDefined();
  });

  it('should call close method when option is pressed', () => {
    const options = makeOptionsMock();
    const {sut, close} = makeSut(options, true);

    const {getByTestId} = render(sut);
    fireEvent.press(getByTestId('chooser_option_button'));

    expect(close).toHaveBeenCalled();
  });
});
