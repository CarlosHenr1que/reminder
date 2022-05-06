import {renderHook, act} from '@testing-library/react-hooks';
import {
  ReminderProvider,
  useReminder,
} from '../../../src/hooks/contexts/reminder';
import ReminderBuilder from '../../../__mocks__/Reminder';

describe('Reminder hook', () => {
  it('should be able to save a reminder', () => {
    const defaultReminder = new ReminderBuilder().build();
    const reminder = new ReminderBuilder().setId('any_other_id').build();
    const reminders = [defaultReminder];

    const {result} = renderHook(() => useReminder(), {
      wrapper: ReminderProvider,
    });

    act(() => result.current.addReminders(reminders));
    act(() => result.current.addReminders([reminder]));

    expect(result.current.data.reminders).toEqual([...reminders, reminder]);
  });

  it('should mark reminder as done when doneReminder is called', () => {
    const reminder = new ReminderBuilder().build();
    const reminders = [reminder];

    const {result} = renderHook(() => useReminder(), {
      wrapper: ReminderProvider,
    });

    act(() => result.current.addReminders(reminders));
    expect(result.current.data.reminders[0].done).toBeFalsy();

    act(() => result.current.doneReminder('any_id'));
    expect(result.current.data.reminders[0].done).toBeTruthy();
  });
});
