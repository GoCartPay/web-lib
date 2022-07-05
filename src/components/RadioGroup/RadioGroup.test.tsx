import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import RadioGroup from '.';

const mockOnChange = jest.fn();
const mockValue = 'tel';
const mockRadios = [
  { label:'test1', value: 'tel' },
  { label:'test2', value: 'test2' },
  { label:'test3', value: 'test3' },
];

describe('RadioGroup functions as expected', () => {

  beforeEach(() => {
    render(
      <RadioGroup
          value={mockValue}
          onChange={mockOnChange}
          radioOptions={mockRadios}
      />
    );
  })

  it('matches snapshot', () => {
    const { container } = render(
      <RadioGroup
          value={mockValue}
          onChange={mockOnChange}
          radioOptions={mockRadios}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders a radio button for each radio option passed in', () => {

    expect(screen.getAllByRole('radio').length).toEqual(mockRadios.length);
  });

  it('onChange prop fires correctly', () => {
    const radioElem = screen.getByLabelText(mockRadios[1].label);

    userEvent.click(radioElem);

    expect(mockOnChange).toHaveBeenCalled();
  });
})