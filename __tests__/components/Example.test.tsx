import React from 'react';

import {render} from '@testing-library/react-native';
import TestComponent from '../../src/components/TestComponent';

describe('Example', () => {
  it('should test the testing library config', () => {
    const {getByText} = render(<TestComponent />);

    const component = getByText('Hello World');

    expect(component).toBeDefined();
  });
});
