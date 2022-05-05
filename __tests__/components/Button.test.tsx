import React from 'react';

import {render} from '@testing-library/react-native';

import Button from '../../src/components/Button';

describe('ReminderCard', () => {
  it('should render with correct title', () => {
    const title = 'Novo lembrete';
    const {getByText} = render(<Button title={title} />);

    expect(getByText(title)).toBeDefined();
  });
});
