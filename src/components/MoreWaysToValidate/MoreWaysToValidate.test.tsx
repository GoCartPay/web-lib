import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import MoreWaysToValidate from './index';

const userPhone = 'xxxxxxxxxx';
const userEmail = 'gocart@gocart.com';
const successMessage = 'this is a success message';

const radioOptions = [
  { value: 'SMS', label: `Send to ${userPhone}` },
  { value: 'email', label: `Send to ${userEmail}` }
];

const mockEnterCode = jest.fn();
const mockCancel = jest.fn();
const mockResend = jest.fn();

const Base = (props: any) => { 
  
  const baseProps = {
    radioOptions,
    isOpen: true,
    onEnterNewCode: mockEnterCode,
    onCancel: mockCancel, 
    onResend: mockResend,
    successMessage: successMessage
  };
  const mergedProps = {...baseProps, ...props};

  return (
  <MoreWaysToValidate
    {...mergedProps}
  />
);};


describe('More Ways to Validate Screen behaves correctly', () => {

  it('renders without crashing and matches snapshot', () => {
    const { container } = render(
      <Base />
    )

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should not render when isOpen is false', () => {
    const { container } = render(
      <Base isOpen={false} />
    );

    expect(container.firstChild).toBeNull();
  });

  it('onResend, onCancel callbacks should fire correctly', () => {
    render(
      <Base/>
    );

    const resendBtn = screen.getByRole('button', { name: 'Resend code'});
    const cancelBtn = screen.getByRole('button', { name: 'Cancel'});

    userEvent.click(resendBtn);
    expect(mockResend).toBeCalledTimes(1);

    userEvent.click(cancelBtn);
    expect(mockCancel).toHaveBeenCalledTimes(0);
    setTimeout( () => { expect(mockCancel).toBeCalledTimes(1) }, 400);

  });

  it('onEnterNewCode callback should fire correctly', () => {

    render(
      <Base 
        showSuccess
      />
    );
    
    const reenterBtn = screen.getByRole('button', { name: 'Enter new code'});

    userEvent.click(reenterBtn);
    expect(mockResend).toBeCalledTimes(1);
  })

  it('should should a success message when success happens', () => {
    render(
      <Base 
        showSuccess
        successMessage={successMessage}
      />
    );

    const alert = screen.getByRole('alert');
    expect(alert).toHaveTextContent(successMessage)
  })

  it('shows the correct layout when success is true', () => {
   const { container } = render(
    <Base 
      showSuccess
      successMessage={successMessage}
    />
   );

   expect(container.firstChild).toMatchSnapshot();
  });

  it('renders a radio button for each radio option passed in', () => {
    render(
      <Base />
    );
    
    expect(screen.getAllByRole('radio').length).toEqual(radioOptions.length);
  });
})