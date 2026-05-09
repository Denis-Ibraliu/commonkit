import { render } from '@testing-library/react';

import Conditional from './conditional';

describe('Conditional', () => {
  it('should render successfully', () => {
    const { getByText } = render(<Conditional />);
    expect(getByText('Conditional')).toBeTruthy();
  });
});
