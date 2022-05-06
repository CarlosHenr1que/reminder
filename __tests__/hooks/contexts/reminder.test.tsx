import {renderHook, act} from '@testing-library/react-hooks';
import {
  ReminderProvider,
  useReminder,
} from '../../../src/hooks/contexts/reminder';
import ReminderBuilder from '../../../__mocks__/Reminder';

describe('Reminder hook', () => {
  it('should be able to save a reminder', () => {
    const reminder = new ReminderBuilder().build();
    const reminders = [reminder];

    const {result} = renderHook(() => useReminder(), {
      wrapper: ReminderProvider,
    });

    act(() => result.current.addReminders(reminders));

    expect(result.current.data.reminders).toEqual(reminders);
  });
});
