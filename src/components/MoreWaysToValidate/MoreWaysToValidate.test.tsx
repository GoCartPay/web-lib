import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MoreWaysToValidate from './index';

const userPhone = 'xxxxxxxxxx';
const userEmail = 'gocart@gocart.com';

const radioOptions = [
  { value: 'SMS', label: `Send to ${userPhone}` },
  { value: 'email', label: `Send to ${userEmail}` }
];

const mockCallBack = jest.fn();

const Base = ({...props}) => (
  <MoreWaysToValidate
    {...props}
  />
);


describe('More Ways to Validate Screen behaves correctly', () => {

  it('renders without crashing and matches snapshot', () => {
    const { container } = render(
      <MoreWaysToValidate
        radioOptions={radioOptions}
        isOpen
        onEnterNewCode={mockCallBack}
        onCancel={mockCallBack}
        onResend={mockCallBack}
        successMessage='Success'
      />
    )

    expect(container.firstChild).toMatchSnapshot();
  })

  it('should not render when isOpen is false', () => {

  })
})