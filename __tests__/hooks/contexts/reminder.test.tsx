import {renderHook, act} from '@testing-library/react-hooks';
import {
  ReminderProvider,
  useReminder,
} from '../../../src/hooks/contexts/reminder';

describe('Reminder hook', () => {
  it('should be able to save a reminder', () => {
    const {result} = renderHook(() => useReminder(), {
      wrapper: ReminderProvider,
    });
    const reminders = [
      {
        id: '1',
        done: false,
        title: 'any_title',
      },
    ];
    act(() => result.current.addReminders(reminders));

    expect(result.current.data.reminders).toEqual(reminders);
  });
});
