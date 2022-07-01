import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import RadioButton from '.';

const mockLabel = 'label';
const mockValue = 'value';

describe('Radio button renders and behaves correctly', () => {
  it('renders with expect content', () => {
    const { container } = render(
      <RadioButton
        label={mockLabel}
        value={mockValue}
      />
    );
    expect(container.firstChild).toMatchSnapshot();    
  })

  it('displays the correct label and has the value defined as from its prop', () => {
    render(
      <RadioButton
      label={mockLabel}
      value={mockValue}
    />
    );

    const radioElem = screen.getByLabelText(mockLabel);

    expect(radioElem).toBeTruthy()
    expect(radioElem).toHaveAttribute('value', mockValue)
  });
})