import {Option} from '../src/models';

export default class OptionBuilder {
  private option: Option = {
    icon: 'any_icon',
    title: 'any_title',
    action: jest.fn(),
  };

  public build() {
    const optionClone = this.option;
    return optionClone;
  }
}
