import {Reminder} from '../../src/models';

export default class ReminderBuilder {
  private reminder: Reminder = {
    id: 'any_id',
    done: false,
    title: 'any_title',
  };

  public build() {
    const reminderClone = this.reminder;
    return reminderClone;
  }
}
