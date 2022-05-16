import {Option} from '../src/models';

export default class OptionBuilder {
  private option: Option = {
    icon: 'done',
    title: 'any_title',
    action: jest.fn(),
  };

  public build() {
    const optionClone = this.option;
    return optionClone;
  }
}
