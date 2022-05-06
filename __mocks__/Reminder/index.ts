import {Reminder} from '../../src/models';

export default class ReminderBuilder {
  private reminder: Reminder = {
    id: 'any_id',
    done: false,
    title: 'any_title',
  };

  public setId(id: string) {
    this.reminder.id = id;
    return this;
  }

  public build() {
    const reminderClone = this.reminder;
    return reminderClone;
  }
}
