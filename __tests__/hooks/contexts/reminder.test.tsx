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

  it('should not mark reminder as done when id does not exist', () => {
    const reminder = new ReminderBuilder().build();
    const reminders = [reminder];

    const {result} = renderHook(() => useReminder(), {
      wrapper: ReminderProvider,
    });

    act(() => result.current.addReminders(reminders));
    expect(result.current.data.reminders[0].done).toBeFalsy();

    act(() => result.current.doneReminder('any_wrong_id'));
    expect(result.current.data.reminders[0].done).toBeFalsy();
  });

  it('should mark reminder as undone when undoReminder is called', () => {
    const reminder = new ReminderBuilder().setStatus(true).build();
    const reminders = [reminder];

    const {result} = renderHook(() => useReminder(), {
      wrapper: ReminderProvider,
    });

    act(() => result.current.addReminders(reminders));
    expect(result.current.data.reminders[0].done).toBeTruthy();

    act(() => result.current.undoReminder('any_id'));
    expect(result.current.data.reminders[0].done).toBeFalsy();
  });

  it('should not mark reminder as undone when id does not exist', () => {
    const reminder = new ReminderBuilder().setStatus(true).build();
    const reminders = [reminder];

    const {result} = renderHook(() => useReminder(), {
      wrapper: ReminderProvider,
    });

    act(() => result.current.addReminders(reminders));
    expect(result.current.data.reminders[0].done).toBeTruthy();

    act(() => result.current.undoReminder('any_wrong_id'));
    expect(result.current.data.reminders[0].done).toBeTruthy();
  });

  it('should be able to delete a reminder', () => {
    const defaultReminder = new ReminderBuilder().build();
    const reminder = new ReminderBuilder().setId('any_other_id').build();
    const reminders = [defaultReminder, {...reminder}];

    const {result} = renderHook(() => useReminder(), {
      wrapper: ReminderProvider,
    });

    act(() => result.current.addReminders(reminders));
    expect(result.current.data.reminders).toEqual(reminders);

    act(() => result.current.deleteReminder(reminder.id));
    expect(result.current.data.reminders).toHaveLength(1);
  });
});
