import React from 'react';

import {render} from '@testing-library/react-native';

import {ReminderCard} from '../../src/components';

describe('ReminderCard', () => {
  it('should render with correct title', () => {
    const title = 'any_title';

    const {getByText} = render(<ReminderCard title={title} />);

    expect(getByText(title)).toBeDefined();
  });
});
